import { useEffect } from 'react'

import {
  Feedbacks,
  Footer,
  Header,
  HomeAbout,
  LazyShow,
  MainHeroImage,
  Navbar,
  ProjectsList,
  SkillsList
} from 'components'

import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics'
import { backToTop } from 'utils/generic'

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
      <div className={`relative bg-background dark:bg-zinc-900`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background dark:bg-zinc-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Navbar />
            <Header />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <LazyShow>
        <HomeAbout />
      </LazyShow>
      <LazyShow>
        <SkillsList />
      </LazyShow>
      <LazyShow>
        <Feedbacks />
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
