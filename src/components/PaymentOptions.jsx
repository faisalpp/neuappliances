import React from 'react'

const PaymentOptions = () => {
  return (
    <div className='flex lg:flex-row flex-col items-center gap-5 justify-center w-full' >

      <div className='flex flex-col px-8 py-5 bg-white rounded-md lg:w-4/12 w-10/12' >
        <div className='flex flex-col space-y-1 items-center justify-center w-full' >
          <h6 className='text-lg font-bold' >Pay Once</h6>
          <h6 className='text-xl font-bold text-b3' >$399.99</h6>
          <h6 className='text-xs' >One time payment</h6>
        </div>
        <div className='flex flex-col space-y-2 mt-3' >
          <div className='flex text-sm' ><h6 className='w-52' >Eu sagittis ameta</h6><div className='flex justify-end w-full' ><h6>$399.99</h6></div></div>
          <div className='flex text-sm' ><h6 className='w-52' >Eu sagittis ameta</h6><div className='flex justify-end w-full' ><h6>$29.99</h6></div></div>
          <div className='flex text-sm' ><h6 className='w-52' >Eu sagittis amet a</h6><div className='flex justify-end w-full' ><h6>Free</h6></div></div>
          <div className='flex py-2 text-sm border-t-[1px] border-gray-200' ><h6 className='w-52 font-bold' >Enim sed cras</h6><div className='flex justify-end w-full' ><h6 className='font-semibold' >$399.99</h6></div></div>
          <button className='flex items-center justify-center text-white py-2 rounded-md bg-b7 text-sm' >Start your purchase</button>
        </div>
      </div>

      <div className='flex flex-col px-8 py-5 rounded-md bg-white lg:w-4/12 w-10/12' >
        <div className='flex flex-col space-y-1 items-center justify-center w-full' >
          <h6 className='text-lg font-bold' >Pay Monthly</h6>
          <h6 className='text-xl font-bold text-b3' >$25-$15</h6>
          <h6 className='text-xs' >One time payment</h6>
        </div>
        <div className='flex flex-col space-y-7 mt-5' >
          <p className='text-xs text-center' >Vestibulum habitant hac sollicitudin convallis hendrerit. In pretium eget amet nibh vulputate felis vitae neque aliquam. Nibh nam varius ut.</p>
          <p className='text-xs text-center' >Interdum posuere tempor ante eu porta. </p>
          <button className='flex items-center justify-center text-white py-2 rounded-md bg-b7 text-sm' >Start your purchase</button>
        </div>
      </div>


    </div>
  )
}

export default PaymentOptions