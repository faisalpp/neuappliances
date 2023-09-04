import React from 'react';
import MyAccount from '../../layout/MyAccount';
import EmailPreferenceData from '../../components/MyAccount/EmailPreferenceData';

const EmailPreferences = () => {

    return (
        <>
            <MyAccount>
                <EmailPreferencesData />
            </MyAccount>
        </>
    )
}

export default EmailPreferences


const EmailPreferencesData = () => {
    return (
        <>
            <div className='flex flex-col gap-10 [&>hr:last-child]:hidden'>
                <EmailPreferenceData title="Deals & Offers" />
                <EmailPreferenceData title="Newsletter" />
            </div>
        </>
    )
}

export { EmailPreferencesData };