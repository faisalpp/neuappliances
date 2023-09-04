import React, { useState, useEffect } from 'react';
import MyAccount from '../../layout/MyAccount';
import CustomInput from '../../components/Reusable/CustomInput';
import CustomButton from '../../components/Reusable/CustomButton';
import countries from '../../services/countries';
import { FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { resetUser } from '../../store/userSlice'
import { GetUserProfile } from '../../api/user/profile'


const Profile = () => {

    return (
        <>
            <MyAccount>
                <ProfileData />
            </MyAccount>
        </>
    )
}
export default Profile;



const ProfileData = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const _id = useSelector((state) => state.user._id);

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('yourusername@email.com')
    const [phone, setPhone] = useState('+1 000-000-0000')
    const [country, setCountry] = useState('')

    const [countryList, setCountryList] = useState(countries);

    const GetProfile = async () => {
        const res = await GetUserProfile({ _id });
        if (res.status === 200) {
            setFirstName(res.data.user.firstName);
            setLastName(res.data.user.lastName);
            setEmail(res.data.user.email);
            setPhone(res.data.user.phone);
            setCountry(res.data.user.country);
        } else {
            dispatch(resetUser())
            navigate('/');
        }

    }

    const UpdateProfile = async (e) => {
        e.preventDefault();
        const data = { _id, firstName, lastName, email, country, phone };
        const response = await fetch('http://localhost:5000/api/user/update-profile', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include',
        });

        const res = await response.json();

        if (res.status === 200) {
            toast.success('Profile Updated!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.error(res.message, {
                position: "top-right",
                autoClose: 3000,
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
        GetProfile();
    }, [setFirstName, setLastName, setEmail, setPhone, setCountry])
    return (
        <>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
            <form onSubmit={UpdateProfile} className='flex flex-col gap-6 lg:max-w-[432px] w-full'>
                <CustomInput label="First name" state={firstName} setState={setFirstName} />
                <CustomInput label="Last name" state={lastName} setState={setLastName} />
                <CustomInput label="Email Address" type="email" state={email} setState={setEmail} />
                <div>
                    <label className='text-b16 font-semibold text-xs block mb-2'>
                        Country
                    </label>
                    <div className='relative'>
                        <select value={country} onChange={e => setCountry(e.target.value)} className='border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none'>
                            <option value={country} default >{country}</option>
                            {countryList.map((country) => <option>{country}</option>)}
                        </select>
                        <FiChevronDown className='absolute right-4 top-3' />
                    </div>
                </div>
                <CustomInput label="Phone" state={phone} setState={setPhone} />
                {/*Submit Button */}
                <CustomButton ButtonName="Save Changes" />
            </form>
            <ToastContainer />
        </>
    )
}

export { ProfileData };