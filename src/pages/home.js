import React from 'react'
import { Seo } from 'components'

function Home() {
  const meta = {
    title: process.env.TITLE || '',
    description: process.env.DESCRIPTION || '',
    lang: process.env.LANG || '',
    image: process.env.IMAGE || '',
    author: process.env.AUTHOR || '',
    siteUrl: process.env.SITE_URL || ''
  }

  return (
    <>
      <Seo site={meta} />
      <p>Hello World!</p>
    </>
  )
}

export default Home
