import React from 'react'

import {
  Header,
  Footer,
  About,
  Navbar,
  LazyShow,
  MainHeroImage,
  Timeline,
  ProjectsList
} from 'components'

function Home() {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
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
        <ProjectsList />
      </LazyShow>
      <LazyShow>
        <>
          <Timeline />
          <Footer />
        </>
      </LazyShow>
    </div>
  )
}

export default Home
