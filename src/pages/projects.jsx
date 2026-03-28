import { useEffect } from 'react'

import {
  Footer,
  HeaderSub,
  LazyShow,
  Navbar,
  ProjectsList,
  ScrollToTop,
  Seo
} from 'components'

import notebook from 'assets/images/notebook.jpg'

import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics'
import { backToTop } from 'utils/generic'

function Projects() {
  const { sendPageView } = useGoogleAnalytics()

  useEffect(() => {
    backToTop()
    sendPageView()
  }, [sendPageView])

  return (
    <>
      <Seo
        title="Projects Portfolio"
        description="Explore my portfolio of web development projects including Escala Plantões, Hotmart, ProVu, Aprova, and WebMeeting. Built with React, Angular, TypeScript, and modern web technologies."
        url="https://jorgemendes.com.br/projects"
        keywords={[
          'Web Development Projects',
          'React Projects',
          'Portfolio',
          'Angular Projects',
          'TypeScript Applications',
          'Full Stack Projects',
          'Web Applications'
        ]}
      />
      <div
        className={`bg-white transition-all duration-500 dark:bg-background-dark grid overflow-hidden`}
      >
        <div className={`relative bg-white dark:bg-background-dark`}>
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative z-10 pb-8 bg-white dark:bg-background-dark lg:max-w-2xl lg:w-full`}
            >
              <Navbar />
            </div>
          </div>
        </div>
        <LazyShow>
          <HeaderSub
            title={'Projects'}
            description={'Portfolio'}
            background={notebook}
          />
        </LazyShow>
        <LazyShow>
          <ProjectsList except={'none'} />
        </LazyShow>
        <LazyShow>
          <Footer />
        </LazyShow>
        <ScrollToTop />
      </div>
    </>
  )
}

export default Projects
