import * as yup from "yup";

const createProductSchema = yup.object().shape({
  title: yup.string().min(20).max(200).required("Product Title is Required!"),
  slug: yup.string().min(20).max(200).required("Product Slug is Required!"),
  category: yup.string().required("Product Category is Required!"),
  color: yup.string().required("Product Color is Required!"),
  brand: yup.string().required("Product Brand is Required!"),
  fuelType: yup.string().required("Product Fuel Type is Required!"),
  type: yup.string().required("Product Type is Required!"),
  dryerOption: yup.string().required("Product Dryer Options is Required!"),
  feature: yup.string().required("Product Dryer Options is Required!"),
  bullet1: yup.string().required("Product Bullet Description 1 is Required!"),
  bullet2: yup.string().required("Product Bullet Description 2 is Required!"),
  bullet3: yup.string().required("Product Bullet Description 3 is Required!"),
  bullet4: yup.string().required("Product Bullet Description 4 is Required!"),
  salePrice: yup.string(),
  regularPrice: yup.string().required("Product Regular Price is Required!"),
  images: yup.mixed().required("Product Images are Required!"),
  featuresVideo: yup.mixed().required("Product Features Video is Required!"),
  threeSixty: yup.mixed().required("Product 360 Images Zip is Required!"),
  modelNo: yup.string().required("Product Model No is Required!"),
  itemId: yup.string().required("Product Item Id is Required!"),
  stock: yup.string().required("Product Stock is Required!"),
  rating: yup.string().required("Product Star Rating is Required!"),
  lowerInstallment: yup.string().required("Product Lower Installment Amount is Required!"),
  highInstallment: yup.string().required("Product Higher Installment Amount is Required!"),
  description: yup.string().required("Product Description is Required!"),
  specification: yup.string().required("Product Specification is Required!"),
  deliveryInfo: yup.string().required("Product Delivery Info is Required!"),
});

export default createProductSchema;