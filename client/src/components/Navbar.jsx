import React, { useState } from 'react'

import DeskNavbar from './DeskComp/Navbar/Navbar'
import MobNavbar from './MobComp/Navbar'
import SideCart from './SideCart'

const Navbar = () => {
  const [sCart, setSCart] = useState(false);
  return (
    <>
      <DeskNavbar />
      <MobNavbar />
      <SideCart />
    </>
  )
}

export default Navbar