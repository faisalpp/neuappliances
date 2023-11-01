import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/DeskComp/Footer'
import ScrollToTop from '../components/DeskComp/ScrollToTop'

const MainLayout = ({ children }) => {
  return (
    <>
      <div className='fixed px-2 z-50 top-0 cursor-pointer text-white bg-black w-full h-fit' >
       <h6 className='text-[10px] font-semibold text-center' >Neu v{import.meta.env.VITE_APP_VERSION}</h6>
      </div>
      <NavBar />
      <ScrollToTop />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout