import { memo, useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import {
  Footer,
  LazyShow,
  Navbar,
  ProjectDetails,
  ProjectsList
} from 'components'

import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics'
import { backToTop } from 'utils/generic'

import { useProjectDataByName } from 'hooks/useProjectDataByName'

const ProjectInfo = () => {
  const { name } = useParams()
  const { sendPageView } = useGoogleAnalytics()

  useEffect(() => {
    backToTop()
    sendPageView()
  }, [])

  const getProjectDataByName = useProjectDataByName()
  const [projectData, setProjectData] = useState(null)

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
      <div className={`relative bg-background dark:bg-zinc-900`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background dark:bg-zinc-900 lg:max-w-2xl lg:w-full`}
          >
            <Navbar />
          </div>
        </div>
      </div>
      <LazyShow>
        {projectData ? (
          <ProjectDetails data={projectData} />
        ) : (
          <div className="min-h-[200px] flex items-center justify-center text-lg text-gray-500 dark:text-gray-400">
            Loading project details...
          </div>
        )}
      </LazyShow>

      <LazyShow>
        <ProjectsList customTitle={'Other Projects'} except={`${name}`} />
      </LazyShow>
      <LazyShow>
        <Footer />
      </LazyShow>
    </div>
  )
}

export default memo(ProjectInfo)
