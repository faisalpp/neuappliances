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

    return (
        <>
            <button onClick={handleOpen} className='px-4 py-3 bg-b3 text-white font-semibold rounded-lg maxmd:w-full'>See our Checklists</button>
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
                                        {ChecklistsContent[activeTab].content.split(' , ').map((item, index) => (
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
                                    {item.content.split(' , ').map((item, index) => (
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

const ChecklistsContent = [
    { title: 'Washer', content: "Power Cable undamaged ,  Power Cable is conductive ,  Machine powers on correctly , Machine powers off correctly , Gentle agitation cycles operate as intended , Medium agitation cycles operate as intended , High agitation cycles operate as intended , Drain & Spin cycles operate as intended , Control Panel responsive , User Interface Panel responsive , LED lights functional , Knobs responsive , Buttons responsive , Dials responsive , Internal Hoses correctly mounted , Internal Hoses unobscured , Internal Hoses active , Timers appropriately advance , Drain pump tighly mounted , Drain pump unobscured , Drain pump active , Drain Hose unobstructed , Drain Pump active when engaged , Suspension rods correctly in-line , Suspension rods responsive , Suspension system correctly calibrated , Drum correctly mounted , Drum correctly spins , Basket correctly fastened , Basket checked for leaks (none found) , Filter secured , Filter unobstructed , Door Lock engages correctly , Door Lock disengages correctly , Terminal Block undamaged , Terminal Block conductive , Cold Inlet Valve mounted correctly , Cold Inlet Valve aligned , Cold Inlet Valve undamaged , Cold Inlet Valve unobstructed , Cold Inlet Valve sealed (no leaks) , Hot Inlet Valve mounted correctly , Hot Inlet Valve aligned , Hot Inlet Valve undamaged , Hot Inlet Valve unobstructed , Hot Inlet Valve sealed (no leaks) , Fill Spout aligned , Fill Spout unobstructed , Machine fills to low water levels correctly , Machine fills to medium water levels correctly , Machine fills to high water levels correctly , Door Strike aligned , Door Sensor responsive when Strike is engaged , Cold Water Option dispensing cold water , Warm Water Option dispensing warm water , Hot Water Option dispensing hot water , Machine is balanced while active , Machine is clear of scrapes during operation , Top Panel secure , Left Side Panel secure , Right Side Panel secure , Back Panel secure , All parts of frame securely fastened , Washer Feet present , Washer Feet adjustable/removable , Washer is stabilized and leveled when inactive , Washer is stabilized and leveled when active , Motor securely fastened , Capacitor readings within acceptable levels , Capacitor securely fastened , Tachometer securely fastened , Shift Actuator linked to splutch correctly , Splutch shifting functioning normally , Splutch fastened to gear case correctlys , No noise created when turning gear case , Gearcase mounted correctly and securely , Pressure hose securely fastened at both ends , Pressure hose checked for kinks or clogs , Pressure Chamber attached/undamaged , Wiring Harness checked for damage , Dispenser drawer housing hoses all secured tightly , Dispenser drawer housing checked for cracks/leaks , Dispenser drawer slides back and forth with ease , Dispenser drawer checked for cracks/damage , Dispenser drawer present&#44; all parts accounted for , At top speeds reached there are no foreign noises present , Tub cover present , Tub cover properly securred , Child Lock function working , Washer top or lid securely fastened , Belt present/undamaged and fastened correctly , Fabric Softener dispenser recieving water , Fabric Softener dispenser sealed (no leaks) , Fabric Softener dispenser active when engaged , Fabric Softener dispenser active when engaged , Shifter attached correctly and functioning normally , Bearings mounted , Bearings secured , Steam cycles active , Steam cycles responsive" },
    { title: 'Dryers', content: "Machine powers on correctly , Machine powers off correctly , Power cord terminal properly mounted , Main power terminal properly mounted , Main power terminal has all fixtures , Main power terminal block responsive , Dents checked for interference with tumbling (none found) , Dents checked for scraping when machine is active (none found) , Control panel responsive , User Settings panel responsive , LED display functional , LED lights functional , All dryer feet present , Dryer feet in good condition , Dryer feet adjustable/removable , Roller wheels unbent , Roller wheels properly fastened , Roller wheels properly rotate , Tumbling belt proplery secrued , Tumbling belt properly fastened , Tumbling belt rotates properly , Tumbling belt in-line with dryer pulley , Dryer pulley fastened correctly , Dryer pulley spinning properly , Low heat settings work correctly , Medium heat settings work correctly , High heat settings work correctly , No heat settings work correctly , Drum is aligned , Drum checked for warps (none found) , Drum checked for dents , Drum attached to wheels and belt properly , Drum tumbles properly , Drum checked for foreign sounds when tumbling (none found) , Heating element mounted properly , Heating element unmarred , Heating element free of punctures and cracks , Heating element responsive , Heating element responsive to low heat settings , Heating element responsive to medium heat settings , Heating element responsive to high heat settings , Heating element responsive to no heat settings , Flame bar mounted properly , Flame bar unmarred , Flame bar free of punctures and cracks , Flame bar responsive , Flame bar responsive to low heat settings , Flame bar responsive to medium heat settings , Flame bar responsive to high heat settings , Flame bar responsive to no heat settings , Motor is mounted properly , Motor is responsive , Motor checked for foreign noises (none found) , Knobs correctly fastened , Knobs responsive , Buttons responsive , Dials responsive , Main timer advances properly , Moinsture sensors properly mounted , Moisture sensors responsive , If any - steam LED options active , If any - steam valves unblocked , If any - steam nozzels operational , If any - wrinkle guard (or similar) dials responsive , If any - wrinkle guard (or similar) functions operational , Shortest automatic dry cycles operate as intended , Meduim automatic dry cycles operate as intended , Longest automatic dry cycles operate as intended , Shortest manual dry cycles work as intended , Medium manual dry cycles work as intended , Longest manual dry cycles work as intended , Shortest no heat cycles work as intended , Medium no heat cycles work as intended , control panel responsive , Longest no heat cycles work as intended , Lint screen present , Lint screen properly lifts out of screen mount , Lint screen properly fits into screen mount , Lint screen properly catches debris , Drum blades properly mounted , Drum blades proplery tumble with drum , Drum felt is clean , Drum flet is properly attached , Drum felt checked for foreign noises while tumbling (none found) , Dryer properly holds heat on low heat settings , Dryer properly holds heat on medium heat settings , Dryer porperly holds heat on high heat settings , End of cycle signal works correctly , Top Panel secure , Left Side Panel secure , Right Side Panel secure , Back Panel secure , Vent chimney checked for clogs or debris , Vent chimney properly in place , Vent chimney properly in place , Door Strike aligned , Door Sensor responsive when Strike is engaged , Blower Fan checked for debris or clogs (none found) , Blower Fan mounted properly , Blower Fan spins opitmally , Doors remain closed and locked when machine is running" },
    { title: 'Ranges', content: "Machine powers on correctly , Machine powers off correctly , Power cord terminal properly mounted , Main power terminal properly mounted , Main power terminal has all fixtures , Main power terminal block responsive , Oven door right hinge mounted properly , Oven door left hinge mounted properly , Hinges allow door to swing open as intended , Hinges allow door to swing closed as intended , Glass checked for critical cracks (none found) , Glass checked for critical breaks (none found) , Control panel appropriately mounted , Control panel responsive , LED clock active , LED timer active , Controls for oven responsive , Controls for broil responsive (if any) , Controls for low heat settings responsive , Controls for medium heat settings responsive , Controls for high heat settings responsive , Dials/Knobs for front right burner properly fastened , Dials/Knobs for front left burner properly fastened , Dials/Knobs for back right burner properly fastened , Dials/Knobs for back left burer properly fastened , Oven controls for low heat settings responsive , Oven controls for medium heat settings responsive , Oven racks present , Oven racks fit properly into guides , Oven racks checked for cracks or breaks (none found) , Oven racks hold proper weight , Oven walls checked for punctures or cracks (none found) , Oven walls properly hold heat , Oven door handles present , Oven door handles firly secured , Door seal present , Door seal properly fastened , Door seal correctly fits along door frame , Feet are present , Feet are balanced , Oven is porperly insulated , Control board properly responds to bake settings , Control board properly responds to broil settings , Stove oven correctly holds heat at low temperatures , Stove oven correclty holds heat at medium temperatures , Stove oven correctly holds heat at high temperatures , Stove front-left-burner properly heats to low temperatures , Stove front-left-burner properly heats to medium temperatures , Stove front-left-burner properly heats to high temperatures , Stove front-right-burner properly heats to low temperatures , Stove front-right-burner properly heats to medium temperatures , Stove front-right-burner properly heats to high temperatures , Stove back-left-burner properly heats to low temperatures , Stove back-left-burner properly heats to medium temperatures , Stove back-left-burner properly heats to high temperatures , Stove back-right-burner properly heats to low temperatures , Stove back-right-burner properly heats to medium temperatures , Stove back-right-burner properly heats to high temperatures , (Gas) Cooking grates are present , (Gas) Cooking grates checked for critical cracks or breaks (none found) , (Gas) Front right gas cap present , (Gas) Front right gas cap checked for critical cracks or breaks (none found) , (Gas) Front left gas cap present , (Gas) Front left gas cap checked for critical cracks or breaks (none found) , (Gas) Back right gas cap present , (Gas) Back right gas cap checked for critical cracks or breaks (none found) , (Gas) Back left gas cap present , (Gas) Back left gas cap checked for critical cracks or breaks (none found) , (Gas) Front right gas orifice/opening checked for debris/interference (none found) , (Gas) Front left gas orifice/opening checked for debris/interference (none found) , (Gas) Back right gas orifice/opening checked for debris/interference (none found) , (Gas) Back left orifice/opening checked for debris/interference (none found) , (Coiltop) Front right element checked for cracks (none found) , (Coiltop) Front right burner pan present , (Coiltop) Front left element checked for cracks (none found) , (Coiltop) Front left burner pan present , (Coiltop) Back right element checked for cracks (none found) , (Coiltop) Back right burner pan present , (Coiltop) Back left element checked for cracks (none found) , (Coiltop) ack left burner pan present , (Glasstop) Glass cooking surface check for critical cracks or breaks (none found) , Bottom drawer attached , Bottom drawer clips present , Bottom drawer slides open and closed , Hot air venting channels checked for clogs (none found) , Oven Fan mounted , Oven Fan secured , Oven Fan undamaged , Oven Fan responsive , Clock Time Entry responsive , Cook Time Display works as intended , Time/Timer advancing correctly , Oven temperature tested with thermometers at 400 , Flame bar checked for damages , Oven light switch responsive , Oven lights mounted , Oven lights protected , Oven lights undamaged , Oven lights responsive" },
    { title: 'Refrigerators', content: "Machine powers on correctly , Machine powers off correctly , Power cord present , Power cord prongs properly fit into outlets , Power cord terminal properly mounted , Handles are present , Handles are firmly attached , Hinges allow door to swing open and close , Hinges firmly mounted , All main shelves present , All main shelves structurally intact , Glass shelves checked for critial breaks or cracks (none found) , Glass windows (if any) checked for critical breaks or cracks (none found) , Doors are aligned to prevent air leaks , Drawers are on proper tracks , Drawers open and close , Door seals in fridge compartments properly attached to door , Door seals in fridge compartments properly hold cold temperatures , Door seals in freezer compartments properly attached to door , Door seals in freezer compartments properly hold feezing temperatures , Dents do not interfere with sealing system , Dents do not interfere with cooling system , Dents do not interfere with defrost system , Dents do not interfere with internal vent system , Ice maker lines checked for clogs or ice build up (none found) , Ice maker lines correctly dispense water into ice maker mechanism , Fridge produces ice appropriately , Fridge stores ice at porper temperatures , Ice dispsner paddle properly aligned , Ice dispener door properly openning and closing , Ice dispener motor responsive , Ice dispenser correctly dispenses ice when activated , Ice dispenser correctly shuts off when deactivated , Ice dispsenser checked for leaks (none found) , Water dispenser paddle properly aligned , Water dispenser nozzle free of debris and glogs , Water dispenser valve responsive , Water dispener correctly dispenses water when activated , Water dispenser correctly shuts off when deactivated , Water dispenser checked for leaks (none found) , Control panel responsive , Control panel properly adjust air flow , Control panel correctly adjusts to desired settings , Control panels acurately adjusts freezer compatments , Control panels acurately adjust ridge compartments , Control panels acuratley adjust between ice and water settings , Compressor checked for cracks or breaks (none found) , Compressor mounted properly , Compressor starts up when plugged in , Compressor checked for foreign noises (none found) , Freezer comparments hold freezing (or below) temperatures , Freezer compartments checked for frost build up (none found) , Freezer compartments checked for air leaks (none found) , Fridge comparments hold optimal cold temperatures , Fridge compartments checked for condensation build up (none found) , Fridge compartments checked for air leaks (none found) , Feet are present , Lights are responsive to door being ajar (on) , Lights are repsonisve to door being closed (off) , Water filter porperly conducts water flow to water dispenser , Water filter properly coduncts water flow to ice dispenser , Freezer compartment shelves hold porper weight , Freezer door shelves hold porper weight , Freezer drawers properly slide , Fridge compartment shelves hold porper weight , Fridge door shelves hold porper weight , Fridge drawers properly slide , Humidifier options on drawers opertate as intended , Defrost cycles active correctly , Terminal Block undamaged , Terminal Block conductive , Fridge Light mounted , Fridge Light protected , Fridge Light undamaged , Fridge Light undamaged , Fridge Vents unobstructed , Fridge Vents responsive , Freezer Vents active (Air flow) , Freezer Vents undamaged , Freezer Vents unobstructed , Freezer Vents responsive , Freezer Vents active (Air flow) , Fridge circulation fan mounted and connected correctly , Fridge circulation fan spinning freely with no obstructions or noise , Freezer circulation fan mounted and connected correctly , Freezer circulation fan spinning freely with no obstructions or noise , Vents between compartments no obstructed or blocked , Damper doors functioning normally , Compartment rear panels securely fastened , Condnesor fan fastened properly , Condensor fan spins at optimal times , Condensor fan blades checked for critical breaks or cracks (none found) , Condensor fan checked for foreign noises (none found) , Condenser coils monitored for porper cooling cycles , Condenser coils monitored for proper de-icing cycles , Fridge door hinges fimrly secured in place , Water Inlet valve checked for cracks/leaks (none found) , Wiring from the fridge interior into door checked for damage , All electrical connections in door hinge covers connected securely , All buttons and options responsive" },
    { title: 'DishWashers', content: "Machine powers on correctly , Machine powers off correctly , Tub checked for leaks (none found) , Tub checked for punctures (none found) , Tub checked for cracks (none found) , Feet are present , Feet are adjustable , Power cord present , Power cord prongs properly fit into outlets , Power cord terminal properly mounted , Power cord terminal complete with fittings , Power cord terminal correctly supplies power , Power cord operational , Control panel responsive , LED indicator lights properly light up , Door hinges fastened correctly , Door hinges allow door to swing open and close , Door seals correctly when closed , Door checked for leaks (none found) , Door latch properly locks , Door latch proplery unlocks , Drain hose present , Drain hose checked for puntures (none found) , Drain hose checked for holes (none found) , Drain hose checked for critical cracks (none found) , Drain hose checked for debris or clogs (none found) , Drain house checked for leaks (none found) , Drain pump properly fastened , Drain pump free of debirs , Drain pump activated at correct cycles , Drain pump properly drains water out of tub , Drain pump checked for cracks or breaks (none found) , Inlet valves porperly mounted , Inlevt valves checked for debris or clogs (none found) , Inlevt valves checked for correct sealing , Inlet valves checked for cracks (none found) , Inlet vavles checked for breaks (none found) , Invlet valve threads checked for porper form , Inlet valves monitored for proper filling , Top rack checked for critical cracks or breaks (non found) , Top rack wheels checked for critical warps or breaks (none found) , Top rack wheels checked for proper alignment , Top rack wheel guides checked for proper sliding , Bottom rack checked for critical cracks or breaks (non found) , Bottom rack wheels checked for critical warps or breaks (none found) , Bottom rack wheels checked for proper alignment , Bottom rack wheel guides checked for proper sliding , 3rd rack (if any) checked for critical cracks or breaks (non found) , 3rd rack (if any) wheels checked for critical warps or breaks (none found) , 3rd rack (if any) wheels checked for proper alignment , 3rd rack (if any) wheel guides checked for proper sliding , Top rack water blades checked for critical cracks or breaks (none found) , Top rack water blade spins properly , Top rack water blade spins properly , Bottom rack water blades checked for critical cracks or breaks (none found) , Bottom rack water blade spins properly , Bottom rack water blades correctly dispenses water , 3rd rack water blades checked for critical cracks or breaks (none found) , 3rd rack water blade spins properly , 3rd rack water blades correctly dispenses water , Water-in Line secured , Water-in Line unobstructed , Water-in Line undamaged , Water-in Line responsive , Left Top Rails mounted  , Left Top Rails secured , Left Top Rails aligned , Left Top Rails undamaged , Left Bottom Rails mounted , Left Bottom Rails secured , Left Bottom Rails aligned , Left Bottom Rails undamaged , Right Top Rails mounted , Right Top Rails secured , Right Top Rails aligned , Right Top Rails undamaged , Right Bottom Rails mounted , Right Bottom Rails secured , Right Bottom Rails aligned , Right Bottom Rails undamaged , Low heat wash cycles work as intended , Medium heat wash cycles work as intended , High heat wash cycles work as intended , No heat wash cycles work as intended , Dishwasher cabinet secured properly to base , Drain hose attached and securely clamped in place , Drain hose checked for leaks/holes , Drain hose checked for clogs/obstruction , Drain hose properly fits in dishwasher cabinet fasteners (if present) , Dishwasher fills to appropriate levels , No leaks observed during operation , Heater begins operation , All spray arms rotate and dispense water during operation , Recirculation pump is functioning properly during operation , Dishwasher completes cycle at correct heat and water volume on heavy cycles , Dishwasher completes cycle at correct heat and water volume on medium cycles , Dishwasher completes cycle at correct heat and water volume on light cycles , Side water circulation chamber checked for cracks/dents , Water circulation chamber firmly fastened to dishwasher side (if present) , Sump checked for obstructions/blockages" },
    { title: 'Microwaves', content: "Front door checked for critical cracks or breaks (none found) , Door hinges properly fastened , Door swings open correctly , Door closes correctly , Control panel is responsive , Control panel settings responsive , LED display is active , Clock is active , Buttons responsive , Low heat settings responsive , Medium heat settings responsive , High heat settings responsive , No heat settings responsive , Door aligned , Door latch properly locks when active , Door latch properly unlocks when not active , Handle is firmly attached , Internal light is responsive , Internal light properly lights up when active , Internal light properly turns off when not active , Glass plate rack wheels free of debris , Glass plate rack wheels spin freely , Glass plate rack (and wheels) sit firlmy on rotation mechanism ,  , Center rotation mechanism spins properly , Glass plate checked for critiacal cracks or breaks (none found) , Glass plate correctly sits on plate rack , Entire turntable module rotates accurately , Frame is stable , Shell is stable , Panels are stable , Interior panels are undamaged , Glass on door present , Door handle is in one stable piece , Door open-button properly engages , Microwave racks (if present) are present , Microwave racks (if present) undamaged , Dents do not interfere with heating system , Recirculating settings responsive , Recirculating fans free of debris , Recirculating fans properly turn on , Recirculating fans properly turn off , Recirculating fans repsonsive to low settings , Recirculating fans repsonsive to medium settings , Recirculating fans repsonsive to high settings , Ducting fans settings responsive , Ducting fans free of debris , Ducting fans properly turn on , Ducting fans properly turn off , Ducting fans repsonsive to low settings , Ducting fans repsonsive to medium settings , Ducting fans repsonsive to high settings , Mounting screws present , Mounting bolts present , Mounting bracket present , Power cord present , Power cord prongs properly fit into outlets , Vents porperly turn on , Vents properly turn off , Ventilation system respsonsive , Preset settings heat properly , Sensor cooking settings responsive , Manual cooking settings responsive , Timer correctly advances (countdown) , Surface lights responsive , Surface lights respond to low brightness settings , Surface lights respond to medium brightness settings , Surface lights respond to high brightness settings , Stove vent fans respond to low fan settings , Stove vent fans respond to medium fan settings , Stove vent fans respond to high fan settings , Number pad is accurate , Power cord shows no damage or defect , Proper voltage is being received , Ducting Fan Is not obstructed by structural imperfections , Completes All Cycles effectively , Cycle Signal is present , Frame does not interfere with mounting process , Magnetron is functioning at proper capacity , Control board is not compromised , Turntable motor is fully functional , Interior Glass is Checked for cracks , Exterior Glass is Checked for cracks , Test cup of water to ensure water is warm after 30 seconds , Number pad is free of critical undamaged , Ensure Grease Filters are present , Ensure Vent-Light panel is undamaged , Ensure screws are in servicable condition , Ensure Schematics are present , Outer panel fits frame , Control panel is free of critial damages , Machine powers on correctly , Terminal Block is conductive , Terminal Block is undamaged , Power Cable conductive , Power Cable undamaged , Fan ducting channels free of debris , Upper door hinge mounted properly , Lower door hinge mounted properly , Shell damage (if any) does not affect noises or functionality , Machine supports proper 120V" }
]