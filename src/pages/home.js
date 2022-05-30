import React from "react";
import { Seo } from "components";

function Home() {
  const meta = {
    title: process.env.REACT_APP_TITLE || "",
    description: process.env.REACT_APP_DESCRIPTION || "",
    lang: process.env.REACT_APP_LANG || "",
    image: process.env.REACT_APP_IMAGE || "",
    author: process.env.REACT_APP_AUTHOR || "",
    siteUrl: process.env.REACT_APP_SITE_URL || "",
  };

  return (
    <>
      <Seo site={meta} />
      <p>Hello World!</p>
    </>
  );
}

export default Home;
