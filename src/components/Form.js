import React from 'react'
import { Button, Form, Label, Input, FormGroup} from 'reactstrap';

export default function Forma (props){
    const {
            values,
            submit,
            inputChange,
            disabled,
            errors,
    } = props

    const onChange = (event) =>{
        const name = event.target.name
        const values = event.target.value
        inputChange(name, values)
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        submit()
    }
    return (
        <Form onSubmit = {onSubmit}>
            <Label htmlFor = 'name'>Name:</Label>
            <Input 
            name = 'name'
            type = 'text'
            id = 'name'
            values = {values.name}
            placeholder = "Enter Name"
            onChange = {onChange}
            />

            <Label htmlFor = 'email'>Email:</Label>
            <Input 
            name = 'email'
            type = 'text'
            id = 'email'
            values = {values.email}
            placeholder = "Enter email"
            onChange = {onChange}
            />

            <Label htmlFor = 'slice'>Slice:</Label>
            <Input 
            name = 'slice'
            type = 'select'
            id = 'slice'
            values = {values.slice}
            placeholder = "Enter slice"
            onChange = {onChange}
            >  
                <option values = "Small">Small</option>
                <option values = "Medium">Medium</option>
                <option values = "Large">Large</option>
                <option values = "Why Would You Do This?">Why Would You Do This?</option>
            </Input>
<FormGroup>
            <Label for="pepperoni"> Pepperoni!
<Input type="checkbox" id="pepperoni" name="pepperoni" values={values.toppings.pepperoni} onChange = {onChange}/>{' '}
</Label>
 <br />
 <Label for="olives"> Olives!
<Input type="checkbox" id="olives" name="olives" values={values.toppings.olives} onChange = {onChange}/>{' '}
</Label>
 <br />
 <Label for="mushrooms"> Mushrooms!
<Input type="checkbox" id="mushrooms" name="mushrooms" values={values.toppings.mushrooms} onChange = {onChange}/>{' '}
</Label>
 <br />
 <Label for="sausage"> Sausage!
<Input type="checkbox" id="sausage" name="sausage" values={values.toppings.sausage} onChange = {onChange}/>{' '}
</Label>
<br />
<Label for="pineapple" > Pineapple!
<Input type="checkbox" id="pineapple" name="pineapple" values={values.toppings.pineapple} onChange = {onChange}/>{' '}
</Label>
<br />
</FormGroup>
            <Label htmlFor = 'instructions'>Special Instructions:</Label>
            <Input 
            name = 'instructions'
            type = 'text'
            id = 'instructions'
            values = {values.instructions}
            placeholder = "Enter Instructions"
            onChange = {onChange}
            
            />
            <Label for="glutenFree"> Gluten Free!
            <Input type="checkbox" id="glutenFree" name="glutenFree" values={values.toppings.glutenFree} onChange = {onChange}/>
</Label>
<br />
<div className='errors'>
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.slice}</div>
          <div>{errors.pineapple}</div>
        </div>
            
            <Button id = "sumbitBtn" disabled = {disabled}>Order Pizza!</Button>
        </Form>
    )
}