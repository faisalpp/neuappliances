import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/DeskComp/Footer'
import ScrollToTop from '../components/DeskComp/ScrollToTop'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = ({ children }) => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
      <NavBar />
      <ScrollToTop />
      {children}
      <Footer />
      <ToastContainer/>
    </>
  )
}

export default MainLayout