import React, { useEffect } from 'react'

import {
  Footer,
  About,
  Navbar,
  LazyShow,
  ClientsList,
  Counter,
  Timeline,
  SkillsList
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
      className={`transition-all duration-500 bg-background dark:bg-black grid gap-y-16 overflow-hidden`}
    >
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
        <About layout={'About'} />
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
