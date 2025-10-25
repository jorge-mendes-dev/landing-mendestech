import { useEffect } from 'react'

import {
  About,
  ClientsList,
  Counter,
  Footer,
  HeaderSub,
  LazyShow,
  Navbar,
  SkillsList,
  Timeline
} from 'components'

import code from 'assets/images/code.jpg'

import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics'
import { backToTop } from 'utils/generic'

function AboutMe() {
  const { sendPageView } = useGoogleAnalytics()

  useEffect(() => {
    backToTop()
    sendPageView()
  }, [])

  return (
    <div
      className={`bg-background transition-all duration-500 dark:bg-black grid overflow-hidden`}
    >
      <div
        className={`relative bg-background transition-all duration-500 dark:bg-zinc-900`}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background dark:bg-zinc-900 lg:max-w-2xl lg:w-full`}
          >
            <Navbar />
          </div>
        </div>
      </div>
      <LazyShow>
        <HeaderSub title={'About Me'} background={code} />
      </LazyShow>
      <LazyShow>
        <About />
      </LazyShow>
      <LazyShow>
        <SkillsList />
      </LazyShow>
      <LazyShow>
        <Counter />
      </LazyShow>
      <LazyShow>
        <ClientsList />
      </LazyShow>
      <LazyShow>
        <Timeline />
      </LazyShow>
      <LazyShow>
        <Footer />
      </LazyShow>
    </div>
  )
}

export default AboutMe
