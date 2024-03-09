import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from './Hero'

const NavbarHero = () => {
  return (
    <div className="bg-image h-screen">
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default NavbarHero