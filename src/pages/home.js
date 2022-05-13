import React from 'react'
import { Seo } from 'components'

import { Navbar, Header, Footer, Content, Skills, Timeline, FlexContainer, About } from 'components'
import { journeyEng } from 'info/journey'
import { hardSkills, softSkills } from 'info/skills'

function Home() {
  const meta = {
    title: process.env.REACT_APP_TITLE || '',
    description: process.env.REACT_APP_DESCRIPTION || '',
    lang: process.env.REACT_APP_LANG || '',
    image: process.env.REACT_APP_IMAGE || '',
    author: process.env.REACT_APP_AUTHOR || '',
    siteUrl: process.env.REACT_APP_SITE_URL || ''
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
