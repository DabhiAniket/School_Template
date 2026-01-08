import React from 'react'
import NavBar from './Component/NavBar'
import Header from './Component/Header'
import Home from './Component/Home'
import Courses from './Component/Courses'
import Section from './Component/Card/Section'
import Event from './Component/Event'
import Blog from './Component/Blog'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Home />
      <Courses />
      <Section />
      <Event />
      <Blog />
      <Footer />
    </>
  )
}

export default App