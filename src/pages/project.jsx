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
import { useGoogleAnalytics } from 'hooks/useGoogleAnalytics'

import plantoes from 'config/project/plantoes'
import hotmart from 'config/project/hotmart'
import aprova from 'config/project/aprova'
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
        <ProjectsList customTitle={'Other Projects'} except={`${name}`} />
      </LazyShow>
      <LazyShow>
        <Footer />
      </LazyShow>
    </div>
  )
}

export default ProjectInfo
