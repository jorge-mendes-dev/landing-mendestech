import { useEffect } from 'react'
import { LazyShow, Navbar, NotFound } from 'components'
import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics'

function Page404() {
  const { sendPageView } = useGoogleAnalytics()

  useEffect(() => {
    sendPageView()
  }, [])

  return (
    <div className={`relative bg-background dark:bg-black`}>
      <div className={`relative bg-background dark:bg-black`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background dark:bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Navbar />
          </div>
        </div>
      </div>
      <LazyShow>
        <>
          <NotFound title={'PAGE NOT FOUND'} />
        </>
      </LazyShow>
    </div>
  )
}

export default Page404
