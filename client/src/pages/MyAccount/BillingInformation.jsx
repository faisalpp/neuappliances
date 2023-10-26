import React,{useEffect,useState} from 'react';
import MyAccount from '../../layout/MyAccount';
import CustomInput from '../../components/Reusable/CustomInput';
import TextInput from '../../components/TextInput/TextInput';
import { FiChevronDown } from 'react-icons/fi';
import CustomButton from '../../components/Reusable/CustomButton';
import { useSelector } from 'react-redux';
import {GetBillingAddress} from '../../api/user/profile'
import States from '../../services/states'
import SelectInput from '../../components/TextInput/SelectInput'

const BillingInformation = () => {

    const _id = useSelector((state)=>state.user._id)

    const [billingAddress,setBillingAddress] = useState([])

    const getBillingAddress = async () => {
      const res = await GetBillingAddress({_id:_id})
      if(res.status === 200){
        setBillingAddress(res.data.billingAddress)
      }
    }

    useEffect(()=>{
        getBillingAddress()
    },[])

    return (
        <>
            <MyAccount>
                <h2 className='text-2xl font-bold mb-10'>Billing Information</h2>
                {billingAddress.firstName ? <BillingInformationData data={billingAddress} />:null}
            </MyAccount >
        </>
    )
}

export default BillingInformation


const BillingInformationData = ({data}) => {
    
    const [firstName,setFirstName] = useState(data.firstName)
    const [lastName,setLastName] = useState(data.lastName)
    const [address,setAddress] = useState(data.address)
    const [city,setCity] = useState(data.city)
    const [postalCode,setPostalCode] = useState(data.postalCode)
    const [phone,setPhone] = useState(data.phone)

    const updatedStates = States.map((item)=>item.abbreviation !== States[0].abbreviation )
    console.log(updatedStates)

    return (
        <>
            <div className='lg:max-w-[432px] w-full flex flex-col gap-6'>
                <TextInput title="First Name" width="full" value={firstName} />
                <TextInput title="Last Name" width="full" value={lastName} />
                <TextInput title="Address" width="full" value={address} />

                <div>
                    <label className='text-b16 font-semibold text-xs block mb-2'>
                        Country
                    </label>
                    <div className='relative'>
                        <select className='border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none'>
                            <option value="usa">United States</option>
                        </select>
                        <FiChevronDown className='absolute right-4 top-3' />
                    </div>
                </div>
                <SelectInput title="State" widthFull="true" options={States} />

                <TextInput title="City" width="full" value={city} />
                <TextInput title="Post Code" width="full" value={postalCode} />
                <TextInput title="Phone" width="full" value={phone} />

                {/*Submit Button */}
                <CustomButton ButtonName="Save Changes" />
            </div>
        </>
    )
}

export { BillingInformationData };