import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

function Seo({ site }) {
  const { description, lang, title, image, author, siteUrl } = site;
  const ogImage = `${siteUrl}/public/${image}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image:src`,
          content: ogImage,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
  );
}

Seo.propTypes = {
  site: PropTypes.shape({
    description: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    siteUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Seo;
