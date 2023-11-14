import React,{useState} from 'react'
import AdminAccount from '../../layout/AdminAccount';
import TextInput from '../../components/TextInput/TextInput'
import TextAreaInput from '../../components/TextInput/TextAreaInput'
import SelectInput from '../../components/TextInput/SelectInput'
import FaqAccordion2 from '../../components/FaqAccordion2';
import {Checkbox} from '@material-tailwind/react'
import { createCoupon } from '../../api/admin/coupon';
import * as Yup from 'yup';
import Toast from '../../utils/Toast';
import BtnLoader from '../../components/Loader/BtnLoader';
import { useNavigate } from 'react-router-dom';


const CreateCoupon = () => {

  const dualValidationSchema = Yup.object().shape({
    code: Yup.string().required('Coupon Code is Required!'),
    amount: Yup.string().required('Coupon Amount is Required!'),
    expiry: Yup.string().required('Expiry Date is Required!'),
    type: Yup.string().required('Coupon Type is Required!'),
  });

  const singleValidationSchema = Yup.object().shape({
    code: Yup.string().required('Coupon Code is Required!'),
    expiry: Yup.string().required('Expiry Date is Required!'),
    type: Yup.string().required('Coupon Type is Required!'),
    maxCount: Yup.string().required('Coupon Count is Required!'),
  });

  const [errors,setErrors] = useState([])
  const [loader,setLoader] = useState(false)

  const [code,setCode] = useState('')
  const [expiry,setExpiry] = useState('')
  const [type,setType] = useState('percentage-discount')
  const [amount,setAmount] = useState('')
  const [description,setDescription] = useState('')
  const [min,setMin] = useState('')
  const [max,setMax] = useState('')
  const [maxCount,setMaxCount] = useState('')
  const [singleUse,setSingleUse] = useState(false)
  const [excSale,setExcSale] = useState(false)

  const navigate = useNavigate()

  const GenerateCoupon = (e) => {
    e.preventDefault()
    const prefix = 'NU-';
    const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();
    const couponCode = `${prefix}${randomPart}`;
    setCode(couponCode);
  }

   const CreateCoupon = async (e) => {
    e.preventDefault()
    setLoader(true)
    try{
      if(type === 'free-shipping'){
       const data = {code: code,expiry: expiry,type:type,maxCount:maxCount}
        await singleValidationSchema.validate(data, { abortEarly: false }); 
      }else{
        const data2 = {code: code,amount: amount,expiry: expiry,type:type,maxCount:maxCount}
        await dualValidationSchema.validate(data2, { abortEarly: false }); 
      }
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

    const res = await createCoupon({code:code,description:description,expiry:expiry,amount:amount,type:type,min:min,max:max,singleUse:singleUse,excSale:excSale,maxCount:maxCount})
    if(res.status === 200){
      setLoader(false)
      navigate('/admin/manage-copons')
      Toast(res.data.msg,'success',1000)
    }else{
      setLoader(false)
      Toast(res.data.massage,'error',1000)
    }
   }

    return ( 
     <>
    <AdminAccount>
    <h3 className='text-center font-semibold text-xl mb-5' >Create Coupon</h3>
    <div className='flex flex-col space-y-5' >
     
    <FaqAccordion2 isExpand="true" title="General" answer={
       <div className='flex flex-col space-y-2 mt-2 w-full' >
       <div className='flex space-x-5 ' >
        <TextInput value={code} onChange={(e)=>setCode(e.target.value)} width="full" title="Coupon Code" iscompulsory="true" type="text" error={errors && errors.includes('Date is Required!') ? true : false} errormessage="Date is Required!" placeholder="Write Coupon Code" />
        <button type="button" onClick={e=>GenerateCoupon(e)} className='font-medium bg-b6 px-2 text-white text-xs h-10 mt-6 rounded-lg' >Generate</button>
       </div>
       <div className='flex space-x-5 ' >
       <TextInput value={expiry} onChange={(e)=>setExpiry(e.target.value)} width="full" title="Coupon Expiry" iscompulsory="true" type="date" error={errors && errors.includes('Date is Required!') ? true : false} errormessage="Date is Required!" placeholder="Write Coupon Code" />
       <SelectInput onChange={(e)=>setType(e.target.value)} widthFull="true" title="Coupon Type" options={['Percentage Discount','Flat Discount','Free Shipping']} />
       </div>
       <div className='flex space-x-5 ' >
       <TextInput value={amount} onChange={(e)=>setAmount(e.target.value)} width="full" title="Coupon Amount" iscompulsory="false" type="text" error={errors && errors.includes('Date is Required!') ? true : false} errormessage="Date is Required!" placeholder="Percentage Or Flat Rate (Leave Blank For Free Shipping)" />
       <TextInput value={maxCount} onChange={(e)=>setMaxCount(e.target.value)} width="full" title="Coupon Count" iscompulsory="true" type="text" error={errors && errors.includes('Coupon Count is Required!') ? true : false} errormessage="Coupon Count is Required!" placeholder="Coupon Count Per User!" />
       </div>
       <TextAreaInput value={description} onChange={(e)=>setDescription(e.target.value)} width="full" title="Coupon Description" iscompulsory="false" type="text" error={errors && errors.includes('Date is Required!') ? true : false} errormessage="Date is Required!" placeholder="Coupon Description (Optional)"></TextAreaInput>
      </div>
      } parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='justify-center w-full [&>p]:text-sm !mt-0' />

    <FaqAccordion2 isExpand="true" title="Usage Restriction" answer={
       <div className='flex flex-col space-y-4 mt-2 w-full' >
       <TextInput value={min} onChange={(e)=>setMin(e.target.value)} width="full" title="Minimum Spend" iscompulsory="false" type="text" error={errors && errors.includes('Date is Required!') ? true : false} errormessage="Date is Required!" placeholder="No Minimum" />
       <TextInput value={max} onChange={(e)=>setMax(e.target.value)} width="full" title="Maximum Spend" iscompulsory="false" type="text" error={errors && errors.includes('Date is Required!') ? true : false} errormessage="Date is Required!" placeholder="No Maximum" />
       <div className='flex flex-col' >
        <h3 className='text-xs font-semibold' >Individual Use Only</h3>
        <div className='flex items-center' >
         <Checkbox checked={singleUse} onChange={(e)=>setSingleUse(e.target.checked)} />
         <p className='text-xs' >Check this box if the coupon cannot be used in conjunction with other coupons.</p>
        </div>
       </div>
       <div className='flex flex-col' >
        <h3 className='text-xs font-semibold' >Exclude Sale Items</h3>
        <div className='flex items-center' >
         <Checkbox checked={excSale} onChange={(e)=>setExcSale(e.target.checked)} />
         <p className='text-xs' >Check this box if the coupon should not apply to items on sale. Coupon will only work if there is no sale products in the cart.</p>
        </div>
       </div>
      </div>
      } parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='justify-center w-full [&>p]:text-sm !mt-0' />


     <div className='flex justify-center w-full' ><button type="button" onClick={e=>{loader ? null :CreateCoupon(e)}} className='text-sm font-medium bg-b6 px-2 text-white py-1 rounded-lg' >{loader ? <BtnLoader style="w-6" /> :'Create Coupon'}</button></div>    
    
    </div>
    </AdminAccount>
    </>
  )
}

export default CreateCoupon