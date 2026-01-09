import { useMemo } from 'react'
import config from 'config'

/**
 * Enhanced SEO component with dynamic meta tags, structured data, and social media optimization
 * @param {Object} props - SEO configuration
 * @param {string} props.title - Page title (will be appended with site name)
 * @param {string} props.description - Page description
 * @param {string} props.image - Social media share image path
 * @param {string} props.url - Canonical URL for the page
 * @param {string} props.type - Open Graph type (website, article, profile)
 * @param {string[]} props.keywords - SEO keywords for the page
 * @param {Object} props.structuredData - JSON-LD structured data
 */
function Seo({
  title: pageTitle,
  description: pageDescription,
  image: pageImage,
  url: pageUrl,
  type: pageType,
  keywords: pageKeywords,
  structuredData
} = {}) {
  const { seo } = config
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    lang,
    author,
    siteUrl,
    type: defaultType,
    keywords: defaultKeywords
  } = seo

  // Use page-specific values or fallback to defaults
  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
  const description = pageDescription || defaultDescription
  const image = pageImage || defaultImage
  const type = pageType || defaultType
  const canonical = pageUrl || siteUrl
  const keywords = pageKeywords || defaultKeywords || []

  const ogImage = useMemo(
    () => (image.startsWith('http') ? image : `${siteUrl}/${image}`),
    [image, siteUrl]
  )

  // Generate structured data JSON-LD
  const jsonLd = useMemo(() => {
    if (structuredData) {
      return JSON.stringify(structuredData)
    }

    // Default Person/Professional schema
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Jorge Mendes',
      jobTitle: 'Senior Full Stack Developer',
      url: siteUrl,
      image: ogImage,
      sameAs: [
        'https://github.com/jorge-mendes-dev',
        'https://linkedin.com/in/jorge-mendes-dev'
      ],
      knowsAbout: [
        'JavaScript',
        'React',
        'TypeScript',
        'Node.js',
        'Web Development',
        'Full Stack Development'
      ],
      alumniOf: 'Software Engineering',
      description: description
    })
  }, [structuredData, siteUrl, ogImage, description])

  return (
    <head>
      <html lang={lang} />

      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Robots Meta */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Jorge Mendes - Senior Developer" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:site" content={author} />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#0691c1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">{jsonLd}</script>
    </head>
  )
}

export default Seo
