import React from 'react'
import DeskNavbar from './DeskComp/Navbar/Navbar'
import MobNavbar from './MobComp/Navbar'
import SideCart from './SideCart'

const Navbar = () => {
  return (
    <>
      <DeskNavbar />
      <MobNavbar />
      <SideCart />
    </>
  )
}

export default Navbar