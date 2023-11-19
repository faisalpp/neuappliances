import React, { useEffect, useState } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { AiFillEye, AiFillStar } from 'react-icons/ai'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import { GetAllCategories, updateCategoriesIndex, deleteCategory } from '../../api/admin/category'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { toast } from 'react-toastify';
import { MdMenuOpen } from "react-icons/md";

const ManageCategories = () => {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  const Categories = async () => {
    setLoading(true)
    const res = await GetAllCategories();
    console.log(res)
    if (res.status === 200) {
      setLoading(false)
      setCategories(res.data.categories);
    } else {
      setCategories([])
      setLoading(false)
    }
  }
  useEffect(() => {
    Categories()
  }, [])

  const [iLoading, setIloading] = useState(false)

  const UpdateCategoriesIndex = async () => {
    setIloading(true)
    const res = await updateCategoriesIndex(categories);
    
    if (res.status === 200) {
      setIloading(false)
      toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      Categories()
    } else {
      setIloading(false)
      toast.error(res.data.message, {
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
  }

  const StarIconPrinter = ({ numberOfTimes }) => {
    const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
      <AiFillStar key={index} className='text-b7' /> // Render the star icon component for each iteration
    ));

    return <div className='flex items-center' >{starIcons}</div>; // Render the array of star icons
  };

  const hyphenToCamelCase = (str) => {
    if (str) {
      const words = str.split('-');
      const capitalizedWords = words.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      const spaceSeparatedString = capitalizedWords.join(' ');
      return spaceSeparatedString;
    }
    return str;
  }

  const handleDragEnd = (result) => {
    const items = Array.from(categories)
    const [recordedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, recordedItem)
    const updatedItems = items.map((item, index) => ({
      ...item,
      index: index + 1
    }));
    setCategories(updatedItems);
  }

  const [delLoading, setDelLoading] = useState('')


  const DeleteCategory = async (e, id) => {
    e.preventDefault()
    setDelLoading(id)
    const data = { id: id }
    const res = await deleteCategory(data);
    if (res.status === 200) {
      setDelLoading(false)
      Categories()
      toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setDelLoading('')
      toast.error(res.data.message, {
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
  }

  return (
    <>
      <AdminAccount>
        {/* Products Operations */}
        <div className='flex items-center space-x-2 my-2 bg-white py-3 px-5 w-full' >
          <NavLink to="/admin/create-category" className='bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold' >Create&nbsp;Category</NavLink>

          <div className='flex w-full justify-end space-x-3' >
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Search Blog' className='text-xs px-2 outline-none border border-b3 rounded-md' />
            <button className='border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1' >Search</button>
          </div>
        </div>

        {loading ? <div className='flex items-center justify-center w-full' ><img src="/loader-bg.gif" className='w-10 h-10' /></div>
          :
          categories.length > 0 ?

            <DragDropContext onDragEnd={handleDragEnd} className='w-full h-full'>
              <Droppable droppableId='categories'>
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className='grid  grid-cols-1 md:grid-cols-4 2xl:grid-cols-3 gap-2 xl:gap-5' >
                    {categories.map((category, index) =>
                      <Draggable key={category._id} draggableId={category._id} index={index}>
                        {(provided) => (

                          <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className='populerbrands'>
                            <div className='relative rounded-2xl border border-gray-300 p-3 h-fit w-fit flex flex-col justify-center items-center'>
                            {category.inMenu ?<span title="In Navbar Menu" className='cursor-help hover:shadow-lg absolute bg-b6/80 right-3 top-2 text-white px-1 py-1 rounded-full' ><MdMenuOpen /></span>:null}
                              <img src={category.image} className='max-w-full h-[133px] object-contain' alt={category.title} />
                              <h3 className='font-semibold px-3 text-center text-xs'>{hyphenToCamelCase(category.title)} ({category.productCount})</h3>
                              <div className='flex space-x-2 mt-2' >
                                <NavLink to={`/admin/update-category/${category._id}`} title="Edit Category" className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 rounded-full cursor-pointer py-2' ><BsPencil className="text-base" /></NavLink>
                                <span onClick={(e) => DeleteCategory(e, category._id)} title="Delete Category" className='flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2' >{delLoading === category._id ? <img src="/loader-bg.gif" className='w-4 h-4' /> : <BsFillTrashFill className="text-base" />}</span>
                                <NavLink to={`/admin/manage-category-sections/${category.slug}`} title="View Sections" className='flex items-center justify-center bg-b7/30 text-b7 hover:bg-white hover:b7 border-2 border-white hover:border-b7 text-sm px-[7px] w-fit rounded-full cursor-pointer py-1' > <AiFillEye className="text-lg" /></NavLink>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div className='flex justify-end w-full mt-5' ><button type="button" onClick={UpdateCategoriesIndex} className='flex justify-center items-center cursor-pointer rounded-md py-1 w-fit bg-b3' >{iLoading ? <img src='/loader-bg.gif' className='w-8' /> : <a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Save</span></a>}</button></div>
            </DragDropContext>



            :
            <div className='flex justify-center w-full h-full' >
              <img src="/not-found.webp" className='w-36 h-36' />
            </div>}
      </AdminAccount>
    </>
  )
}

export default ManageCategories