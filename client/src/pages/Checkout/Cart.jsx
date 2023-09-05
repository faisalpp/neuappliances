import React, { useEffect, useState } from 'react';
import CustomInput from '../../components/Reusable/CustomInput';
import CartCard from '../../components/Checkout/CartCard';
import { HiOutlineTruck } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { getCart } from '../../api/cart'
import { resetUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Cart = () => {

    const userId = useSelector((state) => state.user._id)
    const [pickupOrders, setPickupOrders] = useState([]);
    const [deliveryOrders, setDeliveryOrders] = useState([]);
    const [cartId, setCartId] = useState(null);
    const pickupLocation = useSelector((state) => state.cart.pickupLocation)
    const deliveryLocation = useSelector((state) => state.cart.deliveryLocation)

    const [subTotal, setSubTotal] = useState(0)
    const [tax, setTax] = useState(5)
    const [total, setTotal] = useState(0)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const GetCart = async () => {
        const res = await getCart({ userId })
        if (res.status === 200) {
            setPickupOrders(res.data.cart[0].pickupOrders)
            setDeliveryOrders(res.data.cart[0].deliveryOrders)
            setCartId(res.data.cart[0]._id)
            setSubTotal(res.data.cart[0].total)
            setTotal(res.data.cart[0].total + tax)
        } else if (res.code === 'ERR_BAD_REQUEST') {
            dispatch(resetUser());
            toast.error('Please Login To Proceed!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate('/login')
        } else {
            toast.error(res.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    useEffect(() => {
        GetCart()
    }, [])

    return (
        <>
            <div className='max-w-full w-full h-full px-4 sm:px-11 py-14 bg-[#F9F9F9]'>
                <div className='max-w-[418px] 3xl:max-w-xl mr-auto w-full flex flex-col gap-5'>

                    {deliveryOrders.length > 0 ? <div className='flex w-full flex-col gap-6 bg-white px-4 sm:px-6 py-4'>
                        {deliveryOrders.map((item, index) => <CartCard key={index} item={item} />)}
                        <div className='border border-b31 text-b32 flex gap-2 items-center p-4 text-sm'>
                            <HiOutlineTruck className='text-xl text-b25 rounded-lg' />
                            <span>
                                Delivering To {deliveryLocation}
                            </span>
                        </div>
                    </div> : null}

                    {pickupLocation.length > 0 ? <div className='bg-white px-6 py-4 flex flex-col gap-5'>
                        {pickupOrders.map((item, index) => <CartCard key={index} item={item} />)}
                        <div className='border border-b31 text-b32 flex gap-2 items-center p-4 text-sm'>
                            <img src="/svgs/Pick-up.webp" alt="Pick-up" />
                            <span>
                                Pick up in store {pickupLocation}.
                            </span>
                        </div>
                    </div> : null}

                    <hr />
                    <div className='flex gap-14px items-center w-full'>
                        <CustomInput colorStyle="border-b31 placeholder:text-b25" placeholder="Discount code" />
                        <button type='buttton' className='px-4 p-3 bg-b3 text-sm text-white font-medium rounded-lg'>
                            Apply
                        </button>
                    </div>
                    <hr />
                    <div className='[&>*]:text-sm flex flex-col gap-3'>
                        <div className='flex justify-between'>
                            <span className='text-b32'>
                                Subtotal
                            </span>
                            <span className='text-b16 font-medium'>
                                ${subTotal}
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-b32'>
                                Shipping
                            </span>
                            <span className='text-b16 font-medium'>
                                *Calculated at next step
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-b32'>
                                Taxes
                            </span>
                            <span className='text-b16 font-medium'>
                                ${tax}
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className='flex justify-between items-center'>
                        <span className='text-b16 font-medium'>
                            Total
                        </span>
                        <div className='flex gap-2 items-center'>
                            <span className='text-xs text-b16'>
                                USD
                            </span>
                            <span className='text-b3 font-semibold tracking-032 text-2xl'>
                                ${total}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart