import React, { useState, useEffect } from 'react'
import formSchema from './validation/FormSchema'
import Forma from './components/Form'
import axios from 'axios'
import * as yup from 'yup'
import { Route, Link} from 'react-router-dom';
import Order from './components/Order'

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
    const [newOrder, setNewOrder] = useState([])
    
    //helperFunctions

    const postOrder = (newOrder) =>{
      console.log(newOrder)
        axios
        .post(`https://reqres.in/api/users`, newOrder)
        .then(res => {
          console.log(order)
          setNewOrder(order)

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
        pepperoni: order.pepperoni,
        olives: order.olives,
        mushrooms: order.mushrooms,
        sausage: order.sausage,
        pineapple: order.pineapple
    },
    instructions: order.instructions.trim(),
    glutenFree: order.glutenFree
}
console.log(newOrder)
postOrder(newOrder)
setForm(emptyForm)
}

useEffect(()=>{
    formSchema.isValid(order).then(valid => {
        setDisabled(!valid)
      })
    }, [order])

    return(
      <>
      <Link to='/'>Home</Link>
      <Link to='/order'>Order Now!</Link>
      <Route exact path='/'></Route>
      <Route path = '/order'><Forma values = {form} submit = {onSubmit} inputChange = {inputChange} disabled = {disabled} errors = {errors}/>
      {newOrder.map(item=>{
        console.log(item)
      })}
    </Route>
        
    </>
    )
}
