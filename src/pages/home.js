import React from 'react'
import { Seo } from 'components'

import { Navbar, Header, Footer, Content, Skills, Timeline, FlexContainer, About } from 'components'
import { journeyEng } from 'info/journey'
import { hardSkills, softSkills } from 'info/skills'

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
      <Navbar title="Mendes Tech" />
      <Header title="Mendes Technology" tags="space"/>
      <Content>
        <About id="about" />
        <FlexContainer id="skills">
          <Skills title="hard skills" data={hardSkills} />
          <Skills title="soft skills" data={softSkills} />
        </FlexContainer>
        <Timeline data={journeyEng} />
      </Content>
      <Footer />
    </>
  )
}

export default Home
