import React, { useEffect } from 'react'

import {
  Footer,
  ProjectsList,
  Navbar,
  LazyShow,
  PlayerAnimation,
  HeaderSub
} from 'components'

import { backToTop } from 'utils/generic'
import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics'

import alien from 'utils/JSON/alienInRocket.json'

function Projects() {
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
            className={`relative z-10 pb-8 bg-background dark:bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Navbar />
          </div>
        </div>
      </div>
      <LazyShow>
        <HeaderSub title={'Projects Portfolio'} />
      </LazyShow>
      <LazyShow>
        <ProjectsList except={'none'} />
      </LazyShow>
      <LazyShow>
        <PlayerAnimation animation={alien} />
      </LazyShow>
      <LazyShow>
        <Footer />
      </LazyShow>
    </div>
  )
}

export default Projects
