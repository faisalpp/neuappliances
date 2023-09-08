import * as yup from "yup";

const createProductSchema = yup.object().shape({
  title: yup.string().min(10).required("Product Title is Required!"),
  slug: yup.string().min(10).required("Product Slug is Required!"),
  category: yup.string().required("Product Category is Required!"),
  color: yup.string().required("Product Color is Required!"),
  brand: yup.string().required("Product Brand is Required!"),
  fuelType: yup.string().required("Product Fuel Type is Required!"),
  type: yup.string().required("Product Type is Required!"),
  dryerOption: yup.string().required("Product Dryer Options is Required!"),
  feature: yup.string().required("Product Feature is Required!"),
  salePrice: yup.string("Sale Price is Required!"),
  regularPrice: yup.string().required("Regular Price is Required!"),
  modelNo: yup.string().required("Model No is Required!"),
  itemId: yup.string().required("Item Id is Required!"),
  featuresVideo: yup.string().required("Product Features Video is Required!"),
  threeSixty: yup.string().required("Product Three Sixty is Required!"),
  images: yup.array().required("Product Images is Required!"),
  rating: yup.string().required("Product Rating is Required!"),
  stock: yup.string().required("Product Stock is Required!"),
  lowerInstallment: yup.string().required("Product Lower Installment Amount is Required!"),
  highInstallment: yup.string().required("Product Higher Installment Amount is Required!"),
  description: yup.string().required("Product Description is Required!"),
  specification: yup.string().required("Product Specification is Required!"),
  deliveryInfo: yup.string().required("Product Delivery Info is Required!"),
});

export default createProductSchema;