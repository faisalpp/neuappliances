import React,{useState,useEffect} from 'react';
import MainLayout from '../../layout/MainLayout';
import { RiArrowDropRightLine } from 'react-icons/ri';
import {GetBlogBySlug} from '../../api/frontEnd'
import {useParams} from 'react-router-dom'
import parse from 'html-react-parser'

const HelpCardPage = () => {
    
    const {category,slug} = useParams()
    const [blog,setBlog] = useState([])
    const [content,setContent] = useState()

    
    // useEffect(()=>{
    //     GetBlog()
    // },[category,slug])
    
    // const GetBlog = async () => {
    //  const res = await GetBlogBySlug({category:category,slug:slug});
    //  console.log(res)
    //  if(res.status === 200){
    //     setBlog(res.data.blog[0])
    //     setContent(parse(res.data.blog[0].content))
    //  }else{
    //     setBlog([])
    //  }
    // }

    function wrapper(inputString) {
        if(inputString){
            return inputString[0].toUpperCase() + inputString.slice(1);
        }
    }

    return (
        <>
            <MainLayout>
                <div className='py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
                    {/* Bread Crumbs Start */}
                    <div className='flex items-center flex-wrap' >
                        <h5 className='text-[10px] sm:text-xs text-b3' >Home</h5><RiArrowDropRightLine className='text-base text-gray-500' /><h5 className='text-[10px] sm:text-xs text-b3' >Help & Support Center</h5><RiArrowDropRightLine className='text-base text-gray-500' /><h5 className='text-[10px] sm:text-xs text-b3' >{blog && wrapper(blog.category)}</h5><RiArrowDropRightLine className='text-base text-gray-500' /><h5 className='text-[10px] sm:text-xs text-gray-500' >{blog.title}</h5>
                    </div>
                    {/* Bread Crumbs End */}
                </div>
                <div className='pb-10 lg:pb-16 xl:pb-20 w-full px-4 sm:px-56 lg:px-[250px] xl:px-[270px] 2xl:px-[310px] mx-auto' >
                    <h1 className='font-bold mb-10 text-3xl' >{blog.title}</h1>
                    {content}
                </div>
            </MainLayout>
        </>
    )
}

export default HelpCardPage