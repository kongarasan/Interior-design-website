import React from 'react'
import Hero from '../Hero/Hero'
import Plan from '../Plan/Plan'
import Living from '../Hero/Living/Living'
import About from '../Hero/Aboutus/About'
import Brand from '../Hero/Brand/Brand'
import Footer from '../Footer/Footer'
import Project from '../Hero/Projects/Project'

const Home = () => {
  return (
   <div>
    <Hero/>
    <Plan/>
    <Living/>
    <About/>
    <Brand/>
    <Project/>
    <Footer/>
   </div>
  )
}

export default Home