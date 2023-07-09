import React, { useState,useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import FaqAccordion from '../FaqAccordion'
import {getFaqTab,getFaqs} from '../../api/admin'

const Faqs = () => {
    
    const [faqTabs,setFaqTabs] = useState([])
    const [faqs,setFaqs] = useState([])
    const [slug,setSlug] = useState('')
    const [activeTab, setActiveTab] = useState('');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };


    useEffect(() => {
        const GetFaqTabs = async () => {
            const res = await getFaqTab();
            console.log(res)
            if(res.status === 200){
                setFaqTabs(res.data.faqTabs)
                setActiveTab(res.data.faqTabs[0]._id)
                setSlug(res.data.faqTabs[0].slug)
            }else{
                console.log(res)
            }
        }
        GetFaqTabs()
    }, [])

    useEffect(() => {
        const GetFaqs = async () => {
            try{
                const res = await getFaqs({slug:slug});
                if(res.status === 200){
                    setFaqs(res.data.faqs)
                }
            }catch(error){
                console.log(error)
            } 
            }
        GetFaqs()
    }, [slug])


    return (
        <>
            <div className='py-10 lg:py-16 xl:py-20 w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto flex maxlg:flex-col gap-10 lg:gap-7 xl:gap-10'>
             <div className="tab-buttons maxlg:order-2 lg:w-[50%] flex flex-col gap-2">
              {faqTabs.map((tab) => (
                <button key={tab._id} className={`p-5 xl:p-6 xl:text-lg font-semibold flex justify-between items-center text-left border border-[rgba(0,0,0,0.15)] rounded-2xl ${activeTab === tab._id ? 'active text-white bg-b7' : 'text-b23'}`} 
                 onClick={() => {handleTabClick(tab._id);setSlug(tab.slug)}}>
                 <span>{tab.title}</span>
                 {activeTab === tab._id ? <FiChevronRight /> : ''}
                </button>))}
                </div>
                <div className="tab-content w-full">
                    {faqs.length > 0 ? faqs.map((tab) => (
                        <div key={tab._id} className='flex flex-col gap-3 sm:gap-4'>
                            {faqs.map((content, index) => (
                                <FaqAccordion title={content.question} parent='gap-3 bg-[#F8FBFB] [&>div>h6]:maxmd:text-sm text-white p-4 md:px-8 md:py-6 rounded-xl border-none text-b18 h-auto' icon='text-xl text-black' textStyle='font-bold text-md text-b18' child='[&>p]:text-sm text-b18 font-normal' answer={content.answer} />
                            ))}
                            {/* {tab.content} */}
                        </div>
                    )):<h1 className='text-center' >No FAQ's Found!</h1>}
                </div>
            </div>
        </>
    )
}

export default Faqs