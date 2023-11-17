import React, { useEffect } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import 'react-toastify/dist/ReactToastify.css';
import TextInput from '../../components/TextInput/TextInput';
import SelectInput from '../../components/TextInput/SelectInput';
import { useParams } from 'react-router-dom';

const UpdateCustomer = () => {
      const params = useParams()

      const GetCustomerDetails = () => {
        
      }

      useEffect(()=>{
        GetCustomerDetails()
      },[params])

      return (
        <>
        <AdminAccount>
         <div className='flex justify-center w-full'>
         <form className='flex flex-col justify-center space-y-5 w-full px-10 py-10 my-5 rounded-2xl bg-white border-[1px] border-gray-200' > 
          <h2 className='font-bold' >User Info</h2>
          <div className='flex space-x-5 items-center' >
           <TextInput  name="firstName" title="First Name" iscompulsory="false" type="text"  />
           <TextInput  name="lastName" title="Last Name" iscompulsory="false" type="text" />
          </div>
          <div className='flex space-x-5 items-center' >
           <TextInput  name="email" title="Email" iscompulsory="false" type="text"  />
           <TextInput  name="phone" title="Phone" iscompulsory="false" type="text" />
          </div>
          <h2 className='font-bold' >Shipping Address</h2>
          <div className='flex space-x-5 items-center' >
           <TextInput  name="firstName" title="First Name" iscompulsory="false" type="text"  />
           <TextInput  name="lastName" title="Last Name" iscompulsory="false" type="text" />
          </div>
          <div className='flex space-x-5 items-center' >
           <TextInput  name="address1" title="Address Line 1" iscompulsory="false" type="text"  />
           <TextInput  name="address2" title="Address Line 2" iscompulsory="false" type="text" />
          </div>
          <div className='flex space-x-5 items-center' >
           <SelectInput  name="address1" title="Country" options={['USA']} iscompulsory="false" type="text"  />
           <SelectInput  name="address2" title="State" options={['New York']} iscompulsory="false" type="text" />
          </div>
          <div className='flex space-x-5 items-center' >
           <TextInput  name="address1" title="City" iscompulsory="false" type="text"  />
           <TextInput  name="address2" title="Postal Code" iscompulsory="false" type="text" />
           <TextInput  name="address2" title="Phone" iscompulsory="false" type="text" />
          </div>

          <h2 className='font-bold' >Billing Address</h2>
          <div className='flex space-x-5 items-center' >
           <TextInput  name="firstName" title="First Name" iscompulsory="false" type="text"  />
           <TextInput  name="lastName" title="Last Name" iscompulsory="false" type="text" />
          </div>
          <div className='flex space-x-5 items-center' >
           <TextInput  name="address1" title="Address Line 1" iscompulsory="false" type="text"  />
           <TextInput  name="address2" title="Address Line 2" iscompulsory="false" type="text" />
          </div>
          <div className='flex space-x-5 items-center' >
           <SelectInput  name="country" title="Country" options={['USA']} iscompulsory="false" type="text"  />
           <SelectInput  name="state" title="State" options={['New York']} iscompulsory="false" type="text" />
          </div>
          <div className='flex space-x-5 items-center' >
           <TextInput  name="city" title="City" iscompulsory="false" type="text"  />
           <TextInput  name="postalCode" title="Postal Code" iscompulsory="false" type="text" />
           <TextInput  name="phone" title="Phone" iscompulsory="false" type="text" />
          </div>
          <button type="submit" className='flex self-end justify-center items-center cursor-pointer rounded-md py-2 text-white w-24 bg-b3' ><span className='text-xs' >Update User</span></button>
          </form>

         </div>
        </AdminAccount>
        </>
    )
}

export default UpdateCustomer