import React from 'react'

import {
  Footer,
  About,
  Navbar,
  LazyShow,
  ClientsList,
  Counter
} from 'components'

function AboutMe() {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Navbar />
          </div>
        </div>
      </div>
      <LazyShow>
        <About />
      </LazyShow>
      <LazyShow>
        <Counter />
      </LazyShow>
      <LazyShow>
        <ClientsList />
      </LazyShow>
      <LazyShow>
        <Footer />
      </LazyShow>
    </div>
  )
}

export default AboutMe
