import * as yup from 'yup'


const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(3, 'Name must be three characters')
    .required('Name is Required'),
    email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
    slice: yup
    .string()
    .oneOf(['Small', 'Medium', 'Large', 'Why Would You Do This?'], 'Please pick a slice!'),
        pepperoni: yup
        .string()
        .oneOf(['off', 'on']),
        olives: yup
        .string()
        .oneOf(['off', 'on']),
        mushrooms: yup
        .string()
        .oneOf(['off', 'on']),
        sausage: yup
        .string()
        .oneOf(['off', 'on']),
        pineapple: yup
        .string()
        .oneOf(['off'], 'Pineapple does not go on pizza!')   
    ,
    instructions: yup
    .string()
    .required('Please enter "none" if none!'),
    glutenFree: yup
    .string()
    .oneOf(['off', 'on'])
})

export default formSchema