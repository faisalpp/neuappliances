import React, { useState,useEffect } from 'react';
import MyAccount from '../../layout/MyAccount';
import ProductCard from '../../components/MyAccount/ProductCard';
import {GetFavorites} from '../../api/user/favorite'
import { useSelector } from 'react-redux';
import BtnLoader from '../../components/Loader/BtnLoader'

const MyFavourite = () => {

    const userId = useSelector((state)=>state.user._id);
    const [favorites,setFavorites] = useState([])
    const [favLoader,setFavLoader] = useState(false)

    const GetFavorite = async () => {
        setFavLoader(true)
        const res = await GetFavorites({userId:userId})
        console.log(res.data)
        if(res.status === 200){
        setFavLoader(false)
        setFavorites(res.data.favorites)
        }else{
        setFavLoader(false)
        }
    }

    useEffect(()=>{
        GetFavorite()
    },[])

    return (
        <>
            <MyAccount>
             {favLoader ?  <div className='flex justify-center items-center' ><BtnLoader  /></div> : <MyFavouriteData data={favorites} refresh={GetFavorite} />}
            </MyAccount>
        </>
    )
}

export default MyFavourite


const MyFavouriteData = ({data,refresh}) => {
    return (
        <>
          {data?.length > 0 ?
            <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7 xl:gap-10'>
                {data.map((item)=><ProductCard data={item} reload={refresh} />)}
            </div>:
            <div className='flex justify-center items-center h-full' ><img src="/not-found.webp" className="w-32" /></div> 
            }
        </>
    )
}

export { MyFavouriteData };