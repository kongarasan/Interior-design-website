import React from 'react'
import Hero from '../Hero/Hero'
import Plan from '../Plan/Plan'
import Living from '../Hero/Living/Living'
import About from '../Hero/Aboutus/About'
import Brand from '../Hero/Brand/Brand'
import Footer from '../Footer/Footer'
import Project from '../Hero/Projects/Project'
import News from '../Hero/News/News'

const Home = () => {
  return (
   <div>
    <Hero/>
    <Plan/>
    <Living/>
    <About/>
    <Brand/>
    <Project/>
    <News/>
    <Footer/>
   </div>
  )
}

export default Home