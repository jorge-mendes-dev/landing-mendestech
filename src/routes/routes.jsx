import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Page404 = lazy(() => import('pages/404'))
const Home = lazy(() => import('pages/home'))
const AboutMe = lazy(() => import('pages/aboutMe'))
const Projects = lazy(() => import('pages/projects'))
const Utils = lazy(() => import('pages/utils'))

const PageRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={''}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<AboutMe />} />
        <Route exact path="projects" element={<Projects />} />
        <Route exact path="utils" element={<Utils />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)

export default PageRoutes
