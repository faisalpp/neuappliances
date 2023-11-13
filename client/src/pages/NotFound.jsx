import React from 'react'
import MainLayout from '../layout/MainLayout'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <MainLayout>
    <div style={{height: "calc(100vh - 135px)"}} className='flex items-center justify-center w-full bg-white/80' >
        <img src="/404.jpg" className='w-6/12' />
    </div>
    </MainLayout>
  )
}

export default NotFound