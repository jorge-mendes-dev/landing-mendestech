import React from 'react'

import {
  Footer,
  Utilities,
  Navbar,
  LazyShow,
  TalkLink,
  OpenLink,
  CreateQRCode
} from 'components'

function Utils() {
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
          </div>
        </div>
      </div>
      <LazyShow>
        <Utilities />
      </LazyShow>
      <LazyShow>
        <TalkLink />
      </LazyShow>
      <LazyShow>
        <OpenLink />
      </LazyShow>
      <LazyShow>
        <CreateQRCode />
      </LazyShow>
      <LazyShow>
        <Footer />
      </LazyShow>
    </div>
  )
}

export default Utils
