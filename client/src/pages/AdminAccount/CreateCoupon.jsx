import React,{useState} from 'react'
import AdminAccount from '../../layout/AdminAccount';
import TextInput from '../../components/TextInput/TextInput'
import TextAreaInput from '../../components/TextInput/TextAreaInput'
import ShippingTable from '../../components/AdminDashboard/Shipping/ShippingTable'
import {Link} from 'react-router-dom'
import Popup from '../../components/AdminDashboard/Popup'


const CreateCoupon = () => {
    const [popup,setPopup] = useState(false)
  const [errors,setErrors] = useState([])


    return ( 
        <>
    <Popup zindex="z-[99]" state={popup} setState={setPopup} >
      <div className='w-full' >
       <h3 className='text-center font-semibold' >Add Coupon</h3>
       <div className='flex flex-col space-y-2 mt-2' >
       <TextInput width="full" title="Coupon Code" iscompulsory="false" type="text" error={errors && errors.includes('Date is Required!') ? true : false} errormessage="Date is Required!" placeholder="Write Coupon Code" />
       <TextAreaInput width="full" title="Coupon Code" iscompulsory="false" type="text" error={errors && errors.includes('Date is Required!') ? true : false} errormessage="Date is Required!" placeholder="Coupon Description (Optional)"></TextAreaInput>
       </div>
      </div>
    </Popup>
    <AdminAccount>
    <h3 className='text-center font-semibold text-xl mb-5' >Manage Coupons</h3>
    <div className='flex flex-col space-y-5' >
     
     

    </div>

    </AdminAccount>
    </>
  )
}

export default CreateCoupon