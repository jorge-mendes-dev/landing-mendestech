import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Page404 = lazy(() => import("pages/Page404.js"));
const Home = lazy(() => import("pages/Home.js"));
const Utils = lazy(() => import("pages/Utils.js"));

const PageRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={""}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="utils" element={<Utils />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default PageRoutes;
