import * as Yup from 'yup';

const shippingValidationSchema = Yup.object().shape({
    email: Yup.string().required('Shipping Address Email is Required!'),
    firstName: Yup.string().nullable(),
    lastName: Yup.string().required('Shipping Address Last Name is Required!'),
    address: Yup.string().required('Shipping Address Address is Required!'),
    appartment: Yup.string().nullable(),
    city: Yup.string().required('Shipping Address City is Required!'),
    country: Yup.string().required('Shipping Address Country is Required!'),
    state: Yup.string().required('Shipping Address State is Required!'),
    postalCode: Yup.string().required('Shipping Address Postal Code is Required!'),
    phone: Yup.string().required('Shipping Address Phone is Required!'),
});

export default shippingValidationSchema