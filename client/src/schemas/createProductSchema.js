import * as yup from "yup";

const createProductSchema = yup.object().shape({  
  productType: yup.string().required("Product Type is Required!"),
  title: yup.string().required("Title is Required!"),
  slug: yup.string().required("Slug is Required!"),
  category: yup.string().required("Category is Required!"),
  subCategory: yup.string(),
  feature: yup.string(),
  type: yup.string(),
  color: yup.string(),
  brand: yup.string(),
  fuelType: yup.string(),
  regPrice: yup.string().required("Regular Price is Required!"),
  salePrice: yup.string(),
  rating: yup.string().required("Rating is Required!"),
  stock: yup.string().required("Stock is Required!"),
  modelNo: yup.string().required("Model No is Required!"),
  itemId: yup.string().required("Item Id is Required!"),
  keyFeatures:yup.array().required("key Features is Required!").min(0),
  featureVideo: yup.object().required("Feature Video is Required!"),
  threeSixty: yup.object().required("360 Video is Required!"),
  media: yup.array().required("Product Media is Required!"),
  bulletDescription: yup.array().required("Bullet Description is Required!"),
  tags: yup.string().required("Product Tags is Required!"),
  description: yup.string().required("Description is Required!"),
  specification: yup.string().required("Specification is Required!"),
  deliveryInfo: yup.string().required("Delivery Info is Required!"),
  metaTitle: yup.string(),
  metaDescription: yup.string(),
  metaKeywords: yup.array(),
});

export default createProductSchema;