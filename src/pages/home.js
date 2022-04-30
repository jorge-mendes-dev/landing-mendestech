import React from 'react'
import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Content from 'components/Content'

function Home() {
  return (
    <>
      <Navbar title="Mendes Tech" />
      <Header title="Mendes Technology" />
      <Content>
        <p>Hello World! MendesTech!</p>
      </Content>
      <Footer />
    </>
  )
}

export default Home
