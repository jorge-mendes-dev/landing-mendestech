import { useEffect, Suspense } from 'react'
import {
  LazyShow,
  Navbar,
  Reader,
  Skeleton,
  Footer,
  HeaderSub
} from 'components'
import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics'
import code from 'assets/images/code.jpg'
import config from 'config'

function Resume() {
  const { sendPageView } = useGoogleAnalytics()

  useEffect(() => {
    sendPageView()
  }, [])

  return (
    <div className={`relative bg-white dark:bg-black`}>
      <div className={`relative bg-white dark:bg-zinc-900`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-white dark:bg-zinc-900 lg:max-w-2xl lg:w-full lg:px-8 lg:py-10`}
          >
            <Navbar />
          </div>
        </div>
      </div>
      <LazyShow>
        <HeaderSub
          title={'Resume'}
          description={'See my resume'}
          background={code}
        />
      </LazyShow>
      <LazyShow>
        <main className="min-h-screen bg-gray-50 dark:bg-zinc-900 py-10 scroll-smooth p-6 lg:p-10">
          <Suspense fallback={<Skeleton />}>
            <Reader selected={config.resume} />
          </Suspense>
        </main>
      </LazyShow>
      <LazyShow>
        <Footer />
      </LazyShow>
    </div>
  )
}

export default Resume
