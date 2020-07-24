import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(3, 'Name must be three characters')
    .required('Name is Required'),
    email: yup
    .email('Email must be valid')
    .required('Email is required for confirmation'),
    slice: yup
    .string()
    .oneOf(['Small', 'Medium', 'Large', 'Why Would You Do This?'], 'Please pick a slice!'),
    toppings: yup.object({
        pepperoni: yup
        .boolean()
        .oneOf([false, true]),
        olives: yup
        .boolean()
        .oneOf([false, true]),
        mushrooms: yup
        .boolean()
        .oneOf([false, true]),
        sausage: yup
        .boolean()
        .oneOf([false, true]),
        pineapple: yup
        .boolean()
        .oneOf([false], 'Pineapple does not go on pizza!')
    })     
    ,
    instructions: yup
    .string(),
    glutenFree: yup
    .boolean()
    .oneOf([false, true])
})

export default formSchema