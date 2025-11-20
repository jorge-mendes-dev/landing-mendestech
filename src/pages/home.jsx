import { useEffect } from 'react'

import {
  Feedbacks,
  Footer,
  Header,
  HomeAbout,
  LazyShow,
  Navbar,
  ProjectsList,
  SkillsList,
  MainHeroImage
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
      className={`bg-white dark:bg-black transition-all duration-500 grid gap-y-20 md:gap-y-24 overflow-hidden`}
    >
      <div className={`relative bg-gradient-to-br from-white via-gray-50 to-white dark:from-zinc-900 dark:via-black dark:to-zinc-900 overflow-hidden min-h-[600px] lg:min-h-[700px]`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwNjkxYzEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 dark:opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
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
