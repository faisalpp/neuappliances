import React from 'react';
import MyAccount from '../../layout/MyAccount';
import EditSavedAddress from '../../components/MyAccount/EditSavedAddress';

const SavedAddress = () => {

    return (
        <>
            <MyAccount>
                <SavedAddressData />
            </MyAccount>
        </>
    )
}

export default SavedAddress


const SavedAddressData = () => {
    return (
        <>
            <div className='flex flex-col gap-10 [&>hr:last-child]:hidden'>
                <EditSavedAddress />
                <EditSavedAddress />
            </div>
        </>
    )
}

export { SavedAddressData };