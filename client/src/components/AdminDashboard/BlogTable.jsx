import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdCreateNewFolder} from 'react-icons/md'
import {AiFillEye} from 'react-icons/ai'
import {BsPencil} from 'react-icons/bs'

const BlogTable = () => {
  return (
    <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center text-sm font-light">
          <thead
            className="border-b bg-b3 font-medium text-white">
            <tr>
              <th scope="col" className=" px-6 py-4">Image</th>
              <th scope="col" className=" px-6 py-4">Title</th>
              <th scope="col" className=" px-6 py-4">Category</th>
              <th scope="col" className=" px-6 py-4">Sub&nbsp;Category</th>
              <th scope="col" className=" px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="px-6 py-4 font-medium w-42 "><img src="/blogs/blog1.png" className='w-16 h-14' /></td>
              <td className="px-6 py-4 font-medium w-42 ">Refrigerators Tips</td>
              <td className="whitespace-nowrap  px-6 py-4 capitalize">Appliance Tips</td>
              <td className="whitespace-nowrap  px-6 py-4 capitalize">Refrigerators</td>
              <td className="flex space-x-2 whitespace-nowrap px-6 py-4 " title="Update, Create & View Section Items">
                <NavLink title="Update Category" to={`/admin/update-section/section.slug/section._id`} className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 rounded-full cursor-pointer py-2' ><BsPencil className="text-lg" /></NavLink>
                <NavLink title="View Blogs" to={`/admin/view-section-items/section._id`} className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 rounded-full cursor-pointer py-2' ><AiFillEye className="text-lg" /></NavLink>
                <NavLink title="Create Blog" to={`/admin/create-section-item/section.cardStyle/section._id`} className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 py-2 rounded-full cursor-pointer' ><MdCreateNewFolder className="text-lg"/></NavLink>
              </td>
            </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default BlogTable