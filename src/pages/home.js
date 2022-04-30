import React from 'react'

import { Navbar, Header, Footer, Content } from 'components'
import { random } from 'utils/random'
import { aboutMe } from 'info/aboutMe'

function Home() {
  return (
    <>
      <Navbar title="Mendes Tech" />
      <Header title="Mendes Technology" />
      <Content>
        {aboutMe.map(item => (
          <p key={random()}>{item}</p>
        ))}
      </Content>
      <Footer />
    </>
  )
}

export default Home
