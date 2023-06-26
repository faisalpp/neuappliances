import React from 'react'

const Loader = () => {
  return (
     <div style={{height: 'calc(100vh - 200px)'}} className='flex items-center justify-center absolute w-full z-40 bg-white/80' >
        <img src='/loading.gif' className='h-12' />
      </div> 
  )
}

export default Loader