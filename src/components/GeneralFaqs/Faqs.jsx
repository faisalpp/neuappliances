import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import FaqAccordion from '../FaqAccordion'

const Faqs = () => {

    const tabsData = [
        {
            id: 1, label: 'General FAQ’s',
            content: [
                { title: 'Are the pictures included of the actual appliance I will receive?', answer: 'Yes! The pictures included on the appliance are of the actual item you are purchasing.  What you see is exactly what you will receive!' },
                { title: 'What happens if my appliance breaks?', answer: 'No worries we have your back! Our 3, 4 and 5 star appliances include a 1-year Neu Shield parts and labor warranty.' },
                { title: 'What happens if the appliance shows up worse than I thought?', answer: 'Not a problem! We offer free curbside returns during delivery. When our delivery team arrives, inspect your appliance and if you dont like it for any reason, we will return it for free for a 100% refund.' },
                { title: 'Do you buy my old appliances?', answer: 'We do not purchase old appliances or offer trade-ins. Try selling it on craigslist or facebook marketplace.' },
                { title: 'Will you haul-away appliances if I order appliances for delivery?', answer: 'We will haul away an equal number of your old appliances as we are delivering. For example: if you purchased 2 appliances for delivery we can haul away 2 old appliances for you! Remember to have your old appliances uninstalled to qualify for free haul away.' },
                { title: 'Will you take my old appliances if I pick up appliances from your store?', answer: 'We do not accept haul-away or old appliances at our store. We can only take your old appliances if we are already onsite for a delivery.' },
                { title: 'Can I return my appliance after it is delivered or picked up?', answer: 'Yes, we offer 30-day returns after delivery or pickup for store credit. We offer free curbside returns during delivery for a 100% refund.' },
            ]
        },
        {
            id: 2, label: '3 Stars Appliances FAQ’s',
            content: [
                { title: 'What should I expect from a 3 star appliance?', answer: '3-star rated appliance get you an open box appliance that works perfectly, with moderate cosmetic damage like scratches or dents at the largest discounted price we offer. Customers purchasing 3 star appliances capitlize on our deepest discounts in exchange for larger cosmetic blemishes while still obtaining a 100% functional appliance.' },
                { title: 'Do 3 star appliances work?', answer: 'Absolutely! We ensure any scratches or dents (if any) do not effect the functionality of the appliance by  thoroughly testing each appliance. Each appliance must pass our 100 point inspection before we will sell it. We also back all of our appliances with our Neu Shield 1-Year parts and labor warranty.' },
                { title: 'Does the 3 star rating refer to the functionality of the appliance or just how it looks?', answer: '3, 4 and 5 star appliances all function exactly as they should. We grade our scratch and dent appliances stricly by their cosmetic appearance (how it looks). All appliances are thoroughly tested and guaranteed to function 100% just like new.' },
                { title: 'What kind of Cosmetic Condition are 3 star appliances in?', answer: '3 Star condition appliances may have multiple minor or more moderate scuffs, scratches or dents or other  moderate cosmetic blemishes resulting in an average "Scratch and dent" cosmetic appearance.' },
                { title: 'Are 3 star appliances new or used?', answer: 'Appliances are not considered "New" if removed from their box, classifying them as "Open Box". Open box appliances may or may not have been used previously by another user. All open box appliances have been "Used" by our staff to test and ensure proper functionality.' },
                { title: 'Will my 3 star appliance arrive in its original packaging', answer: 'Typically no, 3 Star appliances are open box: meaning the original packaging may have been opened or removed.' },
                { title: 'Does my 3 star appliance include all accessories?', answer: 'Great question. Any accessory, originally included on a new item, which is required to operate the appliance normally will be included. Original manufacturer instructions, packaging and accessories that are not required for the operation of the appliance may be missing. A refrigerator water filter will be included (or installed) only if the appliance requires a filter to dispense water or ice. If a refrigerator does not require a filter to dispense water or ice then one may or may not be included. Accessories like hinge adjustment tools, plugs, manuals, instructions or other accessories or items originally included that are not required for normal operation of the appliance may be missing. Installation connections like water lines or hoses, dryer vent tubes or clamps or other accessories to install the appliances are sold separately and not included.' },
                { title: 'Do 3 star appliances include any warranty?', answer: 'Yes! Every appliance we sell comes with our Neu Shield 1 year parts and labor warranty.' },
                { title: 'Is the warranty on a 3 star appliance the same as a 5 star appliance?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
            ]
        },
        {
            id: 3, label: '4 Stars Appliances FAQ’s',
            content: [
                { title: 'What should I expect from a 4 star appliance?', answer: ' 4-star rated appliance get you an open box appliance that works perfectly, with minor to moderate cosmetic damage like scratches or dents at a great discount. Customers purchasing 4 star cosmetic condition appliances are generally more accepting of more minor cosmetic blemishes for a deeper discount on the item while still obtaining a 100% functional appliance.' },
                { title: 'Do 4 star appliances work?', answer: 'Absolutely! We ensure any scratches or dents (if any) do not effect the functionality of the appliance by  thoroughly testing each appliance. Each appliance must pass our 100 point inspection before we will sell it. We also back all of our appliances with our Neu Shield 1-Year parts and labor warranty.' },
                { title: 'Does the 4 star rating refer to the functionality of the appliance or just how it looks?', answer: '3, 4 and 5 star appliances all function exactly as they should. We grade our scratch and dent appliances strictly by their cosmetic appearance (how it looks). All appliances are thoroughly tested and guaranteed to function 100% just like new.' },
                { title: 'What kind of Cosmetic Ratings are 4 star appliances in?', answer: '4 Star condition appliances may have minor to moderate scuffs, scratches or dents or other minor to moderate cosmetic blemishes resulting in an above average "Scratch and dent" cosmetic appearance.' },
                { title: 'Are 4 star appliances new or used?', answer: 'Appliances are not considered "New" if removed from their box, classifying them as "Open Box". Open box appliances may or may not have been used previously by another user. All open box appliances have been "Used" by our staff to test and ensure proper functionality.' },
                { title: 'Will my 4 star appliance arrive in its original packaging', answer: 'Typically no, 4 Star appliances are open box: meaning the original packaging may have been opened or removed.' },
                { title: 'Does my 4 star appliance include all accessories?', answer: 'Great question. Any accessory, originally included on a new item, which is required to operate the appliance normally will be included. Original manufacturer instructions, packaging and accessories that are not required for the operation of the appliance may be missing. A refrigerator water filter will be included (or installed) only if the appliance requires a filter to dispense water or ice. If a refrigerator does not require a filter to dispense water or ice then one may or may not be included. Accessories like hinge adjustment tools, plugs, manuals, instructions or other accessories or items originally included that are not required for normal operation of the appliance may be missing. Installation connections like water lines or hoses, dryer vent tubes or clamps or other accessories to install the appliances are sold separately and not included.' },
                { title: 'Do 4 star appliances include any warranty?', answer: 'Yes! Every appliance we sell comes with our Neu Shield 1 year parts and labor warranty.' },
                { title: 'Is the warranty on a 4 star appliance the same as a 5 star appliance?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
            ]
        },
        {
            id: 4, label: '5 Stars Appliances FAQ’s',
            content: [
                { title: 'What should I expect from a 5 star appliance?', answer: '5-star rated appliance get you an open box appliance that works perfectly, with very minor to no cosmetic damage like scratches or dents at a great discount. Our customers purchasing 5 star Cosmetic condition appliances are generally looking for like new or new appliances while capitalizing on an open box discount vs a "Scratch or Dent" discounted appliance while still obtaining a 100% functional appliance.' },
                { title: 'Do 5 star appliances work?', answer: 'Absolutely! We ensure any scratches or dents (if any) do not effect the functionality of the appliance by  thoroughly testing each appliance. Each appliance must pass our 100 point inspection before we will sell it. We also back all of our appliances with our Neu Shield 1-Year parts and labor warranty.' },
                { title: 'Does the 5 star rating refer to the functionality of the appliance or just how it looks?', answer: '3, 4 and 5 star appliances all function exactly as they should. We grade our scratch and dent appliances stricly by their cosmetic appearance (how it looks). All appliances are thoroughly tested and guaranteed to function 100% just like new.' },
                { title: 'What kind of Cosmetic Ratings are 5 star appliances in?', answer: '5 Star condition open box appliances may have light scuffs, very minor scratches or dents or other more minor cosmetic blemishes resulting in a near perfect or new appearance.' },
                { title: 'Are 5 star appliances new or used?', answer: 'Appliances are not considered "New" if removed from their box, classifying them as "Open Box". Open box appliances may or may not have been used previously by another user. All open box appliances have been "Used" by our staff to test and ensure proper functionality.' },
                { title: 'Will my 5 star appliance arrive in its original packaging', answer: 'Typically no, 5 Star appliances are usually open box: meaning the original packaging may have been opened or removed.' },
                { title: 'Does my 5 star appliance include all accessories?', answer: 'Great question. Any accessory, originally included on a new item, which is required to operate the appliance normally will be included. Original manufacturer instructions, packaging and accessories that are not required for the operation of the appliance may be missing. A refrigerator water filter will be included (or installed) only if the appliance requires a filter to dispense water or ice. If a refrigerator does not require a filter to dispense water or ice then one may or may not be included. Accessories like hinge adjustment tools, plugs, manuals, instructions or other accessories or items originally included that are not required for normal operation of the appliance may be missing. Installation connections like water lines or hoses, dryer vent tubes or clamps or other accessories to install the appliances are sold separately and not included.' },
                { title: 'Do 5 star appliances include any warranty?', answer: 'Yes! Every appliance we sell comes with our Neu Shield 1 year parts and labor warranty.' },
                { title: 'Is the warranty on a 5 star appliance the same as your other condition appliances?', answer: 'Absolutely! 3, 4 and 5 star rated appliances all function like a new appliance. Every appliance we sell receives the same 1 year Neu Sheild warranty.' },
            ]
        }
    ];

    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };


    return (
        <>
            <div className='py-10 lg:py-16 xl:py-20 w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto flex maxlg:flex-col gap-10 lg:gap-7 xl:gap-10'>
                <div className="tab-buttons maxlg:order-2 lg:w-[50%] flex flex-col gap-2">
                    {tabsData.map((tab) => (
                        <button
                            key={tab.id}
                            className={`p-5 xl:p-6 xl:text-lg font-semibold flex justify-between items-center text-left border border-[rgba(0,0,0,0.15)] rounded-2xl ${activeTab === tab.id ? 'active text-white bg-b7' : 'text-[rgba(17,16,16,0.64)]'}`}
                            onClick={() => handleTabClick(tab.id)}
                        >
                            <span>
                                {tab.label}
                            </span>
                            {activeTab === tab.id ? <FiChevronRight /> : ''}
                        </button>
                    ))}
                </div>
                <div className="tab-content w-full">
                    {tabsData.map((tab) => (
                        activeTab === tab.id && <div key={tab.id} className='flex flex-col gap-3 sm:gap-4'>
                            {tab.content.map((content, index) => (
                                <FaqAccordion title={content.title} parent='gap-3 bg-b8/60 [&>div>h6]:maxmd:text-sm text-white p-4 md:px-8 md:py-6 rounded-xl border-none text-b18 h-auto' icon='text-xl text-black' textStyle='font-bold text-md text-b18' child='[&>p]:text-sm text-b18 font-normal' answer={content.answer} />
                            ))}
                            {/* {tab.content} */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Faqs