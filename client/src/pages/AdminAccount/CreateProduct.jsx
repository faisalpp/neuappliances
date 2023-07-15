import React,{useEffect} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {BsArrowRightShort} from 'react-icons/bs'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {GetCategories,getCategoryBrands,getProductTypes,getProductFeatures,createProduct,getCategoryColors} from '../../api/admin'
import TextInput from '../../components/TextInput/TextInput';
import TextAreaInput from '../../components/TextInput/TextAreaInput';
import SelectInput from '../../components/TextInput/SelectInput';
import createProductSchema from '../../schemas/createProductSchema';
import Loader2 from '../../components/Loader/Loader2'
import ToolTip from '../../components/ToolTip'

const CreateProduct = () => {
  const initialValues = {title: '',color:'',slug: '',category: '',brand: '',fuelType: '',type: '',dryerOption: '',feature: '',bullet1: '',bullet2: '',bullet3: '',bullet4: '',salePrice: '',regularPrice: '',images: [],featuresVideo: '',threeSixty: '',modelNo: '',itemId: '',stock: '',rating: '',lowerInstallment: '',highInstallment: '',description: '',specification: '',deliveryInfo: ''};
  
  const [values, setValues] = useState(initialValues);


   const [categories,setCategories] = useState([]);
   const [categoryBrands,setCategoryBrands] = useState([]);
   const [productTypes,setProductTypes] = useState([]);
   const [productFeatures,setProductFeatures] = useState([]);
   const [imagesPrev,setImagePrev] = useState([]);
   const [productColors,setProductColors] = useState([]);
   const [loading,setLoading] = useState(false)

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
      const { name, value } = event.target;
      setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleThreeSixtyChange = (event) => {

      const file = event.target.files[0]
      setValues((prevValues) => ({ ...prevValues, threeSixty: file }));
    };
    const handleFeaturesVideoChange = (event) => {
      const file = event.target.files[0]
      setValues((prevValues) => ({ ...prevValues, featuresVideo: file }));
    };


    const CreateProduct = async (event) => {
      setLoading(true)
      event.preventDefault();
      console.log(values)
      try {
        const err = await createProductSchema.validate(values, { abortEarly: false });
        console.log(err)
        if(!err){

          const formData = new FormData();
          
        formData.append("threeSixty",values.threeSixty)
        formData.append("featuresVideo",values.featuresVideo)
        // Assuming you have an array of image files called 'imageFiles'
        values.images.forEach((imageFile, index) => {
          formData.append(`images_${index}`, imageFile);
        });

        // Loop over the `nameValues` array
        
         // Iterate over the properties of the `values` object
         for (const key in values) {
           if (Object.hasOwnProperty.call(values, key)) {
             const value = values[key];
         
             // Check if the key is one of the skipped properties
             if (key === "threeSixty" || key === "featuresVideo" || key === "images" || key === "category") {
               // Skip this iteration
               continue;
             }
         
             // Perform operations with the key and value
             formData.set(key,value)
           }
         }
         let catName = categories.find(obj => obj._id === values.category);
      
         formData.set('category',catName.title.toLowerCase().replace(/\s/g,'-'))

        const res = await createProduct(formData);
        console.log(res)
        if(res.status === 201){
          setLoading(false)
          setValues(initialValues)
          setImagePrev([]);
         toast.success(res.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          // navigate('/admin/manage-products');
       }else{
        setLoading(false)
        toast.error(res.message, {
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
      } catch (validationErrors) {
          console.log(validationErrors); 
        setLoading(false)
      }
    }
    
    
      
    const handleImageChange = (event) => {
      setImagePrev([...imagesPrev,...event.target.files])
      const selectedImages = Array.from(event.target.files);
      setValues((prevValues) => ({ ...prevValues, images: selectedImages }));
    };
    
    const handleTitleChange = (event) => {
      const slug = event.target.value.toLowerCase().replace(/\s/g,'-')
      setValues((prevValues) => ({ ...prevValues, title: event.target.value }));
      setValues((prevValues) => ({ ...prevValues, slug: slug }));
    };
    
    useEffect(() => {
      // Fetch data for the category field
      fetchDataForCategory();
    }, []);


    const fetchDataForCategory = async () => {
          const res = await GetCategories();
          if(res.status === 200){
            setCategories(res.data.categories);
            setValues((prevValues) => ({ ...prevValues, category: res.data.categories[0]._id }))
            setValues((prevValues)=>({...prevValues,fuelType:'electric'}));
            setValues((prevValues)=>({...prevValues,dryerOption:'STACKABLE'}));
          }
    }

      useEffect(() => {
        const catId = values.category;
        if(catId){
          fetchDataForCategoryBrands(catId)
          fetchDataForProductType(catId)
          fetchDataForProductFeatures(catId)
          fetchDataForProductColors(catId)
        }
      },[values.category])

    const fetchDataForCategoryBrands = async (categoryId) => {
      const data = {categoryId}
      const res = await getCategoryBrands(data);
      if(res.data.status === 200){
        if(res.data.categoryBrands.length > 0){
          setCategoryBrands(res.data.categoryBrands[0].sectionItemsId);
          const brandSlug = res.data.categoryBrands[0].sectionItemsId[0].title.toLowerCase().replace(' ','-');
          setValues((prevValues)=>({...prevValues,brand:brandSlug}))
        }else{
          setCategoryBrands([])
        }
      }
    }

    const fetchDataForProductFeatures = async (categoryId) => {
      const data = {categoryId}
      const res = await getProductFeatures(data);
      if(res.data.status === 200){
        if(res.data.productFeatures.length > 0){
          setProductFeatures(res.data.productFeatures[0].sectionItemsId);
          const featureSlug = res.data.productFeatures[0].sectionItemsId[0].title.toLowerCase().replace(' ','-');
          setValues((prevValues)=>({...prevValues,feature:featureSlug}))
        }else{
          setProductFeatures([])
        }
      }
    }
      

    const fetchDataForProductType = async (categoryId) => {
      const data = {categoryId}
      const res = await getProductTypes(data);
        if(res.data.status === 200){
          if(res.data.productTypes.length > 0){
            setProductTypes(res.data.productTypes[0].sectionItemsId);
            const typeSlug = res.data.productTypes[0].sectionItemsId[0].title.toLowerCase().replace(' ','-');
            setValues((prevValues)=>({...prevValues,type:typeSlug}))
          }else{
            setProductTypes([])
          }
        }
      }
    const fetchDataForProductColors = async (categoryId) => {
      const data = {categoryId}
      const res = await getCategoryColors(data);
        if(res.data.status === 200){
          if(res.data.categoryColors.length > 0){
            setProductColors(res.data.categoryColors[0].sectionItemsId);
            const colorName = res.data.categoryColors[0].sectionItemsId[0].title.toLowerCase().replace(' ','-');
            setValues((prevValues)=>({...prevValues,color:colorName}))
          }else{
            setProductColors([])
          }
        }
      }
      

      return (
        <>
        {loading ? <Loader2/>:
        <AdminAccount>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
         <div className='flex justify-center w-full'>
         <form onSubmit={CreateProduct} encType='multipart/form-data' className='flex flex-col justify-center space-y-5 w-full px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200' >
          <div className='grid grid-cols-6 gap-y-2 grid-flow-row' >
           {imagesPrev.length > 0 ? imagesPrev.map((image,index)=> (<div key={index} className='rounded-2xl border border-gray-300 p-3 h-fit w-fit'>
            <img src={window.URL.createObjectURL(image)} className='w-fit h-[125px] object-contain' alt="example" />
           </div>))
            :<div className='rounded-2xl border border-gray-300 p-3 h-[130px] w-fit flex justify-center items-center self-center'>
            <img src='https://placehold.co/600x400' className='max-w-fit h-[115px] object-contain' alt="example" /></div>}
          </div> 

          <div className='flex space-x-2 items-center' >
           <TextInput  name="title" title="Product Title" iscompulsory="true" type="text" value={values.title} change={handleTitleChange} error={errors.length > 0 && errors.includes('Product Title is Required!') ? true : false} errormessage="Product Title is Required!" placeholder="Enter Product Title"  />
           <TextInput  name="slug" title="Product Slug" iscompulsory="true" type="text" value={values.slug} change={handleChange} error={errors.length > 0 && errors.includes('Product Slug is Required!') ? true : false} errormessage="Product Slug is Required!" placeholder="Enter Product Slug" />
          </div>
          <div className='flex space-x-2 items-center' >
          <SelectInput name="category" options={categories} value={values.category} change={handleChange} title="Product Category" iscompulsory="true" error={errors.length > 0 && errors.includes('Product Category is Required!') ? true : false} errormessage="Product Category is Required!"  />
          <SelectInput name="color" options={productColors} value={values.color} change={handleChange} title="Product Color" iscompulsory="true" error={errors.length > 0 && errors.includes('Product Color is Required!') ? true : false} errormessage="Product Color is Required!"  />
          </div>
          {/* Input Group End*/}

          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
          <SelectInput name="brand" title="Product Brand" iscompulsory="true" value={values.brand} change={handleChange} options={categoryBrands} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" />
          <SelectInput name="fuelType" title="Fuel Type" iscompulsory="true" value={values.fuelType} change={handleChange} options={['Electric','Gas','Propane','Electric & Gas','Electric, Gas & Propane']} error={errors.length > 0 && errors.includes('Product Fuel Type is Required!') ? true : false} errormessage="Product Fuel Type is Required!"  />
          </div>
          {/* Input Group End*/}

          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <SelectInput name="type" title="Product Type" iscompulsory="true" value={values.type} change={handleChange} options={productTypes} error={errors.length > 0 && errors.includes('Product Type is Required!') ? true : false} errormessage="Product Type is Required!" />
           <SelectInput name="dryerOption" title="Dryer Option" iscompulsory="true" value={values.dryerOption} change={handleChange} options={['STACKABLE','STEAM','BOTH']} error={errors.length > 0 && errors.includes('Product Dryer Options is Required!') ? true : false} errormessage="Product Dryer Options is Required!" />
          </div>
          {/* Input Group End*/}

          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <SelectInput name="feature" title="Product Feature" iscompulsory="true" value={values.feature} change={handleChange} options={productFeatures} error={errors.length > 0 && errors.includes('Product Feature is Required!') ? true : false} errormessage="Product Feature is Required!" />
           <TextInput  name="bullet1" title="Bullet Description 1" iscompulsory="true" type="text" value={values.bullet1} change={handleChange} error={errors.length > 0 && errors.includes('Product Bullet Description 1 is Required!') ? true : false} errormessage="Product Bullet Description 1 is Required!" placeholder="Enter Product Bullet Point 1" />
          </div>
          {/* Input Group End*/}

          {/* Input Group */}
          <div className='flex space-x-2 items-center' >           
           <TextInput  name="bullet2" title="Bullet Description 2" iscompulsory="true" type="text" value={values.bullet2} change={handleChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Bullet Description 1 is Required!" placeholder="Enter Product Bullet Point 2"/>
           <TextInput  name="bullet3" title="Bullet Description 3" iscompulsory="true" type="text" value={values.bullet3} change={handleChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Bullet Description 1 is Required!" placeholder="Enter Product Bullet Point 3"/>
          </div>
          {/* Input Group End*/}

          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <TextInput  name="bullet4" title="Bullet Description 4" iscompulsory="true" type="text" value={values.bullet4} change={handleChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" placeholder="Enter Product Bullet Point 4"/>
           <TextInput name="salePrice" title="Product Sale Price" iscompulsory="false" type="text" value={values.salePrice} change={handleChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" placeholder="Enter Product Sale Price" />
          </div>
          {/* Input Group End*/}
          
          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <TextInput name="regularPrice" title="Product Regular Price" iscompulsory="true" type="text"  value={values.regularPrice} change={handleChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" placeholder="Enter Product Regular Price"/>
           <TextInput name="images" title="Product Images" multiple iscompulsory="true" type="file" accept="image/*" change={handleImageChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" />
          </div>
          
          {/* Input Group End*/}
          <div className='flex space-x-2 items-center' >
           <TextInput name="featuresVideo" title="Features Video" iscompulsory="true" type="file" accept="video/*" change={handleFeaturesVideoChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" />
           <TextInput name="threeSixty" title="Three Sixty Product Images (Zip Only)" iscompulsory="true" type="file" accept=".zip" change={handleThreeSixtyChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" />
           <ToolTip  title="360 Images should be in the root of zip file. Use 'img_1' & increment the number by one on each image. next image name should be 'img_2'. image should be in png format." />
          </div> 
          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <TextInput name="modelNo" title="Product Model No" iscompulsory="true" type="text" value={values.modelNo} change={handleChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" placeholder="Enter Product Model No" />
           <TextInput name="itemId" title="Product Item Id" iscompulsory="true" type="text" value={values.itemId} change={handleChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" placeholder="Enter Product Item Id" />
          </div>
          {/* Input Group End*/}

          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <TextInput name="stock" title="Product Total Stock" iscompulsory="true" type="text" value={values.stock} change={handleChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" placeholder="Enter Product Total Stock" />
           <TextInput name="rating" title="Product Cosmatic Rating" iscompulsory="true" type="text" value={values.rating} change={handleChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" placeholder="Enter Cosmatic Rating (3-5)" />
          </div>
          {/* Input Group End*/}
          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
          <TextInput name="lowerInstallment" title="Product Lower Installment Price" iscompulsory="true" type="text" value={values.lowerInstallment} change={handleChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" placeholder="Enter Product Lower Installment Price" />
           <TextInput name="highInstallment" title="Product Higher Installment Price" iscompulsory="true" type="text" value={values.highInstallment} change={handleChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" placeholder="Enter Product Higher Installment Price" />
          </div>
          {/* Input Group End*/}

          <TextAreaInput name="description" title="Product Description" iscompulsory="true" type="text" value={values.description} change={handleChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" placeholder="Enter Product Description"  />
          <TextAreaInput name="specification" title="Product Specification" iscompulsory="true" type="text" value={values.specification} change={handleChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" placeholder="Enter Product Specification"  />
          <TextAreaInput name="deliveryInfo" title="Product Delivery Info" iscompulsory="true" type="text" value={values.deliveryInfo} change={handleChange} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" placeholder="Enter Product Delivery Info"  />

          <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a></button>
          </form>
         </div>
         <ToastContainer/>
        </AdminAccount>
         }
        </>
    )
}

export default CreateProduct