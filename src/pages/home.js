import React from 'react'

import { Navbar, Header, Footer, Content, Skills } from 'components'
import { random } from 'utils/random'
import { aboutMe } from 'info/aboutMe'
import { hardSkills, softSkills } from 'info/skills'

function Home() {
  return (
    <>
      <Navbar title="Mendes Tech" />
      <Header title="Mendes Technology" />
      <Content>
        {aboutMe.map(item => (
          <p key={random()}>{item}</p>
        ))}
        <Skills title="hard skills" data={hardSkills} />
        <Skills title="soft skills" data={softSkills} />
      </Content>
      <Footer />
    </>
  )
}

export default Home
