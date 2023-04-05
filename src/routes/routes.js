import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// const Page404 = lazy(() => import("pages/page404"));
// const Home = lazy(() => import("pages/home"));
// const Utils = lazy(() => import("pages/utils"));

import Page404 from 'pages/page404'
import Home from 'pages/home'
import Utils from 'pages/utils'

const PageRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={''}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="utils" element={<Utils />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)

export default PageRoutes
