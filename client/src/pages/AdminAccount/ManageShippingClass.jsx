import React,{useState} from 'react'
import AdminAccount from '../../layout/AdminAccount';
import ClassTable from '../../components/AdminDashboard/ShippingClasses/ClassesTable'
import Popup from '../../components/AdminDashboard/PopupForms/CreateClass'


const ManageShippingClass = () => {
  
  const [classPopup,setClassPopup] = useState(false)

  return (
    <>
    <Popup popup={classPopup} setPopup={setClassPopup} />
    <AdminAccount>
    <h3 className='text-center font-semibold text-xl mb-5' >Manage Shipping Classes</h3>
    <div className='flex flex-col space-y-5' >
    {/* Manage Tax */}
     <div className="flex flex-col px-5 py-3 shadow-md rounded-md border-[1px] border-b6 w-full" >
       <div className='flex items-center' >
        <h2 className='font-semibold mb-2' >Shipping&nbsp;Classes</h2>
        <div className='flex space-x-2 justify-end w-full' ><button onClick={()=>setClassPopup(true)} className='self-end hover:shadow-md bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold' >Create&nbsp;Class</button></div>
       </div>
       <ClassTable/>  
     </div>
     </div>
    </AdminAccount>
    </>
  )
}

export default ManageShippingClass