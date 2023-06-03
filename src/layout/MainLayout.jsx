import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/DeskComp/Footer'
import ScrollToTop from '../components/DeskComp/ScrollToTop'

const MainLayout = ({children}) => {
  return (
    <>
    <NavBar/>
    <ScrollToTop/>
    {children}
    <Footer/>
    </>
  )
}

export default MainLayout