import React from "react";

import {
  Seo,
  Header,
  Footer,
  // About,
  Navbar,
  LazyShow,
  MainHeroImage,
  Timeline,
} from "components";

function Home() {
  const meta = {
    title: process.env.REACT_APP_TITLE || "",
    description: process.env.REACT_APP_DESCRIPTION || "",
    lang: process.env.REACT_APP_LANG || "",
    image: process.env.REACT_APP_IMAGE || "",
    author: process.env.REACT_APP_AUTHOR || "",
    siteUrl: process.env.REACT_APP_SITE_URL || "",
  };

  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <Seo site={meta} />
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
      {/* <LazyShow>
        <>
          <About />
        </>
      </LazyShow> */}
      <LazyShow>
        <>
          <div className="hidden md:block">
            <Timeline />
          </div>
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Footer />
        </>
      </LazyShow>
    </div>
  );
}

export default Home;
