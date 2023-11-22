import React, { useEffect, useState } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { useNavigate } from 'react-router-dom';
import TextInput from '../../components/TextInput/TextInput'
import SelectInput from '../../components/TextInput/SelectInput'
import Table from '../../components/AdminDashboard/Table/Table';
import SearchProduct from '../../components/AdminDashboard/PopupForms/SearchProduct';
import Toast from '../../utils/Toast';
import Accordion from '../../components/FaqAccordion2'
import { searchCustomerWithEmail } from '../../api/admin/customer';
import { CheckZip, getCustomerBillingAddress, getCustomerShippingAddress } from '../../api/frontEnd';
import BtnLoader from '../../components/Loader/BtnLoader';
import {createAdminOrder} from '../../api/admin/order'
import { useDispatch, useSelector } from 'react-redux';
import { GetCart, resetCart} from '../../store/adminSlice';
import { setSubTotal,setShipping,resetCartFinance} from '../../store/adminCart';
import { Checkbox } from '@material-tailwind/react';
import Coupon from '../../components/AdminDashboard/AdminOrder/Coupon'
import OrderFinance from '../../components/AdminDashboard/AdminOrder/OrderFinance'
import Tax from '../../components/AdminDashboard/AdminOrder/Tax'
import Shipping from '../../components/AdminDashboard/AdminOrder/Shipping'
import ProductRow from '../../components/AdminDashboard/AdminOrder/ProductRow'
import BillingAddressComp from '../../components/AdminDashboard/AdminOrder/BillingAddressComp'
import ShippingAddressComp from '../../components/AdminDashboard/AdminOrder/ShippingAddressComp'
import NoRow from '../../components/AdminDashboard/AdminOrder/NoRow'
import shippingAddressSchema from '../../schemas/AdminOrder/shippingAddressSchema'
import billingAddressSchema from '../../schemas/AdminOrder/billingAddressSchema'

const CreateOrder = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [coupenPopup,setCoupenPopup] = useState(false)
   const [taxPopup,setTaxPopup] = useState(false)
   const [shippingPopup,setShippingPopup] = useState(true)
   
    // Form states
    const [errors,setErrors] = useState([])
    const [orderStatuses,setOrderStatuses] = useState(['pending Payment','processing','on hold','completed','cancelled','refunded','failed','draft'])
    const [payStatuses,setPayStatuses] = useState(['card','paypal','affirm','google pay','cash'])
    const [orderStatus,setOrderStatus] = useState('pending-payment')

    const [orderDate,setOrderDate] = useState(new Date().toJSON().slice(0, 10))
    const [paymentMethod,setPaymentMethod] = useState('card')
    const [orderType,setOrderType] = useState('pickup')
    const [transactionId,setTransactionId] = useState('')

    const [addProductPopup,setAddProductPopup] = useState(false)

    const tax = useSelector((state)=>state.adminCart.tax)
    const grandTotal = useSelector((state)=>state.adminCart.grandTotal)
    const subTotal = useSelector((state)=>state.adminCart.subTotal)
    const shipping = useSelector((state)=>state.adminCart.shipping)
    const coupon = useSelector((state)=>state.adminCart.coupons)

    //   Address States 
    const [shippingAddress,setShippingAddress] = useState({email:'',firstName:'',lastName:'',address:'',appartment:'',city:'',country:'usa',state:'alberta',postalCode:'',phone:''})
    const [billingAddress,setBillingAddress] = useState({email:'',firstName:'',lastName:'',address:'',appartment:'',city:'',country:'usa',state:'alberta',postalCode:'',phone:''})
    const [changeZip,setChangeZip] = useState(false)
    const [zipSuccess,setZipSuccess] = useState(false)
    const [zipError,setZipError] = useState(false)

    const AddProduct = () => {
        return (
         <tr className="border-b border-l border-r border-b6 text-xs font-semibold">
          <td className='py-2' ><button type="button" onClick={()=>setAddProductPopup(true)} className='bg-orange-500 px-2 text-white py-1 rounded-xl shadow-lg' >Add Product</button></td>
          <td className='py-2' ><button type="button" onClick={()=>{subTotal > 0 ? setCoupenPopup(true):null}} className={`${subTotal > 0 ? 'bg-green-500':'bg-green-500/40'} px-2 text-white py-1 rounded-xl shadow-lg`} >Add Coupon</button></td>
          <td className='py-2' ><button type="button" onClick={()=>{subTotal > 0 ? setTaxPopup(true):null}} className={`${subTotal > 0 ? 'bg-red-500':'bg-red-500/40'} px-2 text-white py-1 rounded-xl shadow-lg`} >Add Tax</button></td>
          <td className='py-2' ><button type="button" onClick={()=>{subTotal > 0 && shipping.type === 'delivery' ? setShippingPopup(true) : null }} className={`${subTotal > 0 && shipping.type === 'delivery' ? 'bg-black':'bg-black/40'} px-2 text-white py-1 rounded-xl shadow-lg`} >Add Shipping</button></td>
         </tr>
        )
      }

    const GetShippingFee = async () => {
      setZipSuccess(false);
      setZipError(false);
      setChangeZip(true);
       const res = await CheckZip({zip:shippingAddress.postalCode})
       console.log(res)
       if(res.data.status === 200){
          dispatch(setShipping({type:'delivery',location:res.data.zip.location.zip,shipping:res.data.zip.location.rate}))
          setZipError(false);
          setChangeZip(false);
          setZipSuccess(true);
       }else{   
        setZipSuccess(false);  
        setZipError(true);
        setChangeZip(false);
      } 
    };

    useEffect(() => {
      if (shippingAddress.postalCode?.length === 5 && shipping.type === 'delivery') {
        GetShippingFee();
      }
     }, [shippingAddress.postalCode])

    // Customer Details
    const [selectedUser,setSelectedUser] = useState({email:'Guest'})
    const [selectUser,setSelectUser] = useState(false)
    const [userList,setUserList] = useState([{email:'Guest'}])
    const [query,setQuery] = useState('')
    const [custLoader,setCustLoader] = useState(false)

    const SearchCustomers = async () => {
      setCustLoader(true)
      const res = await searchCustomerWithEmail({email:query})
      if(res.status === 200){
        setCustLoader(false)
        setUserList([{email:'Guest'},...res?.data?.customers])
      }else{
        setCustLoader(false)
        Toast(res.data.message,'error',1000)
      }
    }

    useEffect(()=>{
      if(query?.length >= 6){
        SearchCustomers()
      }

    },[query])

    const GetShippingAddress = async () => {
      const res = await getCustomerShippingAddress({userId:selectedUser?._id})
      if(res.status === 200){
        if(res?.data?.shippingAddress){
          setShippingAddress({email:res.data.shippingAddress.email,firstName:res.data.shippingAddress.firstName,lastName:res.data.shippingAddress.lastName,address:res.data.shippingAddress.address,appartment:res.data.shippingAddress.appartment,city:res.data.shippingAddress.city,country:res.data.shippingAddress.country,state:res.data.shippingAddress.state,postalCode:res.data.shippingAddress.postalCode,phone:res.data.shippingAddress.phone})
          Toast('Shipping Address Fetched!','success',1000)
        }else{
          Toast('Shipping Address Not Set!','error',1000)
        }
      }else{
        Toast('Internal Server Error!','success',1000)
      }
    }

    const GetBillingAddress = async () => {
      const res = await getCustomerBillingAddress({userId:selectedUser?._id})
      if(res.status === 200){
        if(res?.data?.billingAddress){
          setBillingAddress({email:res.data.billingAddress.email,firstName:res.data.billingAddress.firstName,lastName:res.data.billingAddress.lastName,address:res.data.billingAddress.address,appartment:res.data.billingAddress.appartment,city:res.data.billingAddress.city,country:res.data.billingAddress.country,state:res.data.billingAddress.state,postalCode:res.data.billingAddress.postalCode,phone:res.data.billingAddress.phone})
          Toast('Shipping Address Fetched!','success',1000)
        }else{
          Toast('Shipping Address Not Set!','error',1000)
        }
      }else{
        Toast('Internal Server Error!','success',1000)
      }
    }

    const CART = useSelector((state)=>state?.admin?.cart?.products);
    const CART_COUNT = useSelector((state)=>state?.admin?.cart?.cartCount);
    const SubmitOrder = async (e) => {
      e.preventDefault()
      try{
        await shippingAddressSchema.validate(shippingAddress, { abortEarly: false }); 
     }catch(error){ 
        if (error) {
            let errors = error.errors;
            setErrors(errors)
            errors.forEach((item)=>{
              Toast(item,'error',1000)
            })
          } else {
            setErrors([])
          }
     }
      try{
        await billingAddressSchema.validate(billingAddress, { abortEarly: false }); 
     }catch(error){ 
        if (error) {
            let errors = error.errors;
            setErrors(errors)
            errors.forEach((item)=>{
              Toast(item,'error',1000)
            })
          } else {
            setErrors([])
          }
     }
      const data = {orderDate:orderDate,orderStatus:orderStatus,orderType:orderType,transactionId:transactionId,paymentMethod:paymentMethod,shippingAddress:shippingAddress,billingAddress:billingAddress,tax:tax,subTotal:subTotal,shipping:shipping,coupon:JSON.stringify(coupon),grandTotal:grandTotal,products:CART,selectedUser:selectedUser,cartCount:CART_COUNT}
      // console.log(data)
      const res = await createAdminOrder(data)
      if(res.status === 200){
        dispatch(resetCart())
        dispatch(resetCartFinance())
        navigate('/admin/manage-orders')
        Toast(res.data.msg,'success',1000)
      }else{
        Toast(res.data.message,'error',1000)
      }
    }

    
    const CART_ID = useSelector((state)=>state?.admin?.cart?._id);
    
    const GetCart1 = async () => {
      dispatch(resetCartFinance())
      setTransactionId(`py-${Math.floor(Math.pow(10, 10-1) + Math.random() * (Math.pow(10, 10) - Math.pow(10, 10-1) - 1))}`)
      if(CART_ID){
      const res = await dispatch(GetCart({cartId:CART_ID}))
      if(res.payload.status === 200){
        if(CART?.length > 0){
          let sb =0;
          for(let i=0;i<CART?.length;i++){
           let price = CART[i].isSale ? CART[i].salePrice : CART[i].regPrice
           let stotal = (price * CART[i].count)
           sb = sb+stotal
          }
          dispatch(setSubTotal(sb))
         }else{
          dispatch(resetCartFinance())
        }
        Toast(res.payload.msg,'info',1000)
      }else if(res.payload.status === 404){
        dispatch(resetCart())
        dispatch(resetCartFinance())
        Toast(res.payload.data.message,'info',1000)
      }else{
        dispatch(resetCartFinance())
        Toast(res.payload.data.message,'error',1000)
      }
     }
    }

    useEffect(()=>{
      GetCart1() 
    },[])

    const handleCheckbox = (e) => {
      const { name, checked } = e.target;
      if(name === 'georgtown' && checked){
        dispatch(setShipping({type:'pickup',location:'Georgtown, Tx',shipping:'Free'}))
      }
      if(name === 'austin' && checked){
        dispatch(setShipping({type:'pickup',location:'Austin, Tx',shipping:'Free'}))
      }
  }

    return (
        <>
        {/* Coupon Popup Start */}
        <Coupon state={coupenPopup} setState={setCoupenPopup} />
        {/* Coupon Popup End */}
        {/* Tax Popup Start */}
        <Tax state={taxPopup} setState={setTaxPopup} />
        {/* Tax Popup End */}
        {/* Shipping Popup Start */}
        <Shipping state={shippingPopup} setState={setShippingPopup} />
        {/* Shipping Popup End */}
        {/* Add Product Form Popup */}
        <SearchProduct sstate={addProductPopup} setsState={setAddProductPopup} />
         {/* Main Components */}
         <AdminAccount>
         <div className='flex flex-col space-y-5' >
         {/* Container Start */}
         <div className='flex space-x-3 mt-5' >
          
         {/* General */}
          <div className='flex flex-col w-1/2' >
           <h3 className='text-sm font-semibold mb-2' >Order Details</h3>
           <div className='flex flex-col space-y-2 px-5 py-5 rounded-lg border-[1px]' >
           <TextInput value={orderDate} onChange={(e)=>setOrderDate(e.target.value)} width="full" title="Order Date" iscompulsory="false" type="date" error={errors && errors.includes('Date is Required!') ? true : false} errormessage="Date is Required!" />
           <div className='flex space-x-2' >
            <SelectInput title="Order Status" height="h-8" onChange={e=>setOrderStatus(e.target.value)} textSize="text-xs capitalize" options={orderStatuses}  />
            <SelectInput title="Order Type" height="h-8" onChange={e=>{e.target.value === 'pickup' ? dispatch(setShipping({type:"pickup",location:'Georgtown, Tx',shipping:'Free'})) : dispatch(setShipping({type:'delivery',location:'N/A',shipping:0}))}} textSize="text-xs capitalize" options={['Pickup','Delivery']}  />
           </div>
           {shipping.type === 'pickup'?
           <div className='flex space-x-2' >
           <Checkbox onChange={e=>handleCheckbox(e)} checked={shipping.location === 'Austin, Tx' ? true : false} defaultChecked={true} name="austin" id='keep-me-update' label="Austin, Tx" className='checked:bg-black border-b31' ripple={false} />
           <Checkbox onChange={e=>handleCheckbox(e)} checked={shipping.location === 'Georgtown, Tx' ? true : false} defaultChecked={false} name="georgtown" id='keep-me-update' label="Georgtown, Tx" className='checked:bg-black border-b31' ripple={false} />
           </div>:null}
           <div className='flex items-center space-x-5' >
             <TextInput value={transactionId} onChange={(e)=>setTransactionId(e.target.value)} title="Transaction Id" iscompulsory="false" type="text" error={errors && errors.includes('Date is Required!') ? true : false} errormessage="Date is Required!" placeholder="pi_emszflwrof349" />
            <SelectInput title="Payment Method" height="h-8" onChange={e=>setPaymentMethod(e.target.value)} textSize="text-xs capitalize" options={payStatuses}  />
           </div>
           </div>
          </div>
         {/* General */}
          <div className='flex flex-col w-1/2' >
           <h3 className='text-sm font-semibold mb-2' >Select Customer</h3>
           <div className='flex flex-col space-y-2 px-5 py-5 rounded-lg border-[1px] h-full' >
            {selectUser ?
            <>
              <div className='flex space-x-2' >
               <TextInput value={query} onChange={(e)=>setQuery(e.target.value)} width="full" title="Customer Email" iscompulsory="false" type="text"placeholder="jhon@gmail.com (Type 6 Characters to Search)" />
              </div>
              <div className='flex flex-col border-[1px] border-b31 rounded-md px-2 py-2 h-full' >
                <h3 className='font-semibold text-xs border-b-[1px] border-b31' >Search Result:</h3>
                <div className='relative flex flex-col space-y-2 px-2 py-2 h-full overflow-x-hidden overflow-y-scroll' >
                 {custLoader ?  <div className='flex items-center justify-center w-full h-full' ><BtnLoader style="w-5" /></div> : userList.map((user)=>
                 <h3 onClick={()=>{setSelectUser(false);setSelectedUser(user);setQuery('');setUserList([{email:'Guest'}])}} className='font-semibold bg-gray-100 px-2 rounded-sm py-1 hover:bg-gray-200 cursor-pointer text-xs shadow-md w-full' >{user.email}</h3>)}
                </div>
              </div>
            </>: 
            <div className='flex flex-col h-full justify-center items-center space-y-2' >
              <div className='flex flex-col space-y-1 items-center text-md font-semibold' ><h3>Selected User:</h3><h3 className='font-semibold text-red-500' >{selectedUser.email}</h3></div>
              {selectedUser.email !== 'Guest' ? <div className='flex space-x-2' ><h3 onClick={GetShippingAddress} className='text-xs underline text-b6 hover:text-b6/80 cursor-pointer ' >Fetch Shipping Address</h3><h3 onClick={GetBillingAddress} className='text-xs underline text-b6 hover:text-b6/80 cursor-pointer' >Fetch Billing Address</h3></div> : null }
              <button onClick={()=>setSelectUser(true)} className='bg-b6 text-xs px-2 text-white py-1 rounded-xl' >{selectedUser.email !== 'Guest' ? 'Change User' : 'Choose User'}</button>
            </div>}
           </div>
          </div>

         </div>
         {/* Container End */}

         {/* Addresses */}
         <Accordion title="Order Address Info" parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='justify-center w-full [&>p]:text-sm !mt-0'
         answer={
          <div className='flex w-full space-x-5' >
           <ShippingAddressComp shippingAddress={shippingAddress} setShippingAddress={setShippingAddress} changeZip={changeZip} errors={errors} zipError={zipError} zipSuccess={zipSuccess} />
           <BillingAddressComp shippingAddress={shippingAddress} setBillingAddress={setBillingAddress} billingAddress={billingAddress} />
          </div>
         }
         
         />

         <Table head={['Image','Title','Price','','QTY','Total']} >
          {CART?.length > 0 ? CART?.map((product)=><ProductRow item={product} />):
           <NoRow message="No Product Added!" />
          }
        <AddProduct/>
         </Table>

         {/* Product Finance */}
         <Table head={['Sub Total','Coupon','Shipping','Tax','Grand Total','Action']} >
          <OrderFinance />
         </Table>
         {/* End */}
                    
         <button type="button" onClick={SubmitOrder} className='bg-b6 w-fit self-center px-2 py-1 text-sm text-white rounded-md' >Place Order</button>
        </div>
         </AdminAccount>
        </>
    )
}

export default CreateOrder