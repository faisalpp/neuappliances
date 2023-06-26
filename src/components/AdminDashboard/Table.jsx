import React from 'react'
import { NavLink } from 'react-router-dom'

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
              <th scope="col" className=" px-6 py-4">Section Name</th>
              <th scope="col" className=" px-6 py-4">Card Style</th>
              <th scope="col" className=" px-6 py-4">Category</th>
              <th scope="col" className=" px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sections.map((section,index)=><tr key={index} className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap  px-6 py-4 font-medium">{section.title}</td>
              <td className="whitespace-nowrap  px-6 py-4 capitalize">{section.cardStyle}</td>
              <td className="whitespace-nowrap  px-6 py-4">{section.categoryData.title}</td>
              <td className="flex space-x-3 whitespace-nowrap  px-6 py-4">
                <NavLink to={`/admin/create-section-item/${section.cardStyle}/${section._id}`} className='bg-b3 text-white text-sm px-2 rounded-md cursor-pointer py-1' >Create Item</NavLink>
                <NavLink to={`/admin/view-section-items/${section._id}`} className='bg-b3 text-white text-sm px-2 rounded-md cursor-pointer py-1' >View</NavLink>
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