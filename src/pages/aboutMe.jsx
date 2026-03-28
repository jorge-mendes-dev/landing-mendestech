import { useEffect } from 'react'

import {
  About,
  ClientsList,
  Footer,
  HeaderSub,
  LazyShow,
  Navbar,
  ScrollToTop,
  Seo,
  SkillsList,
  Timeline
} from 'components'

import code from 'assets/images/code.jpg'

import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics'
import { backToTop } from 'utils/generic'

function AboutMe() {
  const { sendPageView } = useGoogleAnalytics()

  useEffect(() => {
    backToTop()
    sendPageView()
  }, [])

  return (
    <>
      <Seo
        title="About Me"
        description="Senior Software Engineer with 8 years of experience developing scalable applications with JavaScript, React, Redux, TypeScript. Expert in modern frontend technologies and agile methodologies."
        url="https://jorgemendes.com.br/about"
        type="profile"
        keywords={[
          'About Jorge Mendes',
          'Senior Software Engineer',
          'React Expert',
          'TypeScript Developer',
          'Frontend Developer',
          'Full Stack Engineer',
          'Agile Development',
          'JavaScript Expert'
        ]}
      />
      <div
        className={`bg-white transition-all duration-500 dark:bg-black grid overflow-hidden`}
      >
        <div
          className={`relative bg-white transition-all duration-500 dark:bg-background-dark`}
        >
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative z-10 pb-8 bg-white dark:bg-background-dark lg:max-w-2xl lg:w-full`}
            >
              <Navbar />
            </div>
          </div>
        </div>
        <LazyShow>
          <HeaderSub title={'About Me'} background={code} />
        </LazyShow>
        <LazyShow>
          <About />
        </LazyShow>
        <LazyShow>
          <SkillsList />
        </LazyShow>
        <LazyShow>
          <ClientsList />
        </LazyShow>
        <LazyShow>
          <Timeline />
        </LazyShow>
        <LazyShow>
          <Footer />
        </LazyShow>
        <ScrollToTop />
      </div>
    </>
  )
}

export default AboutMe
