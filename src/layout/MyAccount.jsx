import React from 'react';
import MainLayout from './MainLayout';

const MyAccount = ({ children }) => {

    return (
        <>
            <MainLayout>
                <div>
                    <h1>My Account</h1>
                    {children}
                </div>
            </MainLayout>
        </>
    )
}

export default MyAccount