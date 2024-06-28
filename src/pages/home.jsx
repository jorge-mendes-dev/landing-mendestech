import React, { useEffect } from 'react'

import {
  Header,
  Footer,
  HomeAbout,
  Navbar,
  LazyShow,
  MainHeroImage,
  ProjectsList,
  SkillsList
} from 'components'

import { backToTop } from 'utils/generic'
import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics'

function Home() {
  const { sendPageView } = useGoogleAnalytics()

  useEffect(() => {
    backToTop()
    sendPageView()
  }, [])

  return (
    <div
      className={`bg-background dark:bg-black transition-all duration-500 grid gap-y-16 overflow-hidden`}
    >
      <div className={`relative bg-background dark:bg-black`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background dark:bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Navbar />
            <Header />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <LazyShow></LazyShow>
      <LazyShow>
        <SkillsList />
      </LazyShow>
      <LazyShow>
        <ProjectsList layout={'compact'} except={'none'} />
      </LazyShow>
      <LazyShow>
        <Footer />
      </LazyShow>
    </div>
  )
}

export default Home
