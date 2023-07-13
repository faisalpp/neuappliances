import React from 'react';
import MyAccount from '../../layout/MyAccount';
import CustomInput from '../../components/Reusable/CustomInput';
import { FiChevronDown } from 'react-icons/fi';
import CustomButton from '../../components/Reusable/CustomButton';

const BillingInformation = () => {

    return (
        <>
            <MyAccount>
                <h2 className='text-2xl font-bold mb-10'>Billing Information</h2>
                <div className='max-w-[432px] w-full flex flex-col gap-6'>
                    <CustomInput label="First name" value="John" />
                    <CustomInput label="Last name" value="Doe" />
                    <div>
                        <CustomInput label="Billing address" value="234 Wall Street" />
                        <CustomInput placeholder="Address line 2" />
                    </div>

                    <div>
                        <label className='text-b16 font-semibold text-xs block mb-2'>
                            Country
                        </label>
                        <div className='relative'>
                            <select className='border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none'>
                                <option value="">United States</option>
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
                    <div>
                        <label className='text-b16 font-semibold text-xs block mb-2'>
                            State
                        </label>
                        <div className='relative'>
                            <select className='border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none'>
                                <option value="">New York</option>
                            </select>
                            <FiChevronDown className='absolute right-4 top-3' />
                        </div>
                    </div>

                    <CustomInput label="City" value="Brooklyn" />
                    <CustomInput label="Postal code" type="number" placeholder="00000" />
                    <CustomInput label="Phone" placeholder="+1 000-000-0000" />

                    {/*Submit Button */}
                    <CustomButton ButtonName="Save Changes" />
                </div>

            </MyAccount >
        </>
    )
}

export default BillingInformation