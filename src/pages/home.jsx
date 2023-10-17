import React, { useEffect } from 'react'

import {
  Header,
  Footer,
  About,
  Navbar,
  LazyShow,
  MainHeroImage,
  ProjectsList
} from 'components'

import { backToTop } from 'utils/generic'

function Home() {
  useEffect(() => {
    backToTop()
  }, [])

  return (
    <div
      className={`bg-background dark:bg-black grid gap-y-16 overflow-hidden`}
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
      <LazyShow>
        <About layout={'Home'} />
      </LazyShow>
      <LazyShow>
        <ProjectsList layout={'Home'} />
      </LazyShow>
      <LazyShow>
        <Footer />
      </LazyShow>
    </div>
  )
}

export default Home
