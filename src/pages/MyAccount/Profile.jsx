import React, { useState } from 'react';
import MyAccount from '../../layout/MyAccount';
import CustomInput from '../../components/Reusable/CustomInput';
import CustomButton from '../../components/Reusable/CustomButton';
import { FiChevronDown } from 'react-icons/fi';


const Profile = () => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('yourusername@email.com')
    const [phone,setPhone] = useState('+1 000-000-0000')

    return (
        <>
            <MyAccount>
                <div className='flex flex-col gap-6 max-w-[432px] w-full'>
                    <CustomInput label="First name" state={firstName} setState={setFirstName} />
                    <CustomInput label="Last name" state={lastName} setState={setLastName} />
                    <CustomInput label="Email Address" type="email" state={email} setState={setEmail} />
                    <div>
                        <label className='text-b16 font-semibold text-xs block mb-2'>
                            Country
                        </label>
                        <div className='relative'>
                            <select className='border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none'>
                                <option value="">Country</option>
                                <option value="">Afghanistan</option>
                                <option value="">Algeria</option>
                                <option value="">Austria</option>
                                <option value="">China</option>
                                <option value="">India</option>
                                <option value="">France</option>
                            </select>
                            <FiChevronDown className='absolute right-4 top-3' />
                        </div>
                    </div>
                    <CustomInput label="Phone" state={phone} setState={setPhone} />
                    {/*Submit Button */}
                    <CustomButton ButtonName="Save Changes" />
                </div>
            </MyAccount>
        </>
    )
}

export default Profile