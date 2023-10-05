import React,{useState,useEffect} from 'react'
import DropDown from '../Filter/DropDown'
import { Checkbox } from '@material-tailwind/react'

const SaleFilter = ({sale,reg,setFilt,filt}) => {
  
  const [saleChk,setSaleChk] = useState(false)
  const [regChk,setRegChk] = useState(false)

  const handleSaleChk = (e) => {
   e.preventDefault()
   setSaleChk(e.target.checked)
    if(e.target.checked){
     setFilt(prev=>{return {...prev,salePrice: { $ne: null }}})
    }else{
      delete filt.salePrice;
      setFilt(prev=>{return {...prev}})
    }
  }

  const handleRegChk = (e) => {
    e.preventDefault()
    setRegChk(e.target.checked)
    if(e.target.checked){
      setFilt(prev=>{return {...prev,regPrice: { $exists: false }}})
    }else{
      delete filt.regPrice;
      setFilt(prev=>{return {...prev}})
    }
  }

  return (
    <>
      <DropDown title="On Sale"  >
        {/* Item Start */}
        {sale.length > 0 ? <div className='flex items-center' >
          <div className='flex items-center space-x-2' ><Checkbox ripple={false} checked={saleChk} onChange={(e)=>handleSaleChk(e)} className='checked:bg-b3 checked:text-white' /><span className='flex text-sm w-max' >Yes</span></div>
          <div className="flex justify-end w-full text-xs" ><span>({sale.length > 0 ? sale[0].count : null})</span></div>
        </div>:null}
        {/* Item End */}
        {/* Item Start */}
        {reg.length > 0 ? <div className='flex items-center' >
          <div className='flex items-center space-x-2' ><Checkbox ripple={false} checked={regChk} onChange={(e)=>handleRegChk(e)} className='checked:bg-b3 checked:text-white' /><span className='flex text-sm w-max' >No</span></div>
          <div className="flex justify-end w-full text-xs" ><span>({reg.length > 0 ? reg[0].count : null})</span></div>
        </div>:null}
        {/* Item End */}
      </DropDown>
    </>
  )
}

export default SaleFilter