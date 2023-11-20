import React, { useEffect, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import ApplianceDetail from '../components/Appliances/ApplianceDetail';
import GetScoop from '../components/AppliancesTips/GetScoop';
import ShopAustinSection from '../components/Appliances/ShopAustinSection';
import NewsLetterSection from '../components/NewsLetterSection';
import SatisfiedSection from '../components/SatisfiedSection';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { getFourTips } from '../api/frontEnd';

const HelpfulApliancesTips = () => {

    const [tips,setTips] = useState([])
    const [loading,setLoading] = useState(false)

    const GetFourTips = async () => {
     setLoading(true)
     const res = await getFourTips();
     console.log(res)
     if(res.status === 200){
      setTips(res.data.tips)
      setLoading(false)
     }else{
      setLoading(false)
     }
    }

    useEffect(()=>{
      GetFourTips()
    },[])

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 maincontainer' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center' >
                        <h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-[#C3C2C2]' /><h5 className='text-xs text-b17' >Helpful Appliance Tips</h5>
                    </div>
                    {/* Bread Crumbs End */}
                    <ApplianceDetail title="Helpful Appliance Tips" description="Get the inside scoop! We are a local small business working our butts off to improve the way people can buy appliances. We have lots of experience in the appliance world and we would love to share some tips with you we have accumulated over the years:" />
                </div>

                <GetScoop loading={loading} ScoopCards={tips} />

                {/* Shop Austin Section */}
                <ShopAustinSection />

                <SatisfiedSection apiSectionName="helpfull-appliance-tips-page-review" title="Testimonials" />

                <NewsLetterSection backimage="Newsletter.webp" />
            </MainLayout>
        </>
    )
}

export default HelpfulApliancesTips