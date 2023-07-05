import React, { useEffect, useState } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { FiChevronRight } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const ManageFaq = () => {
    const tabsData = [
        {
            id: 1, label: 'General FAQ’s', link: "/admin/create-faq/general-faq",
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
            id: 2, label: "3 Star FAQ's", link: "/admin/create-faq/3-star-faq",
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
            id: 3, label: "4 Star FAQ's" ,link: "/admin/create-faq/4-star-faq",
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
            id: 4, label: "5 Star FAQ's",link: "/admin/create-faq/5-star-faq",
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
    ]

    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <>
            <AdminAccount>
                {/* Products Operations */}
                <div className="tab-buttons maxlg:order-2 lg:w-[50%] flex flex-col gap-2">
                    {tabsData.map((tab) => (
                        <NavLink to={tab.link}>
                            <button
                                key={tab.id}
                                className={`p-5 xl:p-6 xl:text-lg font-semibold flex justify-between items-center text-left border border-[rgba(0,0,0,0.15)] rounded-2xl ${activeTab === tab.id ? 'active text-white bg-b7' : 'text-b23'}`}
                                onClick={() => handleTabClick(tab.id)}
                            >
                                <span>
                                    {tab.label}
                                </span>
                                {activeTab === tab.id ? <FiChevronRight /> : ''}
                            </button>
                        </NavLink>
                    ))}
                </div>
            </AdminAccount>
        </>
    )
}

export default ManageFaq