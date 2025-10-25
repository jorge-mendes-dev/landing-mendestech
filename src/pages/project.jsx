import { useEffect, memo } from 'react'

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

import aprova from 'config/project/aprova'
import hotmart from 'config/project/hotmart'
import plantoes from 'config/project/plantoes'
import provu from 'config/project/provu'
import webmeeting from 'config/project/webmeeting'

/*
let path = window.location.href.split("/").pop()
let info = {}

import(`config/project/${path}.json`)
 .then((data) => {
   info = data
 })
 .catch((error) => {
   console.error(`Error loading JSON file: ${error}`)
 })
*/

const ProjectInfo = () => {
  const { name } = useParams()
  const { sendPageView } = useGoogleAnalytics()

  useEffect(() => {
    backToTop()
    sendPageView()
  }, [])

  const getProjectDataByName = (key) => {
    switch (key) {
      case 'plantoes':
        return plantoes
      case 'hotmart':
        return hotmart
      case 'aprova':
        return aprova
      case 'provu':
        return provu
      case 'webmeeting':
        return webmeeting
      default:
        return plantoes
    }
  }

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
        <ProjectDetails data={getProjectDataByName(name)} />
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
