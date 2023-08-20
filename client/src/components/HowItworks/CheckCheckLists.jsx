import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import { IoCloseOutline } from "react-icons/io5";
import FaqAccordion from "../FaqAccordion";

const CheckCheckLists = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const handleOpen = () => setOpen(!open);

    const handleChecklists = (value) => {
        setActiveTab(value);
    }

    const ChecklistsContent = [
        { title: 'Washer', content: "Power Cable undamaged, Power Cable is conductive, Machine powers on correctly,Machine powers off correctly,Gentle agitation cycles operate as intended,Medium agitation cycles operate as intended,High agitation cycles operate as intended,Drain & Spin cycles operate as intended,Control Panel responsive,User Interface Panel responsive,LED lights functional,Knobs responsive,Buttons responsive,Dials responsive,Internal Hoses correctly mounted,Internal Hoses unobscured,Internal Hoses active,Timers appropriately advance,Drain pump tighly mounted,Drain pump unobscured,Drain pump active,Drain Hose unobstructed,Drain Pump active when engaged,Suspension rods correctly in-line,Suspension rods responsive,Suspension system correctly calibrated,Drum correctly mounted,Drum correctly spins,Basket correctly fastened,Basket checked for leaks (none found),Filter secured,Filter unobstructed,Door Lock engages correctly,Door Lock disengages correctly,Terminal Block undamaged,Terminal Block conductive,Cold Inlet Valve mounted correctly,Cold Inlet Valve aligned,Cold Inlet Valve undamaged,Cold Inlet Valve unobstructed,Cold Inlet Valve sealed (no leaks),Hot Inlet Valve mounted correctly,Hot Inlet Valve aligned,Hot Inlet Valve undamaged,Hot Inlet Valve unobstructed,Hot Inlet Valve sealed (no leaks),Fill Spout aligned,Fill Spout unobstructed,Machine fills to low water levels correctly,Machine fills to medium water levels correctly,Machine fills to high water levels correctly,Door Strike aligned,Door Sensor responsive when Strike is engaged,Cold Water Option dispensing cold water,Warm Water Option dispensing warm water,Hot Water Option dispensing hot water,Machine is balanced while active,Machine is clear of scrapes during operation,Top Panel secure,Left Side Panel secure,Right Side Panel secure,Back Panel secure,All parts of frame securely fastened,Washer Feet present,Washer Feet adjustable/removable,Washer is stabilized and leveled when inactive,Washer is stabilized and leveled when active,Motor securely fastened,Capacitor readings within acceptable levels,Capacitor securely fastened,Tachometer securely fastened,Shift Actuator linked to splutch correctly,Splutch shifting functioning normally,Splutch fastened to gear case correctlys,No noise created when turning gear case,Gearcase mounted correctly and securely,Pressure hose securely fastened at both ends,Pressure hose checked for kinks or clogs,Pressure Chamber attached/undamaged,Wiring Harness checked for damage,Dispenser drawer housing hoses all secured tightly,Dispenser drawer housing checked for cracks/leaks,Dispenser drawer slides back and forth with ease,Dispenser drawer checked for cracks/damage,Dispenser drawer present&#44; all parts accounted for,At top speeds reached there are no foreign noises present,Tub cover present,Tub cover properly securred,Child Lock function working,Washer top or lid securely fastened,Belt present/undamaged and fastened correctly,Fabric Softener dispenser recieving water,Fabric Softener dispenser sealed (no leaks),Fabric Softener dispenser active when engaged,Fabric Softener dispenser active when engaged,Shifter attached correctly and functioning normally,Bearings mounted,Bearings secured,Steam cycles active,Steam cycles responsive" },
        { title: 'Dryers', content: "Buttons responsive, Power Cable is conductive, Machine powers on correctly,Machine powers off correctly" },
        { title: 'Ranges', content: "Power Cable undamaged2, Power Cable is conductive, Machine powers on correctly,Machine powers off correctly" },
        { title: 'Refrigerators', content: "Power Cable undamaged3, Power Cable is conductive, Machine powers on correctly,Machine powers off correctly" },
        { title: 'DishWashers', content: "Power Cable undamaged4, Power Cable is conductive, Machine powers on correctly,Machine powers off correctly" },
        { title: 'Microwaves', content: "Power Cable undamaged5, Power Cable is conductive, Machine powers on correctly,Machine powers off correctly" }
    ]
    return (
        <>
            <button onClick={handleOpen} className='px-4 py-3 bg-b3 text-white font-semibold rounded-lg'>See our Checklists</button>
            <Dialog className="relative lg:!min-w-[85%] maxmd:mt-20" open={open} handler={handleOpen} size="xl">
                <DialogHeader className="px-5 pt-10 pb-4 md:py-10 md:p-10 block">
                    <h2 className=" text-xl md:text-2xl lg:text-3xl xl:text-4xl font-body md:mb-8 text-black md:text-center">Checklists</h2>
                    {isDesktop ?
                        <div className="flex maxxl:flex-wrap maxxl:justify-center xl:columns-6 gap-4 w-full">
                            {ChecklistsContent.map((item, index) => (
                                <button key={index} onClick={() => handleChecklists(index)} className={`text-base xl:w-full items-center py-4 px-4 rounded-2xl flex justify-center gap-2 xl:whitespace-nowrap ${activeTab === index ? 'active bg-b3 font-bold text-white' : 'bg-b11 text-black font-medium'}`}>
                                    {item.title}
                                </button>
                            ))}
                        </div>
                        : ''}
                </DialogHeader>
                <DialogBody className="px-5 pt-0 md:px-10 pb-52 h-[40rem] overflow-y-auto" id="checklists">
                    {isDesktop ?
                        <>
                            {activeTab !== -1 && (
                                <>
                                    <h3 className="mb-4 font-semibold text-black text-lg">{ChecklistsContent[activeTab].title}</h3>
                                    <ul className="m-0 p-0 grid grid-cols-3 gap-y-4 gap-x-10">
                                        {ChecklistsContent[activeTab].content.split(',').map((item, index) => (
                                            <li key={index} className="flex items-center gap-2" ><img className="w-4 h-4" src="/howitworks/checklist.png" alt="checklist" /><span dangerouslySetInnerHTML={{ __html: item.trim() }}></span></li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </>
                        :
                        <div className="space-y-4">
                            {ChecklistsContent.map((item, index) => (
                                <FaqAccordion key={index} activeBg="!bg-b3" activeText="!text-white" title={item.title} parent='overflow-hidden !p-0 rounded-lg [&>div]:px-6 [&>div]:py-4' icon='text-xl text-black' textStyle='font-bold text-md text-b18' child='bg-white p-5' answer={<ul className="m-0 p-0 grid sm:grid-cols-2 gap-4">
                                    {item.content.split(',').map((item, index) => (
                                        <li key={index} className="flex items-center gap-2 text-black"><img className="w-4 h-4" src="/howitworks/checklist.png" alt="checklist" /><span dangerouslySetInnerHTML={{ __html: item.trim() }}></span></li>
                                    ))}
                                </ul>} chevrown />
                            ))}
                        </div>
                    }
                </DialogBody>
                <button type='button' onClick={handleOpen} className='absolute right-0 md:-right-10 -top-10 md:top-0 bg-b3 text-white flex p-1 justify-center items-center w-8 h-8 rounded-full'>
                    <IoCloseOutline className='text-3xl' />
                </button>
            </Dialog>
        </>
    )
}

export default CheckCheckLists
