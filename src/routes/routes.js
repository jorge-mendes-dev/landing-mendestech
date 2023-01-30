import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Page404 from "pages/Page404";
import Home from "pages/home";
import Utils from "pages/utils";

const PageRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={false}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/utils" element={<Utils />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default PageRoutes;
