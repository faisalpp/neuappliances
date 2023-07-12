import React from 'react'

const Email = () => {
    return (
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <nav style={{ backgroundColor: '#071822', padding: 'calc(25px)' }}>
                <img src="/email/neu.png" className='mail_logo' alt="" style={{ margin: '0 auto', height: '40px', objectFit: 'contain' }} />
            </nav>
            <div style={{ padding: '40px calc(5vw)', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <img src="/email/email_banner.png" className='mail_banner' alt="" style={{ margin: '0 auto' }} />
                <div style={{ color: '#242424', fontSize: '20px' }}>
                    <h3>Dear User</h3>
                    <p style={{ marginTop: '40px' }}>
                        Your Neu Appliance order #3839884903 has successfully been placed, You will find all the details about your order below, and we’ll send you a shipping confirmation email as soon as your order ships, In the meantime, you can shared Neu Appliance and earn store credit.
                    </p>
                </div>
                <h2 style={{ fontSize: '20px', color: '#242424' }}>Questions? Suggestions? Insights show thoughts? Shoot us an email</h2>
                <div style={{ border: '1px solid #D9D9D9', borderRadius: '8px', padding: '0 16px' }}>
                    <div style={{ fontSize: '14px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '24px', padding: '12px 0px', borderBottom: '1px solid #D9D9D9' }}>
                        <h3 style={{ color: '#737373', minWidth: '123px' }}>Order Number</h3>
                        <span style={{ color: '#111010', fontWeight: '500' }}>#3839884903</span>
                    </div>
                    <div style={{ fontSize: '14px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '24px', padding: '12px 0px', borderBottom: '1px solid #D9D9D9' }}>
                        <h3 style={{ color: '#737373', minWidth: '123px' }}>Order Date</h3>
                        <span style={{ color: '#111010', fontWeight: '500' }}>name@example.com</span>
                    </div>
                    <div style={{ fontSize: '14px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '24px', padding: '12px 0px', borderBottom: '1px solid #D9D9D9' }}>
                        <h3 style={{ color: '#737373', minWidth: '123px' }}>Shipping Address</h3>
                        <span style={{ color: '#111010', fontWeight: '500' }}>151 O’Connor St Ground floor, Ottawa ON K2P 2L8, Canada</span>
                    </div>
                    <div style={{ fontSize: '14px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '24px', padding: '12px 0px', borderBottom: '1px solid #D9D9D9' }}>
                        <h3 style={{ color: '#737373', minWidth: '123px' }}>Billing Address</h3>
                        <span style={{ color: '#111010', fontWeight: '500' }}>151 O’Connor St Ground floor, Ottawa ON K2P 2L8, Canada</span>
                    </div>
                </div>
                <div style={{ border: '1px solid #D9D9D9', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
                    <h3 style={{ fontSize: '16px', color: '#242424', fontWeight: '500', letterSpacing: '-0.2px' }}>Here’s what you ordered.</h3>
                    <div style={{ padding: '16px calc(1.89vw)' }}>
                        <div style={{ display: 'flex', gap: '14px' }}>
                            <div style={{ minWidth: '64px', position: 'relative' }}>
                                <img src="/p1.png" style={{ width: '64px', height: '64px', objectFit: 'contain' }} alt="" />
                                <span style={{ position: 'absolute', width: '21px', height: '21px', color: 'white', fontWeight: '500', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '-10px', right: '-10px', fontSize: '12px', borderRadius: '100%', padding: '2px', backgroundColor: '#22A6AB' }}>
                                    1
                                </span>
                            </div>
                            <div style={{ display: 'flex', gap: '14px', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', width: '100%' }}>
                                <div>
                                    <h3 style={{ fontSize: '14px', fontWeight: '500', color: '#333', letterSpacing: '-0.2px' }}>White GE 1.7 cu. ft. Over the Range Microwave with Convenience</h3>
                                    <p style={{ color: '#737373', fontSize: '12px', letterSpacing: '-0.2px' }}>
                                        5 Stars (Flawless Cosmetic Rating)
                                    </p>
                                </div>
                                <div style={{ color: '#22A6AB', fontSize: '14px', fontWeight: '500' }}>
                                    $100.00
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '20px', fontWeight: '600' }}>Subtotal (4 Items):</h3>
                        <span style={{ fontSize: '32px', fontWeight: '600' }}>
                            $2,279.00
                        </span>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#071822', padding: '20px', color: 'white', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                <span>&#169; 2022 Neu Appliances</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <a href='/'>Terms of Use</a>   •   <a href='/'>Privacy Policy</a>   •   <a href='/'>Help Center</a>
                </div>
            </div>
        </div>
    )
}

export default Email