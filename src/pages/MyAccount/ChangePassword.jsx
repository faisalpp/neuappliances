import React from 'react';
import MyAccount from '../../layout/MyAccount';
import CustomInput from '../../components/Reusable/CustomInput';
import CustomButton from '../../components/Reusable/CustomButton';

const ChangePassword = () => {

    return (
        <>
            <MyAccount>
                <div className='max-w-[432px] w-full flex flex-col gap-6'>
                    <CustomInput label="Current Password" value="••••••••••••••" />
                    <CustomInput label="New Password" value="••••••••••••••" />
                    <CustomInput label="Confirm New Password" value="••••••••••••••" />
                    {/*Submit Button */}
                    <CustomButton ButtonName="Change Password" />
                </div>

            </MyAccount >
        </>
    )
}

export default ChangePassword