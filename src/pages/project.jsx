import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import {
  ProjectDetails,
  Footer,
  Navbar,
  LazyShow,
  ProjectsList
} from 'components'

import { backToTop } from 'utils/generic'

import plantoes from 'config/project/plantoes'

const ProjectInfo = () => {
  const { name } = useParams()

  useEffect(() => {
    backToTop()
  }, [])

  const getProjectDataByName = (key) => {
    switch (key) {
      case 'plantoes':
        return plantoes
      default:
        return plantoes
    }
  }

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
        <ProjectDetails data={getProjectDataByName(name)} />
      </LazyShow>
      <LazyShow>
        <ProjectsList
          layout={'Home'}
          customTitle={'Other Projects'}
          minus={name}
        />
      </LazyShow>
      <LazyShow>
        <Footer />
      </LazyShow>
    </div>
  )
}

export default ProjectInfo
