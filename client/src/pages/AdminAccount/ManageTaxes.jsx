import React,{useState} from 'react'
import AdminAccount from '../../layout/AdminAccount';
import TaxTable from '../../components/AdminDashboard/Tax/Table'
import Popup from '../../components/AdminDashboard/PopupForms/CreateTax'


const ManageTaxes = () => {
  
  const [taxPopup,setTaxPopup] = useState(false)

  return (
    <>
    <Popup popup={taxPopup} setPopup={setTaxPopup} />
    <AdminAccount>
    <h3 className='text-center font-semibold text-xl mb-5' >Manage Taxes</h3>
    <div className='flex flex-col space-y-5' >
    {/* Manage Tax */}
     <div className="flex flex-col px-5 py-3 shadow-md rounded-md border-[1px] border-b6 w-full" >
       <div className='flex items-center' >
        <div className='flex space-x-2 justify-end w-full' ><button onClick={()=>setTaxPopup(true)} className='self-end hover:shadow-md bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold' >Create&nbsp;Tax</button></div>
       </div>
       <TaxTable/>  
     </div>
     </div>
    </AdminAccount>
    </>
  )
}

export default ManageTaxes