import React from 'react';
import MyAccount from '../../layout/MyAccount';
import EditSavedAddress from '../../components/MyAccount/EditSavedAddress';

const SavedAddress = () => {

    return (
        <>
            <MyAccount>
                <div className='flex flex-col gap-10 [&>hr:last-child]:hidden'>
                    <EditSavedAddress />
                    <EditSavedAddress />
                </div>
            </MyAccount>
        </>
    )
}

export default SavedAddress