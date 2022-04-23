import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import history from 'utils/history'

import Page404 from 'pages/Page404'
import About from 'pages/about'
import Home from 'pages/home'

const PageRoutes = () => (
  <Router history={history}>
    <Suspense fallback={false}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  </Router>
)

export default PageRoutes
