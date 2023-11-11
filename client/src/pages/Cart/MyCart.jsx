import React,{useEffect,useState} from 'react';
import MainLayout from '../../layout/MainLayout';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { BsCart3 } from 'react-icons/bs';
import Checkout from '../../components/Cart/Checkout';
import DeliveryOrder from '../../components/Cart/DeliveryOrder';
import PickUpOrder from '../../components/Cart/PickUpOrder';
import { useDispatch,useSelector } from 'react-redux';
import { GetCart,resetCart } from '../../store/cartSlice';
import { resetOrder } from '../../store/orderSlice';
import Loader2 from '../../components/Loader/Loader2';
import Toast from '../../utils/Toast';


const MyCart = () => {

    const cartId = useSelector((state)=>state.cart?.cart._id)
    const cartCount = useSelector((state)=>state.cart?.cart.cartCount)
    const total = useSelector((state)=>state.cart?.cart.subTotal)
    const products = useSelector((state)=>state.cart?.cart.products) || [];
    const orderInfo = useSelector((state)=>state.cart?.cart.orderInfo)
    const dispatch = useDispatch()

    const [loading,setLoading] = useState(false)

    const GetCartData = async () => {
        setLoading(true)
        const data = {cartId:cartId}
        const res = await dispatch(GetCart(data));
        if (res.payload.status === 200) {
          setLoading(false)
        }if(res.payload.status === 404){
            Toast(res.payload.message,'error',1000)
            dispatch(resetCart())
            dispatch(resetOrder())
        }else {
          Toast(res.payload.message,'error',1000)
          setLoading(false)
        }
      }
    
    
      useEffect(() => {
        if (cartId) {
          GetCartData()
        }
      }, [cartId])

    return (
        <>
           {loading ? <Loader2/> :
            <MainLayout>
                {/* Bread Crumbs Start */}
                <div className='pt-10 pb-10 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    <div className='flex items-center' ><h5 className='text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-xl text-b19' /><h5 className='text-xs text-[#5E5E5E]' >Cart</h5></div>
                    <h1 className='text-b18 font-bold text-32px lg:text-40px mt-4'>
                        My Cart
                    </h1>
                </div>
                {products?.length > 0 ? 
                <div className='pb-10 lg:pb-16 xl:pb-20 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto'>
                    <div className='grid grid-cols-1 coxxl:grid-cols-[1fr_360px] 3xl:grid-cols-[1fr_440px] gap-10'>
                        <div className='order-2 coxxl:order-none'>
                            {products?.length > 0 && orderInfo.type === 'delivery' ?<DeliveryOrder orders={products} refresh={GetCartData} />:null}
                            {products?.length > 0 && orderInfo.type === 'pickup' ? <PickUpOrder orders={products} refresh={GetCartData} /> : null}
                            <hr className='my-6 border-[rgba(0,0,0,0.08)]' />
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-base sm:text-xl text-black font-semibold'>
                                    Subtotal ({cartCount} Items):
                                </span>
                                <div className='text-2xl sm:text-32px font-semibold'>
                                    ${total}
                                </div>
                            </div>
                        </div>
                        <div>
                            <Checkout cartCount={cartCount} total={total} />
                        </div>
                    </div>
                </div>:
                <div className='flex flex-col px-2 mt-10 mb-24 space-y-5 w-full justify-center items-center h-full' >
                <img src="/bag.webp" />
                <h1 className='font-extrabold' >Your Cart is Empty</h1>
                <h2 className='text-center' >Lorem Ipsum Doller Sit Amet, Consecture Audipicsing Elit</h2>
                <button type='button' className='xy-center rounded-lg bg-b3 py-3 text-white font-medium w-2/12 text-sm'><BsCart3 className='mr-2' /> Start Shopping</button>
              </div>
                
                }

            </MainLayout>}
        </>
    )
}

export default MyCart