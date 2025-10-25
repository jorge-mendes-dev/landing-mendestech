import { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { useResizeObserver } from '@wojtekmaj/react-hooks'
import { pdfjs, Document, Page } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import Skeleton from 'components/Skeleton'
import {
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

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

const NavbarZoom = ({
  handleFullscreen,
  isFullscreen,
  handleZoomIn,
  handleZoomReset,
  handleZoomOut,
  memoSelected
}) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-2 bg-white/90 dark:bg-zinc-800/90 rounded-full shadow px-2 py-3 opacity-90 backdrop-blur-md transition-all duration-300 hover:opacity-100 hidden md:flex">
      <button
        onClick={handleFullscreen}
        className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-indigo-100 transition-colors hover:shadow"
        title={isFullscreen ? 'Exit FullScreen' : 'FullScreen'}
        type="button"
      >
        {isFullscreen ? (
          <ArrowsPointingInIcon className="w-5 h-5 text-zinc-700 dark:text-white dark:hover:text-indigo-100 " />
        ) : (
          <ArrowsPointingOutIcon className="w-5 h-5 text-zinc-700 dark:text-white dark:hover:text-indigo-100 " />
        )}
      </button>
      <button
        onClick={handleZoomIn}
        className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
        title="Improve zoom"
        type="button"
      >
        <MagnifyingGlassPlusIcon className="w-5 h-5 text-zinc-700 dark:text-white dark:hover:text-indigo-100 " />
      </button>

      <button
        onClick={handleZoomReset}
        className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
        title="Reset zoom"
        type="button"
      >
        <ArrowPathIcon className="w-5 h-5 text-zinc-700 dark:text-white dark:hover:text-indigo-100 " />
      </button>
      <button
        onClick={handleZoomOut}
        className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
        title="Remove zoom"
        type="button"
      >
        <MagnifyingGlassMinusIcon className="w-5 h-5 text-zinc-700 dark:text-white dark:hover:text-indigo-100 " />
      </button>
      <button
        onClick={() => {
          const link = document.createElement('a')
          link.href = memoSelected
          link.download =
            memoSelected.split('/').pop() || 'jorge_mendes_resume.pdf'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }}
        className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
        title="Download PDF"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-zinc-700 dark:text-white"
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
    </div>
  )
}

const DocumentPreview = ({
  memoSelected,
  onDocumentLoadSuccess,
  options,
  numPages,
  containerWidth,
  zoom
}) => {
  return (
    <Document
      file={`${memoSelected}`}
      onLoadSuccess={onDocumentLoadSuccess}
      options={options}
      loading={
        <div className="animate pulse">
          <Skeleton />
        </div>
      }
      className="bg-gray-100 shadow-sm"
    >
      {typeof numPages === 'number' &&
        numPages > 0 &&
        Array.from({ length: numPages }, (_el, index) => (
          <Page
            key={`page_${index + 1}`}
            className="mb-4 last:mb-0 bg-gray-100 dark:bg-zinc-900"
            pageNumber={index + 1}
            width={
              containerWidth
                ? Math.min(containerWidth, maxWidth) * zoom
                : maxWidth * zoom
            }
          />
        ))}
    </Document>
  )
}

const LayoutContainer = ({ children, isFullscreen, setContainerRef }) => {
  return (
    <div
      className={
        `relative mx-auto max-w-3xl animate-fade-in rounded-lg border-zinc-900 shadow bg-gray-200 dark:bg-black` +
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

  const onResize = useCallback((entries) => {
    const [entry] = entries

    if (entry) {
      setContainerWidth(entry.contentRect.width)
    }
  }, [])

  useResizeObserver(containerRef, resizeObserverOptions, onResize)

  function onDocumentLoadSuccess(pdf) {
    setNumPages(pdf.numPages)
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

  return (
    <LayoutContainer
      isFullscreen={isFullscreen}
      setContainerRef={setContainerRef}
    >
      <NavbarZoom
        handleFullscreen={handleFullscreen}
        isFullscreen={isFullscreen}
        handleZoomIn={handleZoomIn}
        handleZoomReset={handleZoomReset}
        handleZoomOut={handleZoomOut}
        memoSelected={memoSelected}
      />

      <div className="flex flex-col items-center">
        <DocumentPreview
          memoSelected={memoSelected}
          onDocumentLoadSuccess={onDocumentLoadSuccess}
          options={options}
          numPages={numPages}
          containerWidth={containerWidth}
          zoom={zoom}
        />
      </div>
    </LayoutContainer>
  )
}
