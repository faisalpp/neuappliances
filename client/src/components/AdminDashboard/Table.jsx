import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdCreateNewFolder} from 'react-icons/md'
import {AiFillEye} from 'react-icons/ai'
import {BsPencil} from 'react-icons/bs'

const Table = ({sections}) => {
  return (
    <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center text-sm font-light">
          <thead
            className="border-b bg-b3 font-medium text-white">
            <tr>
              <th scope="col" className=" px-6 py-4">Section Title</th>
              <th scope="col" className=" px-6 py-4">Card Style</th>
              <th scope="col" className=" px-6 py-4">Section Type</th>
              <th scope="col" className=" px-6 py-4">Category</th>
              <th scope="col" className=" px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sections.map((section,index)=><tr key={index} title="Draggable" className="pt-2 border-2 border-b6 hover:border-red-500 hover:cursor-pointer">
              <td className="  px-2 py-4 font-medium w-20 ">{section.title}</td>
              <td className="whitespace-nowrap  px-5 py-4 capitalize">{section.cardStyle}</td>
              <td className="whitespace-nowrap  px-5 py-4 capitalize">{section.type}</td>
              <td className="whitespace-nowrap  px-5 py-4 capitalize">{section.categorySlug}</td>
              <td className="flex space-x-2 whitespace-nowrap px-6 py-4 " title="Update, Create & View Section Items">
                <NavLink title="Create Section Items" to={`/admin/create-section-item/${section.cardStyle}/${section._id}`} className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 py-2 rounded-full cursor-pointer' ><MdCreateNewFolder className="text-lg"/></NavLink>
                <NavLink title="View Section Item" to={`/admin/view-section-items/${section._id}`} className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 rounded-full cursor-pointer py-2' ><AiFillEye className="text-lg" /></NavLink>
                <NavLink title="View Section Item" to={`/admin/update-section/${section.slug}/${section._id}`} className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 rounded-full cursor-pointer py-2' ><BsPencil className="text-lg" /></NavLink>
              </td>
            </tr>)}
          
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default Table