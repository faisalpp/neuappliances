import React from 'react'
import ApplianceRow from './ApplianceRow'

const ApplianceTable = ({data,setPage,getBlog}) => {
  return (
    <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center text-sm font-light">
          <thead
            className="border-b border-l border-b3 bg-b3 font-medium text-white">
            <tr>
              <th scope="col" className="px-6 py-4 text-center">Image</th>
              <th scope="col" className="px-6 py-4">Title</th>
              <th scope="col" className="px-6 py-4">Category</th>
              <th scope="col" className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((blog,index)=><ApplianceRow key={index} id={blog._id} setPage={setPage} getBlog={getBlog} img={blog.thumbnail ? blog.thumbnail : '/no-image.jfif'}  title={blog.title} slug={blog.slug} category={blog.category} />)}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default ApplianceTable