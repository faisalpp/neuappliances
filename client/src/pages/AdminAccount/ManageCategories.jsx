import React,{useEffect,useState} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { AiFillStar } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import {GetCategories,updateCategoriesIndex} from '../../api/admin/category'
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'
import {  toast } from 'react-toastify';
const ManageCategories = () => {

    const [categories,setCategories] = useState([]);
    const [loading,setLoading] = useState(false)
    const [search,setSearch] = useState('')

    const Categories = async () => {
        setLoading(true)
        const res = await GetCategories();
        if(res.status === 200){
            setLoading(false)
            setCategories(res.data.categories);
        }else{
            setCategories([])
            setLoading(false)
        }
    }
    useEffect(() => {
        Categories()
    }, [])

    const [iLoading,setIloading] = useState(false)

    const UpdateCategoriesIndex = async () => {
      setIloading(true)
        const res = await updateCategoriesIndex(categories);
      console.log(res)
      if(res.status === 200){
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
          GetMembers()
      }else{
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
        if(str){
            const words = str.split('-');
            const capitalizedWords = words.map(function(word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            });
            const spaceSeparatedString = capitalizedWords.join(' ');
            return spaceSeparatedString;
        }
        return str;
      }

    const handleDragEnd = (result) => {
        const items = Array.from(categories)
        const [recordedItem] = items.splice(result.source.index,1)
        items.splice(result.destination.index,0,recordedItem)
        const updatedItems = items.map((item, index) => ({
          ...item,
          index: index+1 
      }));
      setCategories(updatedItems);
    }
    
    return (
        <>
        <AdminAccount>
         {/* Products Operations */}
         <div className='flex items-center space-x-2 my-2 bg-white py-3 px-5 w-full' >
              <NavLink  to="/admin/create-category" className='bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold' >Create&nbsp;Category</NavLink>
              
              <div className='flex w-full justify-end space-x-3' >
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search Blog' className='text-xs px-2 outline-none border border-b3 rounded-md' />
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
                 {categories.map((category,index)=>
                   <Draggable key={category._id} draggableId={category._id} index={index}>
                     {(provided) => (

                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className='populerbrands'>
                        <div className='rounded-2xl border border-gray-300 p-3 h-fit w-fit flex flex-col justify-center items-center'>
                            <img src={category.image} className='max-w-full h-[133px] object-contain' alt={category.title} />
                            <h3 className='font-semibold px-3 text-center text-xs'>{hyphenToCamelCase(category.title)}</h3> 
                            <h3 className='font-semibold px-3 text-center text-xs'><StarIconPrinter numberOfTimes={category.rating} /></h3>
                            <div className='flex space-x-2' >
                             <NavLink to={`/admin/update-category/${category._id}`} className='bg-b3 text-white text-xs rounded-md cursor-pointer py-1 w-fit px-2 mt-1 text-center' >Update</NavLink>
                             <NavLink to={`/admin/view-category-sections/${category.title}/${category._id}`} className='bg-b3 text-white text-xs rounded-md cursor-pointer py-1 w-fit px-2 mt-1 text-center' >Edit</NavLink> 
                            </div>
                        </div>
                        </div>

                        // <BrandCard  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}  key={category.title} updateUrl={`/admin/update-category/${category._id}`} viewUrl={`/admin/view-category-sections/${category.title}/${category._id}`} brandname={category.title} brandimage={category.image} />
                     )}
                   </Draggable>
                 )}
                {provided.placeholder}
                </div>
                )}
             </Droppable>
             <div className='flex justify-end w-full mt-5' ><button type="button" onClick={UpdateCategoriesIndex} className='flex justify-center items-center cursor-pointer rounded-md py-1 w-fit bg-b3' >{iLoading ? <img src='/loader-bg.gif' className='w-8' /> :<a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Save</span></a>}</button></div>
            </DragDropContext>
            
            
            
            :
            <div className='flex justify-center w-full h-full' >
            <img src="/not-found.png" className='w-36 h-36' />
          </div>}
        </AdminAccount>
        </>
    )
}

export default ManageCategories