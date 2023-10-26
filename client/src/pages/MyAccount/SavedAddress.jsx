import React, { useEffect, useState } from 'react';
import MyAccount from '../../layout/MyAccount';
import EditSavedAddress from '../../components/MyAccount/EditSavedAddress';
import { useSelector } from 'react-redux';
import {GetShippingAddresses} from '../../api/user/profile'

const SavedAddress = () => {

    const _id = useSelector((state)=>state.user._id)

    const [shippingAddresses,setShippingAddresses] = useState([])

    const getShippingAddresses = async () => {
      const res = await GetShippingAddresses({_id:_id})
      console.log(res)
      if(res.status === 200){
        setShippingAddresses(res.data.shippingAddresses)
      }
    }

    useEffect(()=>{
        getShippingAddresses()
    },[])

    return (
        <>
            <MyAccount>
            {shippingAddresses?.length > 0 ? shippingAddresses.map((item)=>  <SavedAddressData data={item} />):null}
            </MyAccount>
        </>
    )
}

export default SavedAddress


const SavedAddressData = ({data}) => {

    return (
        <>
            <div className='flex flex-col gap-10 [&>hr:last-child]:hidden'>
             <EditSavedAddress addr={data}  />
            </div>
        </>
    )
}

export { SavedAddressData };