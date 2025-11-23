import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Skeleton } from 'components'

const Page404 = lazy(() => import('pages/404'))
const Home = lazy(() => import('pages/home'))
const AboutMe = lazy(() => import('pages/aboutMe'))
const Projects = lazy(() => import('pages/projects'))
const Project = lazy(() => import('pages/project'))
const Utils = lazy(() => import('pages/utils'))
const Resume = lazy(() => import('pages/resume'))

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<AboutMe />} />
        <Route exact path="projects" element={<Projects />} />
        <Route exact path="utils" element={<Utils />} />
        <Route exact path="project/:name" element={<Project />} />
        <Route exact path="resume" element={<Resume />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </AnimatePresence>
  )
}

const PageRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<Skeleton />}>
      <AnimatedRoutes />
    </Suspense>
  </BrowserRouter>
)

export default PageRoutes
