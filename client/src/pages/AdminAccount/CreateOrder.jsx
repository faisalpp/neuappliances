import React, { useEffect, useState } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { Link, useNavigate } from 'react-router-dom';
import Popup from '../../components/AdminDashboard/Popup';
import * as Yup from 'yup';
import TextInput from '../../components/TextInput/TextInput'
import SelectInput from '../../components/TextInput/SelectInput'
import Table from '../../components/AdminDashboard/Table/Table';
import {BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill} from 'react-icons/bs'
import SearchProduct from '../../components/AdminDashboard/PopupForms/SearchProduct';
import Toast from '../../utils/Toast';
import Accordion from '../../components/FaqAccordion2'
import { searchCustomerWithEmail } from '../../api/admin/customer';
import { getCustomerBillingAddress, getCustomerShippingAddress } from '../../api/frontEnd';
import UsStates from '../../services/states'


const CreateOrder = () => {

    // Form states
    const [errors,setErrors] = useState([])
    const [date,setDate] = useState('')
    const ordStatus = ['pending Payment','processing','on hold','completed','cancelled','refunded','failed','draft']
    const payStatus = ['card','paypal','affirm','google pay','cash']
    const [orderStatuses,setOrderStatuses] = useState([])
    const [payStatuses,setPayStatuses] = useState([])
    const [orderStatus,setOrderStatus] = useState('')

    useEffect(()=>{
      setOrderStatuses(ordStatus)
      setPayStatuses(payStatus)
    },[])

    const [addProductPopup,setAddProductPopup] = useState(false)

    const [selectedProducts,setSelectedProducts] = useState([])
    const [tax,setTax] = useState(0)
    const [subTotal,setSubTotal] = useState(0)
    const [grandTotal,setGrandTotal] = useState(0)
    const [shipping,setShipping] = useState(0)
    const [coupen,setCoupen] = useState(0)
    
    const IncQty = (e,id) => {
        e.preventDefault()
        const updatedProducts = selectedProducts.map(item => {
            if (item.pid === id && item.count < item.stock) {
              setSubTotal(subTotal+item.price)
              return {
                ...item,
                count: item.count + 1,
              };
            }
            return item;
          });
          setSelectedProducts(updatedProducts)
    }

    const DecQty = (e, id) => {
        e.preventDefault();
        const updatedProducts = selectedProducts.map(item => {
          if (item.pid === id && item.count > 0) {
            setSubTotal(subTotal-item.price)
            return {
              ...item,
              count: item.count - 1,
            };
          }
          return item;
        }).filter(item => item.count > 0); // Remove the product if the count becomes zero
        setSelectedProducts(updatedProducts);
      };

      const SelectedProduct = (product) => {
        const find = selectedProducts.findIndex(item=>item.pid === product.pid)
        if(find !== -1){
          const copy = selectedProducts;
          copy[find].count += 1;
          setSelectedProducts(copy)
        }else{
            setSelectedProducts([...selectedProducts,{...product,count:1}])
        }
        setSubTotal(subTotal+product.price)
        Toast('Product Added!','info',1000)
      }

    const Row = ({id,image,title,price,quantity}) => {
        return (
          <tr className="border-b border-l border-r border-b6 text-xs font-semibold">
          <td className="whitespace-nowrap flex justify-center px-5 py-3"><img src={image} className='w-10' /></td>
          <td className="whitespace-nowrap px-5 py-3"><Link to={`/product/${title.toLowerCase().replace(/\s/g,'-')}`} className='underline text-b6' >{title}</Link></td>
          <td className="whitespace-nowrap px-5 py-3 text-b7 ">${price}</td>
          <td className="whitespace-nowrap px-5 py-3">x</td>
          <td className="whitespace-nowrap px-1 py-3"><div className='flex justify-between w-12 items-center border-[1px] border-b6 rounded-md ml-5' ><BsFillArrowLeftSquareFill onClick={e=>DecQty(e,id)} className='text-b6 text-lg cursor-pointer' /> {quantity} <BsFillArrowRightSquareFill onClick={e=>IncQty(e,id)} className='cursor-pointer text-lg text-b6' /></div></td>
          <td className="whitespace-nowrap px-5 py-3 text-red-500">${(quantity * price).toFixed(2)}</td>
        </tr>
        )
      }

    const NoRow = ({message}) => {
        return (
         <tr className="border-b border-l border-r border-b6 text-xs font-semibold">
          <td className='py-2' >{message}</td>
         </tr>
        )
    }

    const [coupenPopup,setCoupenPopup] = useState(false)
    const [taxPopup,setTaxPopup] = useState(false)
    const [shippingPopup,setShippingPopup] = useState(false)

    const AddProduct = () => {
        return (
         <tr className="border-b border-l border-r border-b6 text-xs font-semibold">
          <td className='py-2' ><button type="button" onClick={()=>setAddProductPopup(true)} className='bg-orange-500 px-2 text-white py-1 rounded-xl shadow-lg' >Add Product</button></td>
          <td className='py-2' ><button type="button" onClick={()=>setCoupenPopup(true)} className='bg-green-500 px-2 text-white py-1 rounded-xl shadow-lg' >Add Coupon</button></td>
          <td className='py-2' ><button type="button" onClick={()=>setTaxPopup(true)} className='bg-red-500 px-2 text-white py-1 rounded-xl shadow-lg' >Add Tax</button></td>
          <td className='py-2' ><button type="button" onClick={()=>setShippingPopup(true)} className='bg-black px-2 text-white py-1 rounded-xl shadow-lg' >Add Shipping</button></td>
         </tr>
        )
      }

    const OrderFinance = ({total,shipping,tax,grandTotal,coupen }) => {
        return (
          <><tr className='border-b border-l border-r border-b6 text-xs' >
            <td className='px-2 py-3 font-semibold' >${total.toFixed(2)}</td>
            <td className='px-2 py-3 font-semibold' >{coupen}</td>
            <td className='px-2 py-3 font-semibold' >{shipping}</td>
            <td className='px-2 py-3 font-semibold' >${tax}</td>
            <td className='px-2 py-3 font-semibold' >${grandTotal}</td>
          </tr>
          </>
        )
      }

    //   Address States 
    const [shippingAddress,setShippingAddress] = useState({email:'',firstName:'',lastName:'',address:'',appartment:'',city:'',country:'usa',state:'alberta',postalCode:'',phone:''})
    const [billingAddress,setBillingAddress] = useState({email:'',firstName:'',lastName:'',address:'',appartment:'',city:'',country:'usa',state:'alberta',postalCode:'',phone:''})

    const ShippingAddressComp = () => {
        return (
        <div className='w-1/2' >
     <h3 className='font-semibold text-center' >Shipping Address</h3>
      {/* Conatct Information */}
       <TextInput width="full" name="Email" title="Email" iscompulsory="false" type="text" value={shippingAddress.email} onChange={(e) =>setShippingAddress({...shippingAddress,email:e.target.value})} error={errors && errors.includes('Email is Required!') ? true : false} errormessage="Email is Required!" placeholder="abc@gmail.com" />
      {/* Shipping */}
      <div className='space-y-14px mt-2'>
       <div className='grid grid-cols-2 gap-3'>
        <TextInput width="full" name="firstName" title="" iscompulsory="false" type="text" value={shippingAddress.firstName} onChange={(e) =>setShippingAddress({...shippingAddress,firstName:e.target.value})} error={errors && errors.includes('First Name is Required!') ? true : false} errormessage="First Name is Required!" placeholder="First Name (optional)" />
        <TextInput width="full" name="lastName" title="" iscompulsory="false" type="text" value={shippingAddress.lastName} onChange={(e) =>setShippingAddress({...shippingAddress,lastName:e.target.value})} error={errors && errors.includes('Last Name is Required!') ? true : false} errormessage="Last Name is Required!" placeholder="Last Name" />
        <div className="col-span-2 space-y-3">
         <TextInput width="full" name="address" title="" iscompulsory="false" type="text" value={shippingAddress.address} onChange={(e) =>setShippingAddress({...shippingAddress,address:e.target.value})} error={errors && errors.includes('Address is Required!') ? true : false} errormessage="Address is Required!" placeholder="Address" />
         <TextInput width="full" name="appartment" title="" iscompulsory="false" type="text" value={shippingAddress.appartment} onChange={(e) =>setShippingAddress({...shippingAddress,apparment:e.target.value})} error={errors && errors.includes('Apartment, suite is Required!') ? true : false} errormessage="Apartment, suite is Required!" placeholder="Apartment, suite, etc. (optional)" />
         <TextInput width="full" name="city" title="" iscompulsory="false" type="text" value={shippingAddress.city} onChange={(e) =>setShippingAddress({...shippingAddress,city:e.target.value})}error={errors && errors.includes('City is Required!') ? true : false} errormessage="City is Required!" placeholder="City" />
         <div className='grid grid-cols-2 md:grid-cols-3 items-center gap-14px'>
          <SelectInput name="us_states" widthFull="true" onChange={(e) =>setShippingAddress({...shippingAddress,state:e.target.value})} id="province" label="Province" options={UsStates} />
          <SelectInput name="us_states" widthFull="true" onChange={(e) =>setShippingAddress({...shippingAddress,country:e.target.value})} id="country_region" label="Country / region" options={[{title:'United States',abbreviation:'US'}]} />
          <div className='relative flex items-center col-span-2 md:col-span-1 [&>*]:h-full'>
           <TextInput width="full" name="postalCode" title="" iscompulsory="false" type="text" value={shippingAddress.postalCode} onChange={(e) =>setShippingAddress({...shippingAddress,postalCode:e.target.value})} error={errors && errors.includes('Postal Code is Required!') ? true : false} errormessage="Postal Code is Required!" placeholder="Postal Code" />
          </div>
         </div>
         <div className='relative'>
          <TextInput width="full" name="phone" title="" iscompulsory="false" type="text" value={shippingAddress.phone} onChange={(e) =>setShippingAddress({...shippingAddress,phone:e.target.value})} error={errors && errors.includes('Phone is Required!') ? true : false} errormessage="Phone is Required!" placeholder="Phone" />
         </div>
        </div>
       </div>
      
      </div>
     </div>
        )
    }

    const BillingAddressComp = () => {
        return (
        <div className='w-1/2' >
     <h3 className='font-semibold text-center' >Billing Address</h3>
      {/* Conatct Information */}
       <TextInput width="full" name="Email" title="Email" iscompulsory="false" type="text" value={billingAddress.email} onChange={(e) =>setBillingAddress({...billingAddress,email:e.target.value})} error={errors && errors.includes('Email is Required!') ? true : false} errormessage="Email is Required!" placeholder="abc@gmail.com" />
      {/* Shipping */}
      <div className='space-y-14px mt-2'>
       <div className='grid grid-cols-2 gap-3'>
        <TextInput width="full" name="firstName" title="" iscompulsory="false" type="text" value={billingAddress.firstName} onChange={(e) =>setBillingAddress({...billingAddress,firstName:e.target.value})} error={errors && errors.includes('First Name is Required!') ? true : false} errormessage="First Name is Required!" placeholder="First Name (optional)" />
        <TextInput width="full" name="lastName" title="" iscompulsory="false" type="text" value={billingAddress.lastName} onChange={(e) =>setBillinggAddress({...billingAddress,lastName:e.target.value})} error={errors && errors.includes('Last Name is Required!') ? true : false} errormessage="Last Name is Required!" placeholder="Last Name" />
        <div className="col-span-2 space-y-3">
         <TextInput width="full" name="address" title="" iscompulsory="false" type="text" value={billingAddress.address} onChange={(e) =>setBillingAddress({...billingAddress,address:e.target.value})} error={errors && errors.includes('Address is Required!') ? true : false} errormessage="Address is Required!" placeholder="Address" />
         <TextInput width="full" name="appartment" title="" iscompulsory="false" type="text" value={billingAddress.appartment} onChange={(e) =>setBillingAddress({...billingAddress,apparment:e.target.value})} error={errors && errors.includes('Apartment, suite is Required!') ? true : false} errormessage="Apartment, suite is Required!" placeholder="Apartment, suite, etc. (optional)" />
         <TextInput width="full" name="city" title="" iscompulsory="false" type="text" value={billingAddress.city} onChange={(e) =>setBillingAddress({...billingAddress,city:e.target.value})}error={errors && errors.includes('City is Required!') ? true : false} errormessage="City is Required!" placeholder="City" />
         <div className='grid grid-cols-2 md:grid-cols-3 items-center gap-14px'>
          <SelectInput name="us_states" widthFull="true" onChange={(e) =>setBillingAddress({...billingAddress,state:e.target.value})} id="province" label="Province" options={UsStates} />
          <SelectInput name="us_states" widthFull="true" onChange={(e) =>setBillingAddress({...billingAddress,country:e.target.value})} id="country_region" label="Country / region" options={[{title:'United States',abbreviation:'US'}]} />
          <div className='relative flex items-center col-span-2 md:col-span-1 [&>*]:h-full'>
           <TextInput width="full" name="postalCode" title="" iscompulsory="false" type="text" value={billingAddress.postalCode} onChange={(e) =>setBillingAddress({...billingAddress,postalCode:e.target.value})} error={errors && errors.includes('Postal Code is Required!') ? true : false} errormessage="Postal Code is Required!" placeholder="Postal Code" />
          </div>
         </div>
         <div className='relative'>
          <TextInput width="full" name="phone" title="" iscompulsory="false" type="text" value={billingAddress.phone} onChange={(e) =>setBillingAddress({...billingAddress,phone:e.target.value})} error={errors && errors.includes('Phone is Required!') ? true : false} errormessage="Phone is Required!" placeholder="Phone" />
         </div>
        </div>
       </div>
      
      </div>
     </div>
        )
    }


    // Customer Details
    const [selectedUser,setSelectedUser] = useState({email:'Guest'})
    const [selectUser,setSelectUser] = useState(false)
    const [userList,setUserList] = useState([{email:'Guest'}])
    const [query,setQuery] = useState('')

    const SearchCustomers = async () => {
      const res = await searchCustomerWithEmail({email:query})
      console.log(res)
      if(res.status === 200){
        setUserList([{email:'Guest'},...res.data.customers])
      }else{
        Toast(res.data.message,'error',1000)
      }
    }

    useEffect(()=>{
      if(query?.length >= 6){
        SearchCustomers()
      }

    },[query])

    const GetShippingAddress = async () => {
      const res = await getCustomerShippingAddress({userId:selectedUser._id})
      console.log(res)
      if(res.status === 200){
        if(res.data.shippingAddress){
          // setShippingAddress({email:res.data.shippingAddress.email,firstName:res.data.shippingAddress.firstName,lastName:res.data.shippingAddress.lastName,address:res.data.shippingAddress.address,appartment:res.data.shippingAddress.appartment,city:res.data.shippingAddress.city,country:res.data.shippingAddress.country,state:res.data.shippingAddress.state,postalCode:res.data.shippingAddress.postalCode,phone:res.data.shippingAddress.phone})
          Toast('Shipping Address Fetched!','success',1000)
        }else{
          Toast('Shipping Address Not Set!','error',1000)
        }
      }else{
        Toast('Internal Server Error!','success',1000)
      }
    }

    const GetBillingAddress = async () => {
      const res = await getCustomerBillingAddress({userId:selectedUser._id})
      console.log(res.data)
      if(res.status === 200){
        if(res.data.billingAddress){
          setBillingAddress({email:res.data.billingAddress.email,firstName:res.data.billingAddress.firstName,lastName:res.data.billingAddress.lastName,address:res.data.billingAddress.address,appartment:res.data.billingAddress.appartment,city:res.data.billingAddress.city,country:res.data.billingAddress.country,state:res.data.billingAddress.state,postalCode:res.data.billingAddress.postalCode,phone:res.data.billingAddress.phone})
          Toast('Shipping Address Fetched!','success',1000)
        }else{
          Toast('Shipping Address Not Set!','error',1000)
        }
      }else{
        Toast('Internal Server Error!','success',1000)
      }
    }


    return (
        <>
         {/* Add Product Form Popup */}
         <SearchProduct sstate={addProductPopup} setsState={setAddProductPopup} SelectProduct={SelectedProduct} />
         <Popup state={shippingPopup} setState={setShippingPopup} >
          <div className=' w-full' >
           <h3 className='text-center font-semibold' >Add Shipping</h3>
           <div className='flex flex-col space-y-2 items-center justify-center space-x-2 mt-2' >
            <TextInput name="postalCode" title="Tax Rate" iscompulsory="false" type="text" value={billingAddress.postalCode} onChange={(e) =>setBillingAddress({...billingAddress,postalCode:e.target.value})} error={errors && errors.includes('Postal Code is Required!') ? true : false} errormessage="Postal Code is Required!" placeholder="0" /> 
            <button className='text-xs bg-b6 px-3 py-1 rounded-lg text-white' >Apply</button>
           </div>
          </div> 
         </Popup>
         <Popup state={taxPopup} setState={setTaxPopup} >
          <div className=' w-full' >
           <h3 className='text-center font-semibold' >Add Tax</h3>
           <div className='flex items-center space-x-2 mt-2' >
            <SelectInput widthFull="true" title="Tax Type" height="h-8" onChange={e=>setOrderStatus(e.target.value)} textSize="text-xs capitalize" options={['percentage','flat rate']}  />
            <TextInput width="full" name="postalCode" title="Tax Rate" iscompulsory="false" type="text" value={billingAddress.postalCode} onChange={(e) =>setBillingAddress({...billingAddress,postalCode:e.target.value})} error={errors && errors.includes('Postal Code is Required!') ? true : false} errormessage="Postal Code is Required!" placeholder="0" /> 
           </div>
           <button className='text-xs bg-b6 px-3 py-1 rounded-lg text-white' >Apply</button>
          </div> 
         </Popup>
         <Popup state={coupenPopup} setState={setCoupenPopup} >
          <div className='w-full' >
           <h3 className='text-center font-semibold' >Add Coupen</h3>
            
           <div className='flex mt-3' >
          
            <div className='flex flex-col space-y-2 items-center w-1/2' >
            <TextInput width="full" name="postalCode" title="Coupon Code" iscompulsory="false" type="text" value={billingAddress.postalCode} onChange={(e) =>setBillingAddress({...billingAddress,postalCode:e.target.value})} error={errors && errors.includes('Postal Code is Required!') ? true : false} errormessage="Postal Code is Required!" placeholder="Postal Code" />
            <button className='text-xs bg-b6 px-3 py-1 rounded-lg text-white' >Apply</button>
            </div>
            <div className='flex items-center text-sm px-2 font-semibold ' >
              <h3>Or</h3>
            </div>
            <div className='flex flex-col space-y-2 items-center w-1/2' >
             <TextInput width="full" name="postalCode" title="Reduce Price" iscompulsory="false" type="text" value={billingAddress.postalCode} onChange={(e) =>setBillingAddress({...billingAddress,postalCode:e.target.value})} error={errors && errors.includes('Postal Code is Required!') ? true : false} errormessage="Postal Code is Required!" placeholder="Postal Code" />
             <button className='text-xs bg-b6 px-3 py-1 rounded-lg text-white' >Apply</button>
            </div>
          
           </div>
          
          
          </div> 
         </Popup>
         {/* Main Components */}
         <AdminAccount>
         <div className='flex flex-col space-y-5' >
         {/* Container Start */}
         <div className='flex space-x-3 mt-5' >
          
         {/* General */}
          <div className='flex flex-col w-1/2' >
           <h3 className='text-sm font-semibold mb-2' >Order Details</h3>
           <div className='flex flex-col space-y-2 px-5 py-5 rounded-lg border-[1px]' >
           <TextInput width="full" title="Order Date" iscompulsory="false" type="date" error={errors && errors.includes('Date is Required!') ? true : false} errormessage="Date is Required!" />
           <div className='flex space-x-2' >
            <SelectInput title="Order Status" height="h-8" onChange={e=>setOrderStatus(e.target.value)} textSize="text-xs capitalize" options={orderStatuses}  />
            <SelectInput title="Order Type" height="h-8" onChange={e=>setOrderStatus(e.target.value)} textSize="text-xs capitalize" options={['Pickup','Delivery']}  />
           </div>
           <div className='flex items-center space-x-5' >
            <TextInput title="Transaction Id" iscompulsory="false" type="text" error={errors && errors.includes('Date is Required!') ? true : false} errormessage="Date is Required!" placeholder="pi_emszflwrof349" />
            <SelectInput title="Payment Method" height="h-8" onChange={e=>setOrderStatus(e.target.value)} textSize="text-xs capitalize" options={payStatuses}  />
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
              <div className='flex flex-col border-[1px] border-b31 rounded-md px-2 py-2 h-auto' >
                <h3 className='font-semibold text-xs border-b-[1px] border-b31' >Search Result:</h3>
                <div className='flex flex-col space-y-2 px-2 py-2' >
                 {userList.map((user)=>
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
           <ShippingAddressComp/>
           <BillingAddressComp/>
          </div>
         }
         
         />

         <Table head={['Image','Title','Price','','QTY','Total']} >
          {selectedProducts?.length > 0 ? selectedProducts?.map((product)=><Row id={product.pid} image={product.image} title={product.title} price={product.price} quantity={product.count} />):
           <NoRow message="No Product Added!" />
          }
        <AddProduct/>
         </Table>

         {/* Product Finance */}
         <Table head={['Sub Total','Coupen','Shipping','Tax','Grand Total']} >
          <OrderFinance coupen={`-$${coupen}`} total={subTotal} shipping={shipping} tax={200} grandTotal={grandTotal} />
         </Table>
         {/* End */}
                    
         <button className='bg-b6 w-fit self-center px-2 py-1 text-sm text-white rounded-md' >Place Order</button>
        </div>
         </AdminAccount>
        </>
    )
}

export default CreateOrder