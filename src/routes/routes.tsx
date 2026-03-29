import { Skeleton } from 'components'
import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

const Page404 = lazy(() => import('pages/404'))
const Home = lazy(() => import('pages/home'))
const AboutMe = lazy(() => import('pages/aboutMe'))
const Projects = lazy(() => import('pages/projects'))
const Project = lazy(() => import('pages/project'))
const Utils = lazy(() => import('pages/utils'))
const Resume = lazy(() => import('pages/resume'))

const AnimatedRoutes: React.FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="utils" element={<Utils />} />
        <Route path="project/:name" element={<Project />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </AnimatePresence>
  )
}

const PageRoutes: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Skeleton />}>
      <AnimatedRoutes />
    </Suspense>
  </BrowserRouter>
)

export default PageRoutes
