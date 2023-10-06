import React from 'react'
import ClassesRow from './ClassesRow'


const ClassesTable = () => {
  return (
    <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center text-sm font-light">
          <thead
            className="border-b border-l border-b3 bg-b3 font-medium text-white">
            <tr>
              <th scope="col" className="px-3 py-4">Class Name</th>
              <th scope="col" className="px-3 py-4">Description</th>
              <th scope="col" className="px-3 py-4">Product Count</th>
              <th scope="col" className="px-3 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-l border-r border-b6 text-xs' >
              <td className='whitespace-nowrap px-5 py-3 capitalize font-semibold' >
              <input type="text" className="border-[1px] border-black" placeholder="Shipping Class" />
              </td>
              <td className='whitespace-nowrap px-5 py-3 capitalize font-semibold' >
              <input type="text" className="border-[1px] border-black" placeholder="Description" />
              </td>
              <td className='whitespace-nowrap px-5 py-3 capitalize font-semibold' >
                0
              </td>
            </tr>
            {/* <ClassesRow /> */}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default ClassesTable