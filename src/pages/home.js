import React from 'react'

import { Navbar, Header, Footer, Content, Skills, Timeline } from 'components'
import { random } from 'utils/random'
import { aboutMe } from 'info/aboutMe'
import { journeyEng } from 'info/journey'
import { hardSkills, softSkills } from 'info/skills'

function Home() {
  return (
    <>
      <Navbar title="Mendes Tech" />
      <Header title="Mendes Technology" />
      <Content>
        {aboutMe.map(item => (
          <p key={random()} id="#about">{item}</p>
        ))}
        <div id="#skills">
          <Skills title="hard skills" data={hardSkills} />
          <Skills title="soft skills" data={softSkills} />
        </div>
        <Timeline data={journeyEng} />
      </Content>
      <Footer />
    </>
  )
}

export default Home
