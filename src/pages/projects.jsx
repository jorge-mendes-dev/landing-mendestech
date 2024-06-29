import React, { useEffect } from 'react'

import {
  Footer,
  ProjectsList,
  Navbar,
  LazyShow,
  PlayerAnimation,
  HeaderSub
} from 'components'

import code from 'assets/images/code.jpg'

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
            className={`relative z-10 pb-8 bg-background dark:bg-black lg:max-w-2xl lg:w-full`}
          >
            <Navbar />
          </div>
        </div>
      </div>
      <LazyShow>
        <HeaderSub
          title={'Projects'}
          description={'Portfolio'}
          background={code}
        />
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
