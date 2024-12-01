import React from 'react'
import Navbar from '@components/Home/Navbar/navbar';
import Hero from '@components/Home/Hero/Hero';
import About from '@components/About/About';
import Services from '@components/Services/Services';
// import MyWork from '@components/MyWork/MyWork';
import Contact from '@components/Contact/Contact';
import Footer from '@components/Footer/Footer';

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    {/* <MyWork /> */}
    <Contact />
    <Footer />
    </>
  )
}

export default Home