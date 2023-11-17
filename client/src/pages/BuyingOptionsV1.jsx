import React, { useState,useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import ProductInformation from '../components/BuyingOptions/ProductInformation'
import BuyingOptions from '../components/BuyingOptions/BuyingOptions'
import {GetApplianceWithBuyingOptions} from '../api/frontEnd'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const BuyingOptionsV1 = () => {

    const {modelNo} = useParams()
    const navigate = useNavigate()
    const [product,setProduct] = useState({})
    const [threeStarProduct,setThreeStarProduct] = useState({})
    const [fourStarProduct,setFourStarProduct] = useState({})
    const [fiveStarProduct,setFiveStarProduct] = useState({})
    const [threeStarCount,setThreeStarCount] = useState(0)
    const [fourStarCount,setFourStarCount] = useState(0)
    const [fiveStarCount,setFiveStarCount] = useState(0)
    
    const [frstImg,setFrstImg] = useState('')
    const [loading,setLoading] = useState(true)

    const location = useLocation();
    const [params, setParams] = useState([])

    const GetAppliancewithBuyingOptions = async (param) => {
        const res = await GetApplianceWithBuyingOptions(param)
        
        if(res.status === 200){
         setProduct(res.data.product)
         setThreeStarProduct(res.data.threeStarProduct)
         setFourStarProduct(res.data.fourStarProduct)
         setFiveStarProduct(res.data.fiveStarProduct) 
         setThreeStarCount(res.data.threeStarCount) 
         setFourStarCount(res.data.fourStarCount)
         setFiveStarCount(res.data.fiveStarCount)
         setLoading(false)
       }else{
        // navigate('/404')
        setLoading(false)
        } 
    }

    useEffect(()=>{
     if(product){
      const img = product.media?.find((item)=>item.file === 'image')
      setFrstImg(img?.data)
     }
    },[product])
  
    const GetQueryParams = () => {
      // Create a URLSearchParams object from the query string
      const queryParams = new URLSearchParams(location.search);
      // Create an object to store the query parameters
      const queryParamsObject = {};
    
      // Iterate through the query parameters and store them in the object
      for (const [key, value] of queryParams.entries()) {
        queryParamsObject[key] = value;
      }     
        if(queryParamsObject.modelNo){
         
         GetAppliancewithBuyingOptions(queryParamsObject)
        }

    }

    useEffect(()=>{
     GetQueryParams()
    },[])

    return (
        <MainLayout>
         {loading ? <div style={{height:"calc(100vh - 100px)"}} className="w-full flex justify-center items-center" ><img src='/loader2.gif' className='h-18' /></div> :
         <div className='py-12 lg:py-16 xl:py-20 w-full max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
          <ProductInformation image={frstImg} title={product.title} modelNo={product.modelNo} bullets={product.bulletDescription} threeStarProduct={threeStarProduct} fourStarProduct={fourStarProduct} fiveStarProduct={fiveStarProduct} threeStarCount={threeStarCount} fourStarCount={fourStarCount} fiveStarCount={fiveStarCount}/>
          <BuyingOptions rating={product?.rating} modelNo={product?.modelNo} threeStarCount={threeStarCount} fourStarCount={fourStarCount}fiveStarCount={fiveStarCount} />
         </div>}
        </MainLayout>
    )
}
export default BuyingOptionsV1
