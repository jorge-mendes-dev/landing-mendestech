import React, { memo, useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import {
  Footer,
  Navbar,
  ProjectDetails,
  ProjectsList,
  ScrollToTop
} from 'components/index'

import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics'
import { backToTop } from 'utils/generic'

import { useProjectDataByName } from 'hooks/useProjectDataByName'

const ProjectInfo: React.FC = () => {
  const { name } = useParams()
  const { sendPageView } = useGoogleAnalytics()

  useEffect(() => {
    backToTop()
    sendPageView()
  }, [])

  const getProjectDataByName = useProjectDataByName()
  const [projectData, setProjectData] = useState<any>(null)

  useEffect(() => {
    let isMounted = true
    if (name) {
      getProjectDataByName(name).then((data) => {
        if (isMounted) setProjectData(data)
      })
    }
    return () => {
      isMounted = false
    }
  }, [name, getProjectDataByName])

  return (
    <div
      className={`transition-all duration-500 bg-background dark:bg-black grid gap-y-16 overflow-hidden`}
    >
      <div className={`relative bg-background dark:bg-background-dark`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background dark:bg-background-dark lg:max-w-2xl lg:w-full`}
          >
            <Navbar />
          </div>
        </div>
      </div>
      {projectData ? (
        <ProjectDetails data={projectData} />
      ) : (
        <div className="min-h-[200px] flex items-center justify-center text-lg text-gray-500 dark:text-gray-400">
          Loading project details...
        </div>
      )}
      <ProjectsList customTitle={'Other Projects'} except={`${name}`} />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default memo(ProjectInfo)
