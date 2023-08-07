import React from 'react'
import {BsPencil,BsFillTrashFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'

const BlogRow = ({img,title,category,delBlog,id}) => {

  return (
    <tr className="border-b border-l border-r border-b6 text-xs">
        <td className="px-5 py-3 capitalize"><img src={img} className='w-28 h-20' /></td>
        <td className="px-2 py-3 w-52 overflow-hidden">{title.substr(0,50)}...</td>
        <td className="whitespace-nowrap  px-5 py-4 font-medium capitalize">{category}</td>
        <td className="flex items-center justify-center mt-3 space-x-1 px-5 py-4">
         <NavLink title="View Section Item" to={`/admin/update-customer`} className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2' ><BsPencil className="text-base" /></NavLink>
         <span title="View Section Item" onClick={e=>delBlog(e,id)} className='flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2' ><BsFillTrashFill className="text-base" /></span>
        </td>
      </tr>
  )
}

export default BlogRow