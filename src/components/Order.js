import React from 'react'

export default function Order(props){
    const {order} = props

    return(
        <>
    <h2>{order.name}</h2>
    <h3>{order.email}</h3>
    <h3>{order.slice}{order.toppings}</h3>
    </>
    
    )
}