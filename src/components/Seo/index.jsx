import config from 'config'

function Seo() {
  const { seo } = config
  const { title, description, image, lang, author, siteUrl, type } = seo

  const ogImage = `${siteUrl}/${image}`
  return (
    <head>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />

      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} /> */}

      <meta name="author" content={author} />
      <link rel="canonical" href={siteUrl} />
    </head>
  )
}

export default Seo
