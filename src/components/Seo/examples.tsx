/* eslint-disable */
/**
 * SEO Component Usage Examples
 *
 * This file demonstrates how to use the enhanced SEO component
 * for optimal search engine optimization across your website.
 */

import { Seo } from 'components/Seo/index'

// ============================================================
// EXAMPLE 1: Homepage / Default Usage
// ============================================================
function HomePage() {
  return (
    <>
      <Seo
        title="Home"
        description="Jorge Mendes - Senior Full Stack Developer with 8 years of experience"
        url="https://jorgemendes.com.br/"
        keywords={['Jorge Mendes', 'Full Stack Developer', 'React Developer']}
      />
      {/* Page content */}
    </>
  )
}

// ============================================================
// EXAMPLE 2: About Page with Profile Type
// ============================================================
function AboutPage() {
  return (
    <>
      <Seo
        title="About Me"
        description="Learn about my journey as a Senior Software Engineer"
        url="https://jorgemendes.com.br/about"
        type="profile" // Important for personal pages
        keywords={[
          'About Jorge Mendes',
          'Senior Software Engineer',
          'Developer Story'
        ]}
      />
      {/* Page content */}
    </>
  )
}

// ============================================================
// EXAMPLE 3: Project Page with Custom Image
// ============================================================
function ProjectPage() {
  return (
    <>
      <Seo
        title="Escala Plantões Project"
        description="Healthcare scheduling platform built with React and Laravel"
        url="https://jorgemendes.com.br/project/plantoes"
        image="projects/plantoes.jpg" // Custom project image
        type="article"
        keywords={[
          'React Project',
          'Healthcare Platform',
          'Laravel Application'
        ]}
      />
      {/* Page content */}
    </>
  )
}

// ============================================================
// EXAMPLE 4: Blog Post with Article Schema
// ============================================================
function BlogPost() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'How to Build Scalable React Applications',
    author: {
      '@type': 'Person',
      name: 'Jorge Mendes'
    },
    datePublished: '2026-01-09',
    dateModified: '2026-01-09',
    image: 'https://jorgemendes.com.br/blog/react-scalability.jpg',
    publisher: {
      '@type': 'Organization',
      name: 'Jorge Mendes',
      logo: {
        '@type': 'ImageObject',
        url: 'https://jorgemendes.com.br/logo.png'
      }
    }
  }

  return (
    <>
      <Seo
        title="How to Build Scalable React Applications"
        description="Learn best practices for building large-scale React applications that scale"
        url="https://jorgemendes.com.br/blog/scalable-react"
        type="article"
        keywords={[
          'React Best Practices',
          'Scalable Applications',
          'React Architecture'
        ]}
        structuredData={articleSchema}
      />
      {/* Page content */}
    </>
  )
}

// ============================================================
// EXAMPLE 5: Portfolio Work with CreativeWork Schema
// ============================================================
function PortfolioWork() {
  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Hotmart Platform Integration',
    description: 'E-commerce platform integration with advanced features',
    creator: {
      '@type': 'Person',
      name: 'Jorge Mendes',
      url: 'https://jorgemendes.com.br'
    },
    dateCreated: '2024-01-01',
    keywords: ['React', 'TypeScript', 'E-commerce']
  }

  return (
    <>
      <Seo
        title="Hotmart Platform Integration"
        description="E-commerce platform with advanced integration features"
        url="https://jorgemendes.com.br/project/hotmart"
        type="article"
        structuredData={creativeWorkSchema}
      />
      {/* Page content */}
    </>
  )
}

// ============================================================
// EXAMPLE 6: Using Default Values (No Props)
// ============================================================
function DefaultPage() {
  return (
    <>
      {/* Will use all default values from config/index.json */}
      <Seo />
      {/* Page content */}
    </>
  )
}

// ============================================================
// EXAMPLE 7: External Hosted Image
// ============================================================
function PageWithExternalImage() {
  return (
    <>
      <Seo
        title="Special Project"
        description="A unique project showcase"
        url="https://jorgemendes.com.br/special"
        image="https://cdn.example.com/images/special-project.jpg" // Full URL
        keywords={['Special Project', 'Showcase']}
      />
      {/* Page content */}
    </>
  )
}

// ============================================================
// BEST PRACTICES
// ============================================================

/**
 * 1. Title Length
 *    - Keep titles under 60 characters
 *    - Include primary keyword
 *    - Make it compelling for clicks
 */
const goodTitle = 'React TypeScript Tutorial' // ✅ Clear, concise
const badTitle =
  'This is an extremely long title that exceeds the recommended character limit and will be truncated' // ❌ Too long

/**
 * 2. Description Length
 *    - Keep between 150-160 characters
 *    - Include a call-to-action
 *    - Summarize page content
 */
const goodDescription =
  'Learn React TypeScript best practices with real-world examples. Complete guide with code samples and performance tips.' // ✅ ~135 chars
const badDescription = 'React TypeScript' // ❌ Too short

/**
 * 3. Keywords
 *    - Use 5-10 relevant keywords
 *    - Include variations
 *    - Match user search intent
 */
const goodKeywords = [
  'React TypeScript',
  'TypeScript Tutorial',
  'React Best Practices',
  'Frontend Development',
  'Type-safe React'
] // ✅ Diverse, relevant

const badKeywords = ['keyword', 'keyword', 'keyword'] // ❌ Keyword stuffing

/**
 * 4. Canonical URLs
 *    - Always use absolute URLs
 *    - Include https://
 *    - Match the actual page URL
 */
const goodUrl = 'https://jorgemendes.com.br/about' // ✅ Full URL
const badUrl = '/about' // ❌ Relative URL

/**
 * 5. Images
 *    - Use high-quality images (1200x630px for OG)
 *    - Optimize file size (< 500KB)
 *    - Use descriptive filenames
 */
const goodImage = 'jorge-mendes-react-developer.jpg' // ✅ Descriptive
const badImage = 'img123.jpg' // ❌ Not descriptive

// ============================================================
// TESTING YOUR SEO
// ============================================================

/**
 * Tools to validate your SEO implementation:
 *
 * 1. Open Graph Debugger
 *    https://www.opengraph.xyz/
 *
 * 2. Twitter Card Validator
 *    https://cards-dev.twitter.com/validator
 *
 * 3. Google Rich Results Test
 *    https://search.google.com/test/rich-results
 *
 * 4. Schema.org Validator
 *    https://validator.schema.org/
 *
 * 5. Lighthouse SEO Audit
 *    Chrome DevTools > Lighthouse > SEO
 */

// ============================================================
// COMMON STRUCTURED DATA SCHEMAS
// ============================================================

// Person Schema (for About page)
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jorge Mendes',
  jobTitle: 'Senior Full Stack Developer',
  url: 'https://jorgemendes.com.br',
  sameAs: [
    'https://github.com/jorge-mendes-dev',
    'https://linkedin.com/in/jorge-mendes-dev'
  ]
}

// Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Jorge Mendes - Web Development',
  url: 'https://jorgemendes.com.br',
  logo: 'https://jorgemendes.com.br/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Professional'
  }
}

// WebSite Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Jorge Mendes Portfolio',
  url: 'https://jorgemendes.com.br',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://jorgemendes.com.br/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
}

// BreadcrumbList Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://jorgemendes.com.br/'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Projects',
      item: 'https://jorgemendes.com.br/projects'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Project Name'
    }
  ]
}

export {
  AboutPage,
  BlogPost,
  breadcrumbSchema,
  HomePage,
  organizationSchema,
  personSchema,
  PortfolioWork,
  ProjectPage,
  websiteSchema
}
