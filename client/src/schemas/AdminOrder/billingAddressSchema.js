import * as Yup from 'yup';

const billingValidationSchema = Yup.object().shape({
    email: Yup.string().required('Billing Address Email is Required!'),
    firstName: Yup.string().nullable(),
    lastName: Yup.string().required('Billing Address Last Name is Required!'),
    address: Yup.string().required('Billing Address Address is Required!'),
    appartment: Yup.string().nullable(),
    city: Yup.string().required('Billing Address City is Required!'),
    country: Yup.string().required('Billing Address Country is Required!'),
    state: Yup.string().required('Billing Address Province is Required!'),
    postalCode: Yup.string().required('Billing Address Postal Code is Required!'),
    phone: Yup.string().required('Billing Address Phone is Required!'),
  });


export default billingValidationSchema