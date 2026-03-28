import {
  ArrowPathIcon,
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon
} from '@heroicons/react/24/outline'
import { useResizeObserver } from '@wojtekmaj/react-hooks'
import Skeleton from 'components/Skeleton'
import { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/'
}

const resizeObserverOptions = {}
const maxWidth = 800

const Navbar = ({
  pageNumber,
  numPages,
  setPageNumber,
  handleZoomIn,
  handleZoomOut,
  handleZoomReset,
  handleFullscreen,
  isFullscreen,
  memoSelected
}) => {
  return (
    <nav className="w-full flex items-center px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 dark:from-blue-900 dark:via-blue-950 dark:to-gray-900 shadow-md rounded-t-2xl">
      {/* Page Controls */}
      <div className="flex-none flex items-center gap-2">
        <button
          onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
          disabled={pageNumber <= 1}
          className="px-2 py-1 rounded bg-blue-800 text-white disabled:opacity-50"
          aria-label="Previous page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <span className="text-white font-medium text-sm">
          Page {pageNumber} of {numPages || 1}
        </span>
        <button
          onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
          disabled={pageNumber >= numPages}
          className="px-2 py-1 rounded bg-blue-800 text-white disabled:opacity-50"
          aria-label="Next page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      {/* Zoom Controls */}
      <div className="flex-1 flex items-center gap-1 justify-center">
        <button
          onClick={handleZoomOut}
          className="p-2 rounded hover:bg-blue-700 text-white"
          title="Zoom out"
        >
          <MagnifyingGlassMinusIcon className="w-5 h-5" />
        </button>
        <button
          onClick={handleZoomReset}
          className="p-2 rounded hover:bg-blue-700 text-white"
          title="Reset zoom"
        >
          <ArrowPathIcon className="w-5 h-5" />
        </button>
        <button
          onClick={handleZoomIn}
          className="p-2 rounded hover:bg-blue-700 text-white"
          title="Zoom in"
        >
          <MagnifyingGlassPlusIcon className="w-5 h-5" />
        </button>
      </div>
      {/* Download & Fullscreen */}
      <div className="flex-none flex items-center gap-1">
        <button
          onClick={() => {
            const link = document.createElement('a')
            link.href = memoSelected
            link.download = memoSelected.split('/').pop() || 'document.pdf'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }}
          className="p-2 rounded hover:bg-blue-700 text-white"
          title="Download PDF"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
            />
          </svg>
        </button>
        <button
          onClick={handleFullscreen}
          className="p-2 rounded hover:bg-blue-700 text-white"
          title={isFullscreen ? 'Exit FullScreen' : 'FullScreen'}
        >
          {isFullscreen ? (
            <ArrowsPointingInIcon className="w-5 h-5" />
          ) : (
            <ArrowsPointingOutIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </nav>
  )
}

const DocumentPreview = ({
  memoSelected,
  onDocumentLoadSuccess,
  options,
  numPages,
  containerWidth,
  zoom,
  pageNumber,
  setPageNumber
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Document
        file={`${memoSelected}`}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
        loading={
          <div className="animate pulse">
            <Skeleton />
          </div>
        }
        className="bg-white dark:bg-zinc-900 shadow-sm"
      >
        {typeof numPages === 'number' && numPages > 0 && (
          <Page
            key={`page_${pageNumber}`}
            className="mb-4 bg-white dark:bg-zinc-900"
            pageNumber={pageNumber}
            width={
              containerWidth
                ? Math.min(containerWidth, maxWidth) * zoom
                : maxWidth * zoom
            }
          />
        )}
      </Document>
      {/* Removed bottom navbar with page controls, now handled by top navbar */}
    </div>
  )
}

const LayoutContainer = ({ children, isFullscreen, setContainerRef }) => {
  return (
    <div
      className={
        `relative mx-auto max-w-3xl animate-fade-in rounded-2xl border border-gray-200 dark:border-gray-800 shadow-card bg-white dark:bg-black` +
        (isFullscreen ? ' overflow-y-auto' : '')
      }
      ref={setContainerRef}
      data-testid="reader"
      style={{
        minHeight: '100vh',
        height: isFullscreen ? '100vh' : undefined
      }}
    >
      {children}
    </div>
  )
}

export default function Reader({ selected }) {
  const memoSelected = useMemo(() => selected, [selected])
  const [numPages, setNumPages] = useState()
  const [containerRef, setContainerRef] = useState(null)
  const [containerWidth, setContainerWidth] = useState()
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [zoom, setZoom] = useState(1.0)
  const [pageNumber, setPageNumber] = useState(1)

  const onResize = useCallback((entries) => {
    const [entry] = entries
    if (entry) {
      setContainerWidth(entry.contentRect.width)
    }
  }, [])
  useResizeObserver(containerRef, resizeObserverOptions, onResize)

  function onDocumentLoadSuccess(pdf) {
    setNumPages(pdf.numPages)
    setPageNumber(1)
  }

  const handleFullscreen = () => {
    if (containerRef && !isFullscreen) {
      containerRef.requestFullscreen?.()
    } else if (document.fullscreenElement) {
      document.exitFullscreen?.()
    }
  }

  useLayoutEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () =>
      document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  const handleZoomIn = useCallback(
    () => setZoom((z) => Math.min(z + 0.1, 2)),
    []
  )
  const handleZoomOut = useCallback(
    () => setZoom((z) => Math.max(z - 0.1, 0.5)),
    []
  )
  const handleZoomReset = useCallback(() => setZoom(1.0), [])

  // Reset page number if file changes
  useLayoutEffect(() => {
    setPageNumber(1)
  }, [memoSelected])

  // Scroll to change page
  useLayoutEffect(() => {
    if (!containerRef) return
    let lastScroll = 0
    let ticking = false
    let scrollTimeout

    const handleScroll = (e) => {
      if (!numPages) return
      const deltaY = e.deltaY
      if (Math.abs(deltaY) < 30) return // ignore small scrolls
      if (ticking) return
      ticking = true
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        ticking = false
      }, 400)
      if (deltaY > 0 && pageNumber < numPages) {
        setPageNumber((p) => Math.min(numPages, p + 1))
      } else if (deltaY < 0 && pageNumber > 1) {
        setPageNumber((p) => Math.max(1, p - 1))
      }
    }

    containerRef.addEventListener('wheel', handleScroll, { passive: false })
    return () => {
      containerRef.removeEventListener('wheel', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [containerRef, numPages, pageNumber])

  return (
    <LayoutContainer
      isFullscreen={isFullscreen}
      setContainerRef={setContainerRef}
    >
      <Navbar
        pageNumber={pageNumber}
        numPages={numPages}
        setPageNumber={setPageNumber}
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
        handleZoomReset={handleZoomReset}
        handleFullscreen={handleFullscreen}
        isFullscreen={isFullscreen}
        memoSelected={memoSelected}
      />
      <DocumentPreview
        memoSelected={memoSelected}
        onDocumentLoadSuccess={onDocumentLoadSuccess}
        options={options}
        numPages={numPages}
        containerWidth={containerWidth}
        zoom={zoom}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </LayoutContainer>
  )
}
