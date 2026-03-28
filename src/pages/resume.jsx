import code from 'assets/images/code.jpg'
import {
  Footer,
  HeaderSub,
  LazyShow,
  Navbar,
  Reader,
  Seo,
  Skeleton
} from 'components'
import config from 'config'
import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics'
import { Suspense, useEffect } from 'react'

function Resume() {
  const { sendPageView } = useGoogleAnalytics()

  useEffect(() => {
    sendPageView()
  }, [sendPageView])

  return (
    <>
      <Seo
        title="Resume / CV"
        description="Download Jorge Mendes' professional resume. Senior Full Stack Developer with expertise in React, TypeScript, JavaScript, Node.js, and modern web technologies. 8 years of experience."
        url="https://jorgemendes.com.br/resume"
        keywords={[
          'Jorge Mendes Resume',
          'Developer CV',
          'React Developer Resume',
          'Full Stack CV',
          'Software Engineer Resume',
          'TypeScript Developer CV'
        ]}
      />
      <div
        className={`bg-white transition-all duration-500 dark:bg-black grid overflow-hidden`}
      >
        <div
          className={`relative bg-white transition-all duration-500 dark:bg-background-dark`}
        >
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative z-10 pb-8 bg-white dark:bg-background-dark lg:max-w-2xl lg:w-full`}
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
          <main className="min-h-screen bg-white dark:bg-background-dark py-10 scroll-smooth p-6 lg:p-10 transition-all duration-500">
            <Suspense fallback={<Skeleton />}>
              <Reader selected={config.resume} />
            </Suspense>
          </main>
        </LazyShow>
        <LazyShow>
          <Footer />
        </LazyShow>
      </div>
    </>
  )
}

export default Resume
