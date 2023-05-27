import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/DeskComp/Footer'

const MainLayout = ({children}) => {
  return (
    <>
    <NavBar/>
    {children}
    <Footer/>
    </>
  )
}

export default MainLayout