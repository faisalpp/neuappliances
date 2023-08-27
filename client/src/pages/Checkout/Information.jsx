import React, { useState } from 'react';
import { RiQuestionFill } from 'react-icons/ri';
import { Checkbox } from "@material-tailwind/react";
import Checkout from './Checkout';
import BreadCrumb from '../../components/Checkout/BreadCrumb';
import CustomSelect from '../../components/Reusable/CustomSelect';
import TextInput from '../../components/TextInput/TextInput';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { saveOrderAddress } from '../../api/order'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom';
import { resetUser } from '../../store/userSlice';
import { Link } from 'react-router-dom'
import LeftArrowSvg from '../../svgs/LeftArrowSvg'

const Information = () => {
    const Countrys = [
        { name: 'Canada', value: 'canada' },
        { name: 'China', value: 'china' },
        { name: 'Japan', value: 'japan' },
        { name: 'Pakistan', value: 'pakistan' }
    ]
    const Province = [
        { name: 'Alberta', value: 'alberta' },
        { name: 'Alberta', value: 'alberta' },
        { name: 'Alberta', value: 'alberta' },
        { name: 'Alberta', value: 'alberta' }
    ]

    const orderAddressValidationSchema = Yup.object().shape({
        email: Yup.string().required('Email is Required!'),
        firstName: Yup.string().nullable(),
        lastName: Yup.string().required('Last Name is Required!'),
        address: Yup.string().required('Address is Required!'),
        appartment: Yup.string().nullable(),
        city: Yup.string().required('City is Required!'),
        country: Yup.string().required('Country is Required!'),
        province: Yup.string().required('Province is Required!'),
        postalCode: Yup.string().required('Postal Code is Required!'),
        phone: Yup.string().required('Phone is Required!'),
    });

    const initialValues = {
        userId: '',
        email: '',
        keepUpdates: false,
        firstName: '',
        lastName: '',
        address: '',
        appartment: '',
        city: '',
        country: 'canada',
        province: 'alberta',
        postalCode: '',
        phone: '',
        saveAddress: false,
    }

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)
    const id = useSelector((state) => state.user._id)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        setValues((prev) => ({ ...prev, userId: id }))
    }, [id])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleCheckbox = (event) => {
        const { name, checked } = event.target;
        setValues((prevValues) => ({ ...prevValues, [name]: checked }))
    }

    const SubmitAddress = async (e) => {
        e.preventDefault()
        console.log(e)
        setLoading(true)
        // try {
        //  const err = await orderAddressValidationSchema.validate(values, { abortEarly: false });
        const res = await saveOrderAddress(values)
        console.log(res)
        if (res.status === 200) {
            setLoading(false)
            navigate('/mycart/shipping')
        } else if (res.code === 'ERR_BAD_REQUEST') {
            setLoading(false)
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
            const callback = location.pathname
            dispatch(resetUser());
            navigate(`/login/?callback=${callback}`)
        } else {
            setLoading(false)
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
        // } catch (error) {
        //  setErrors(error.errors)
        //  setLoading(false)
        //   }
    }


    return (
        <>
            <Checkout>
                {/* Logo */}
                <Link to="/">
                    <img src="/login_logo.png" alt="" />
                </Link>
                {/* Bread Crumbs Start */}
                <BreadCrumb />
                {/* Bread Crumbs End */}

                <fieldset className='border border-b31 rounded-md pb-5 px-5 pt-2'>
                    <legend className='mx-auto text-b16 font-medium text-sm px-3'>Express checkout</legend>
                    <div className='grid grid-cols-3 gap-2'>
                        <button className='rounded text-white flex justify-center p-3 bg-[#5A31F4]'>
                            <img src="/payment/shoppay.png" alt="shoppay" className='h-[23px] object-contain' />
                        </button>
                        <button className='rounded text-white flex justify-center p-3 bg-[#113984]'>
                            <img src="/payment/paypal.png" alt="shoppay" className='h-[23px] object-contain' />
                        </button>
                        <button className='rounded text-white flex justify-center p-3 bg-black'>
                            <img src="/payment/pay.png" alt="shoppay" className='h-[23px] object-contain' />
                        </button>
                    </div>
                </fieldset>
                {/* Bread Crumbs End */}
                <div className='text_between_line my-8'>OR</div>
                <form onSubmit={SubmitAddress} >
                    {/* Conatct Information */}
                    <div className='space-y-14px [&>*]:text-b16 [&>*]:text-sm'>
                        <h3 className='text-sm font-medium text-b16'>Contact information</h3>
                        <TextInput name="email" title="" iscompulsory="false" type="text" value={values.email} onChange={handleChange} error={errors.length > 0 && errors.includes('Email is Required!') ? true : false} errormessage="Email is Required!" placeholder="Email" />
                        <Checkbox name="keepUpdates" onChange={handleCheckbox} id='keep-me-update' label="Keep me up to date on news and exclusive offers" className='checked:bg-black border-b31' ripple={false} />
                    </div>
                    {/* Shipping */}
                    <div className='space-y-14px mt-8'>
                        <h3 className='text-lg font-medium text-b16'>Shipping address</h3>
                        <div className='grid grid-cols-2 gap-3'>
                            <TextInput name="firstName" title="" iscompulsory="false" type="text" value={values.firstName} onChange={handleChange} error={errors.length > 0 && errors.includes('First Name is Required!') ? true : false} errormessage="First Name is Required!" placeholder="First Name (optional)" />
                            <TextInput name="lastName" title="" iscompulsory="false" type="text" value={values.lastName} onChange={handleChange} error={errors.length > 0 && errors.includes('Last Name is Required!') ? true : false} errormessage="Last Name is Required!" placeholder="Last Name" />
                            <div className="col-span-2 space-y-3">
                                <TextInput name="address" title="" iscompulsory="false" type="text" value={values.address} onChange={handleChange} error={errors.length > 0 && errors.includes('Address is Required!') ? true : false} errormessage="Address is Required!" placeholder="Address" />
                                <TextInput name="appartment" title="" iscompulsory="false" type="text" value={values.appartment} onChange={handleChange} error={errors.length > 0 && errors.includes('Apartment, suite is Required!') ? true : false} errormessage="Apartment, suite is Required!" placeholder="Apartment, suite, etc. (optional)" />
                                <TextInput name="city" title="" iscompulsory="false" type="text" value={values.city} onChange={handleChange} error={errors.length > 0 && errors.includes('City is Required!') ? true : false} errormessage="City is Required!" placeholder="City" />
                                <div className='grid grid-cols-2 md:grid-cols-3 gap-14px'>
                                    <CustomSelect id="country_region" label="Country / region" Options={Countrys} />
                                    <CustomSelect id="province" label="Province" Options={Province} />
                                    <div className='col-span-2 md:col-span-1 [&>*]:h-full'>
                                        <TextInput name="postalCode" title="" iscompulsory="false" type="text" value={values.postalCode} onChange={handleChange} error={errors.length > 0 && errors.includes('Postal Code is Required!') ? true : false} errormessage="Postal Code is Required!" placeholder="Postal Code" />
                                    </div>
                                </div>
                                <div className='relative'>
                                    <TextInput name="phone" title="" iscompulsory="false" type="text" value={values.phone} onChange={handleChange} error={errors.length > 0 && errors.includes('Phone is Required!') ? true : false} errormessage="Phone is Required!" placeholder="Phone" />
                                    <div className='absolute right-3 top-3'>
                                        <RiQuestionFill className='text-2xl text-b3' />
                                    </div>
                                </div>
                                <div className='[&>*]:text-b16 [&>*]:text-sm'>
                                    <Checkbox id='save-information' name="saveAddress" onChange={handleCheckbox} label="Save this information for next time" className='checked:bg-black border-b31' ripple={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Next Step */}
                    <div className='flex justify-between items-center w-full mt-5'>
                        <Link to={'/mycart'} className='flex gap-1 items-center'>
                            <LeftArrowSvg />
                            <span className='text-sm font-medium text-b3'>
                                Return to Cart
                            </span>
                        </Link>
                        <button type='submit' disabled={loading ? true : false} className='flex items-center py-3 px-6 text-xs rounded-lg bg-b3 text-white'>
                            Continue to Shipping {loading ? <img src="/loader-bg.gif" className="ml-2 w-4 h-4" /> : null}
                        </button>
                    </div>
                </form>
            </Checkout>
        </>
    )
}

export default Information