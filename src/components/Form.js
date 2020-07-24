import React, { useState, useEffect } from 'react'
import formSchema from '../validation/FormSchema'
import Order from './Order'
import axios from 'axios'
import * as yup from 'yup'

const emptyForm = {
    name: '',
    email: '',
    slice: null,
    toppings: {
        pepperoni: false,
        olives: false,
        mushrooms: false,
        sausage: false,
        pineapple: false
    },
    instructions: '',
    glutenFree: false
}

const initialErrors = {
    name: '',
    email: '',
    slice: null,
    toppings: {
        pepperoni: false,
        olives: false,
        mushrooms: false,
        sausage: false,
        pineapple: false
    },
    instructions: '',
    glutenFree: false
}

const initialOrder = []
const initialDisabled = true

export default function App(){
    const [order, setOrder] = useState(initialOrder)
    const [errors, setErrors] = useState(initialErrors)
    const [form, setForm] = useState(emptyForm)
    const [disabled, setDisabled] = useState(initialDisabled)
    
    //helperFunctions

    const postOrder = (newOrder) =>{
        axios
        .post(`https://reqres.in/`, newOrder)
        .then(res => {
            setOrder([res.data, ...order])
            setForm(emptyForm)
            console.log(res.data)
        })
        .catch(e => {
            console.log(`${e}`)
        })
    }

    const inputChange = (name, value) => {
        yup
        .reach(formSchema, name)
        .validate(value)
        .then(valid => {
          setErrors({
            ...errors, [name]: ''
          })
        })
        .catch(err => {
          setErrors({
            ...errors,
            [name]: err.errors[0],
          })
        })
        setOrder({
          ...order,
          [name]: value
        })
    }

    const onSubmit = () => {
        const newOrder = {
            name: order.name.trim(),
            email: order.email.trim(),
    slice: null,
    toppings: {
        pepperoni: order.toppings.pepperoni,
        olives: order.toppings.olives,
        mushrooms: order.toppings.mushrooms,
        sausage: order.toppings.sausage,
        pineapple: order.toppings.pineapple
    },
    instructions: order.instructions.trim(),
    glutenFree: order.glutenFree
}
postOrder(newOrder)
}

useEffect(()=>{
    formSchema.isValid(order).then(valid => {
        setDisabled(!valid)
      })
    }, [order])

    return(
        <Order />
    )
}