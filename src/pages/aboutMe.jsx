import React, { useEffect } from 'react'

import {
  Footer,
  About,
  Navbar,
  LazyShow,
  ClientsList,
  Counter,
  Timeline,
  SkillsList,
  HeaderSub
} from 'components'

import { backToTop } from 'utils/generic'
import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics'

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
      <div className={`relative bg-background dark:bg-black`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background dark:bg-black lg:max-w-2xl lg:w-full`}
          >
            <Navbar />
          </div>
        </div>
      </div>
      <LazyShow>
        <HeaderSub title={'About Me'} />
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
