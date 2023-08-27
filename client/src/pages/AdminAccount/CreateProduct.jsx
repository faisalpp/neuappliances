import React,{useEffect} from 'react';
import AdminAccount from '../../layout/AdminAccount';
import {BsArrowRightShort} from 'react-icons/bs'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCategoryBrands,getProductTypes,getProductFeatures,createProduct,getCategoryColors} from '../../api/admin'
import {GetCategories} from '../../api/admin/category'
import TextInput from '../../components/TextInput/TextInput';
import TextAreaInput from '../../components/TextInput/TextAreaInput';
import SelectInput from '../../components/TextInput/SelectInput';
import createProductSchema from '../../schemas/createProductSchema';
import Loader2 from '../../components/Loader/Loader2'
import ToolTip from '../../components/ToolTip'

const CreateProduct = () => {
  const initialValues = {title: '',color:'',slug: '',stock:'',category: '',brand: '',fuelType: '',type: '',dryerOption: '',feature: '',bullet1: '',bullet2: '',bullet3: '',bullet4: '',salePrice: '',regularPrice: '',images: [],featuresVideo: '',threeSixty: '',modelNo: '',itemId: '',rating: '3',lowerInstallment: '',highInstallment: '',description: '',specification: '',deliveryInfo: ''};
  
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
          navigate('/admin/manage-products');
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
      } catch (error) {
        setErrors(error.errors)
        for (var i = 0; i < error.errors.length; i++) {
          console.log(error.errors[i])
        }
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
           <TextInput  name="title" title="Product Title" iscompulsory="true" type="text" value={values.title} onChange={handleTitleChange} error={errors.length > 0 && errors.includes('Product Title is Required!') ? true : false} errormessage="Product Title is Required!" placeholder="Enter Product Title"  />
           <TextInput disabled name="slug" title="Product Slug" iscompulsory="true" type="text" value={values.slug} onChange={handleChange} error={errors.length > 0 && errors.includes('Product Slug is Required!') ? true : false} errormessage="Product Slug is Required!" placeholder="Enter Product Slug" />
          </div>
          <div className='flex space-x-2 items-center' >
          <SelectInput name="category" options={categories} value={values.category} onChange={handleChange} title="Product Category" iscompulsory="true" error={errors.length > 0 && errors.includes('Product Category is Required!') ? true : false} errormessage="Product Category is Required!"  />
          <SelectInput name="color" options={productColors} value={values.color} onChange={handleChange} title="Product Color" iscompulsory="true" error={errors.length > 0 && errors.includes('Product Color is Required!') ? true : false} errormessage="Product Color is Required!"  />
          </div>
          {/* Input Group End*/}

          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
          <SelectInput name="brand" title="Product Brand" iscompulsory="true" value={values.brand} onChange={handleChange} options={categoryBrands} error={errors.length > 0 && errors.includes('Product Brand is Required!') ? true : false} errormessage="Product Brand is Required!" />
          <SelectInput name="fuelType" title="Fuel Type" iscompulsory="true" value={values.fuelType} onChange={handleChange} options={['Electric','Gas','Propane','Electric & Gas','Electric, Gas & Propane']} error={errors.length > 0 && errors.includes('Product Fuel Type is Required!') ? true : false} errormessage="Product Fuel Type is Required!"  />
          </div>
          {/* Input Group End*/}

          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <SelectInput name="type" title="Product Type" iscompulsory="true" value={values.type} onChange={handleChange} options={productTypes} error={errors.length > 0 && errors.includes('Product Type is Required!') ? true : false} errormessage="Product Type is Required!" />
           <SelectInput name="dryerOption" title="Dryer Option" iscompulsory="true" value={values.dryerOption} onChange={handleChange} options={['STACKABLE','STEAM','BOTH']} error={errors.length > 0 && errors.includes('Product Dryer Options is Required!') ? true : false} errormessage="Product Dryer Options is Required!" />
          </div>
          {/* Input Group End*/}

          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <SelectInput name="feature" title="Product Feature" iscompulsory="true" value={values.feature} onChange={handleChange} options={productFeatures} error={errors.length > 0 && errors.includes('Product Feature is Required!') ? true : false} errormessage="Product Feature is Required!" />
           <SelectInput name="rating" title="Product Cosmatic Rating" iscompulsory="true" value={values.rating} onChange={handleChange} options={['3','4','5']} error={errors.length > 0 && errors.includes('Product Star Rating is Required!') ? true : false} errormessage="Product Star Rating is Required!" />
           <TextInput  name="stock" title="Total Stock" iscompulsory="true" type="text" value={values.stock} onChange={handleChange} error={errors.length > 0 && errors.includes('Product Stock is Required!') ? true : false} errormessage="Product Stock is Required!" placeholder="Enter Product Stock" />
          </div>
          {/* Input Group End*/}

          {/* Input Group */}
          <div className='flex space-x-2 items-center' >           
           <TextInput  name="bullet1" title="Bullet Description 1" iscompulsory="true" type="text" value={values.bullet1} onChange={handleChange} error={errors.length > 0 && errors.includes('Product Bullet Description 1 is Required!') ? true : false} errormessage="Product Bullet Description 1 is Required!" placeholder="Enter Product Bullet Point 1" />
           <TextInput  name="bullet2" title="Bullet Description 2" iscompulsory="true" type="text" value={values.bullet2} onChange={handleChange} error={errors.length > 0 && errors.includes('Product Bullet Description 2 is Required!') ? true : false} errormessage="Product Bullet Description 2 is Required!" placeholder="Enter Product Bullet Point 2"/>
          </div>
          {/* Input Group End*/}

          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <TextInput  name="bullet3" title="Bullet Description 3" iscompulsory="true" type="text" value={values.bullet3} onChange={handleChange} error={errors.length > 0 && errors.includes('Product Bullet Description 3 is Required!') ? true : false} errormessage="Product Bullet Description 3 is Required!" placeholder="Enter Product Bullet Point 3"/>
           <TextInput  name="bullet4" title="Bullet Description 4" iscompulsory="true" type="text" value={values.bullet4} onChange={handleChange} error={errors.length > 0 && errors.includes('Product Bullet Description 4 is Required!') ? true : false} errormessage="Product Bullet Description 4 is Required!" placeholder="Enter Product Bullet Point 4"/>
          </div>
          {/* Input Group End*/}
          
          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <TextInput name="salePrice" title="Sale Price" iscompulsory="false" type="text" value={values.salePrice} onChange={handleChange} error={errors.length > 0 && errors.includes('Product Sale Price is Required!') ? true : false} errormessage="Product Sale Price is Required!" placeholder="Enter Product Sale Price" />
           <TextInput name="regularPrice" title="Regular Price" iscompulsory="true" type="text"  value={values.regularPrice} onChange={handleChange} error={errors.length > 0 && errors.includes('Product Regular Price is Required!') ? true : false} errormessage="Product Regular Price is Required!" placeholder="Enter Product Regular Price"/>
          </div>
          
          {/* Input Group End*/}
          <div className='flex space-x-2 items-center' >
           <TextInput name="images" title="Product Images" multiple iscompulsory="true" type="file" accept="image/*" onChange={handleImageChange} error={errors.length > 0 && errors.includes('Product Images is Required!') ? true : false} errormessage="Product Images is Required!" />
           <TextInput name="threeSixty" title="Three Sixty Product Images (Zip Only)" iscompulsory="true" type="file" accept=".zip" onChange={handleThreeSixtyChange} error={errors.length > 0 && errors.includes('Product Three Sixty is Required!') ? true : false} errormessage="Product Three Sixty is Required!" />
           <ToolTip  title="360 Images should be in the root of zip file. Use 'img_1' & increment the number by one on each image. next image name should be 'img_2'. image should be in png format." />
          </div> 
          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <TextInput name="featuresVideo" title="Features Video" iscompulsory="true" type="file" accept="video/*" onChange={handleFeaturesVideoChange} error={errors.length > 0 && errors.includes('Product Features Video is Required!') ? true : false} errormessage="Product Features Video is Required!" />
           <TextInput name="modelNo" title="Model No" iscompulsory="true" type="text" value={values.modelNo} onChange={handleChange} error={errors.length > 0 && errors.includes('Product Model No is Required!') ? true : false} errormessage="Product Model No is Required!" placeholder="Enter Product Model No" />
          </div>
          {/* Input Group End*/}

          {/* Input Group */}
          <div className='flex space-x-2 items-center' >
           <TextInput name="itemId" title="Item Id" iscompulsory="true" type="text" value={values.itemId} onChange={handleChange} error={errors.length > 0 && errors.includes('Product Item Id is Required!') ? true : false} errormessage="Product Item Id is Required!" placeholder="Enter Product Item Id" />
          <TextInput name="lowerInstallment" title="Lower Installment Price" iscompulsory="true" type="text" value={values.lowerInstallment} onChange={handleChange} error={errors.length > 0 && errors.includes('Product Lower Installment Amount is Required!') ? true : false} errormessage="Product Lower Installment Amount is Required!" placeholder="Enter Product Lower Installment Price" />
           <TextInput name="highInstallment" title="Higher Installment Price" iscompulsory="true" type="text" value={values.highInstallment} onChange={handleChange} error={errors.length > 0 && errors.includes('Product Higher Installment Amount is Required!') ? true : false} errormessage="Product Higher Installment Amount is Required!" placeholder="Enter Product Higher Installment Price" />
          </div>
          {/* Input Group End*/}

          <TextAreaInput name="description" title="Description" iscompulsory="true" type="text" value={values.description} onChange={handleChange} error={errors.length > 0 && errors.includes('Product Description is Required!') ? true : false} errormessage="Product Description is Required!" placeholder="Enter Product Description"  />
          <TextAreaInput name="specification" title="Specification" iscompulsory="true" type="text" value={values.specification} onChange={handleChange} error={errors.length > 0 && errors.includes('Product Specification is Required!') ? true : false} errormessage="Product Specification is Required!" placeholder="Enter Product Specification"  />
          <TextAreaInput name="deliveryInfo" title="Delivery Info" iscompulsory="true" type="text" value={values.deliveryInfo} onChange={handleChange} error={errors.length > 0 && errors.includes('Product Delivery Info is Required!') ? true : false} errormessage="Product Delivery Info is Required!" placeholder="Enter Product Delivery Info"  />

          <button type="submit" className='flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3' ><a className='flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Create</span><BsArrowRightShort className='text-2xl' /></a></button>
          </form>
         </div>
        </AdminAccount>
         }
        </>
    )
}

export default CreateProduct