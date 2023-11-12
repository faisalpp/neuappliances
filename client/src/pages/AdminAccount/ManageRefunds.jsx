import React,{useState,useEffect} from 'react'
import AdminAccount from '../../layout/AdminAccount'
import Table from '../../components/AdminDashboard/Table/Table'
import moment from 'moment'
import { getRefundRequests, updateRefundRequest,deleteRefundRequest, searchRefundRequest } from '../../api/admin/refunds'
import Toast from '../../utils/Toast'
import BtnLoader from '../../components/Loader/BtnLoader'
import {BsPencil,BsFillTrashFill} from 'react-icons/bs'
import Pagination2 from '../../components/Pagination/Pagination2'
import Popup from '../../components/AdminDashboard/Popup'
import TextInput from '../../components/TextInput/TextInput'
import SelectInput from '../../components/TextInput/SelectInput'

const ManageRefunds = () => {

  const [search,setSearch] = useState('')
      const [refunds,setRefunds] = useState([])
      const [loading,setLoading] = useState(false)
      const [page,setPage] = useState(1)
      const [limit,setLimit] = useState(10)
      const [totalPages,setTotalPages] = useState(0)

      const GetRefundRequests = async () => {
        setLoading(true)
        const params = { page: page, limit: limit };
        const res = await getRefundRequests(params)
        if(res.status === 200){
          setLoading(false)
          setRefunds(res.data.refunds)
          setTotalPages(res.data.totalCount)
        }else{
         setLoading(false)
         Toast(res.data.message,'error',1000)
        }
      }

      useEffect(()=>{
        if(search?.length === 0){
          GetRefundRequests()
        }
      },[search])


     const [errors,setErrors] = useState([])
     const [uLoader,setUloader] = useState(false)
     const [dLoader,setDloader] = useState(false)
     const [popup,setPopup] = useState(false)
     const [uOrderId,setUorderId] = useState('')
     const [uOrderNo,setUorderNo] = useState('')
     const [uName,setUname] = useState('')
     const [uEmail,setUemail] = useState('')
     const [uPhone,setUphone] = useState('')
     const [uAmount,setUamount] = useState('')
     const [uStatus,setUstatus] = useState('')
     const [uDate,setUdate] = useState('')
     const [uStatuses,setUstatuses] = useState([])
     const [medias,setMedias] = useState([])

     const LoadRefund = (e,id) => {
      e.preventDefault()
      const getRefund = refunds.find((item)=>item._id === id)
      setPopup(true)
      setUorderId(getRefund._id)
      setUorderNo(getRefund.orderNo)
      setUname(getRefund.name)
      setUemail(getRefund.email)
      setUphone(getRefund.phone)
      setUamount(getRefund.amount)
      setUstatus(getRefund.status)
      setUdate(getRefund.createdAt)
      setMedias(getRefund.media)
      if(getRefund.status === 'pending'){
        setUstatuses(['Pending','Completed'])
      }else{
        setUstatuses(['Completed','Pending'])
      }
     }

     const UpdateRefund = async (e) => {
      e.preventDefault()
       setUloader(true)
       const res = await updateRefundRequest({id:uOrderId,orderNo:uOrderNo,name:uName,email:uEmail,amount:uAmount,status:uStatus})
       if(res.status === 200){
        GetRefundRequests()
        setUloader(false)
        setPopup(false)
        Toast(res.data.msg,'success',1000)
       }else{
        setUloader(false)
        Toast(res.data.message,'error',1000)
       }
     }
     
     const DeleteRefund = async (e,id) => {
      e.preventDefault()
       setDloader(true)
       const res = await deleteRefundRequest({id:id})
       if(res.status === 200){
        GetRefundRequests()
        setDloader(false)
        setPopup(false)
        Toast(res.data.msg,'success',1000)
       }else{
        setDloader(false)
        Toast(res.data.message,'error',1000)
       }
     }


     const Row = (props) => {
        return (
          <tr className="border-b border-l border-r border-b6 text-xs font-medium">
          <td className="px-2 py-3">{props.orderNo}</td>
          <td className="px-2 py-3">{props.name}</td>
          <td className="py-3">{props.email}</td>
          {props.status === 'pending' ? <td className="px-2 py-3"><span className='bg-red-500/40 rounded-xl capitalize px-2 py-1 text-red-500' >{props.status}</span></td>:<td className="px-2 py-3"><span className='bg-b6/40 rounded-xl capitalize px-2 py-1 text-b6' >{props.status}</span></td>}
          <td className="px-2 py-3 text-b7">${props.amount}</td>
          <td className="px-2 py-3">{moment(props.date).format('DD MMM YYYY')}</td>
          <td>
           <div className='flex items-center justify-center space-x-2 h-full' >
            <button type='button' onClick={e=>LoadRefund(e,props.id)} title="View Customer" className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-b3 hover:border-b3 text-xs px-1 w-fit h-fit rounded-full cursor-pointer py-1' ><BsPencil className="text-sm" /></button>
            <button type='button' onClick={e=>DeleteRefund(e,props.id)} className='flex items-center justify-center bg-red-500 text-white hover:bg-white hover:text-red-500 border-[1px] border-red-500 hover:border-red-500 text-sm w-fit h-fit rounded-full cursor-pointer px-1 py-1' >{dLoader ? <BtnLoader style="w-4" /> : <BsFillTrashFill className="text-base" />}</button>
           </div>
          </td>
        </tr>
        )
      }

    const SearchRefund = async (e) => {
      e.preventDefault()
      setLoading(true)
      const res = await searchRefundRequest({query:search})
      if(res.status === 200){
       setLoading(false)
       setRefunds(res.data.refunds)
      }else{
       setLoading(false)
      setRefunds([])
     }
    }

  return (
    <>
    <Popup state={popup} setState={setPopup} zindex="z-[99]" >
      <div className='flex flex-col w-full' >
      <div className='flex justify-between' ><h3 className="font-semibold" >Refund Request</h3><h3 className="font-semibold text-xs text-red-500" >{moment(uDate).format('DD MMM YYYY')}</h3></div>
       <div className='flex space-x-5 w-full mt-5' >
        <TextInput width="full" name="orderNo" title="Order #" iscompulsory="false" type="text" value={uOrderNo} onChange={(e) =>setUorderNo(e.target.value)} error={errors && errors.includes('Shipping Address Address is Required!') ? true : false} errormessage="Shipping Address Address is Required!" placeholder="Address" />
        <TextInput width="full" name="customerName" title="Customer Name" iscompulsory="false" type="text" value={uName} onChange={(e) =>setUname(e.target.value)} error={errors && errors.includes('Shipping Address Address is Required!') ? true : false} errormessage="Shipping Address Address is Required!" placeholder="Address" />
       </div>
       <div className='flex space-x-5 w-full mt-3' >
        <TextInput width="full" name="email" title="Email" iscompulsory="false" type="text" value={uEmail} onChange={(e) =>setUemail(e.target.value)} error={errors && errors.includes('Shipping Address Address is Required!') ? true : false} errormessage="Shipping Address Address is Required!" placeholder="Address" />
        <TextInput width="full" name="phone" title="Phone" iscompulsory="false" type="text" value={uPhone} onChange={(e) =>setUphone(e.target.value)} error={errors && errors.includes('Shipping Address Address is Required!') ? true : false} errormessage="Shipping Address Address is Required!" placeholder="Address" />
       </div>
       <div className='flex space-x-5 w-full mt-3' >
        <TextInput width="full" name="amount" title="Refund Amount" iscompulsory="false" type="text" value={uAmount} onChange={(e) =>setUamount(e.target.value)} error={errors && errors.includes('Shipping Address Address is Required!') ? true : false} errormessage="Shipping Address Address is Required!" placeholder="Address" />
         <SelectInput name="status" widthFull="true" title="Refund Status" onChange={(e) =>setUstatus(e.target.value)} label="Province" options={uStatuses} />
       </div>
       {medias?.length > 0 ? 
       <div className='flex flex-wrap gap-x-10 gap-y-5 px-5 mr-1 w-full py-5 h-60 overflow-x-hidden overflow-y-scroll border-[1px] border-b31 rounded-md mt-5 ' >
         {medias?.map((media)=>
         (media.type === 'images' ?
         <div className='border-[1px] border-b31 px-2 py-2 rounded-xl h-fit w-fit' ><img src={media.data} className='w-20 h-20' /></div>
         :<video src={media.data} className='w-40 rounded-xl h-[90px]' controls ></video>
         ))}
       </div>:null}
       <button type="button" onClick={uLoader ? null : UpdateRefund} className='px-2 text-md text-white h-8 w-fit text-sm self-center rounded-md mt-5 bg-b6' >{uLoader ? <BtnLoader style="w-5" /> : 'Save'}</button>
      </div>
    </Popup>
    
    <AdminAccount>
    <form onSubmit={SearchRefund} className='flex w-full justify-end space-x-3 mb-5' >
     <input name="search" placeholder='Order No : 12345' value={search} onChange={e=>setSearch(e.target.value)} className='text-xs px-2 outline-none border border-b3 rounded-md' />
     <button className='border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1' >Search</button>
    </form>

     {loading ?  <div className="flex justify-center items-center w-full h-72" ><BtnLoader /></div>  : refunds?.length > 0 ? <>
     <Table head={['OrderNo','Customer Name','Email','Phone','Amount','Date','Actions']} >
      {refunds.map((refund,index)=><Row key={index} id={refund._id} orderNo={refund.orderNo} name={refund.name} email={refund.email} status={refund.status} amount={refund.amount} date={refund.createdAt} medias={refund.media} />)}
     </Table>
     <Pagination2 page={page} setPage={setPage} totalPages={totalPages} />
     </>
     :<div className='flex justify-center items-center w-full h-72' ><img src="/not-found.webp" className='w-28' /></div>}
    </AdminAccount>
    </>
  )
}

export default ManageRefunds