import React from 'react'

export default function PizzaForm(props) {
    const { values, errors } = props

    return(
        <form id="pizza-form">
            <input
                id="name-input"
                name="name"
                type="text"
                placeholder="Name"
                value={values.name}
            />
            <select id="size-dropdown">
                <option>---- Select a Size ----</option>
                <option>10" -- $12.95</option>
                <option>12" -- $15.95</option>
                <option>14" -- $17.95</option>
            </select>
            <label>Pepperoni
            <input 
                name="pepperoni"
                type="checkbox"
                checked={values.pepperoni === true}
            /> 
            </label>
            <label>Mushrooms
            <input 
                name="mushrooms"
                type="checkbox"
                checked={values.mushrooms === true}
            /> 
            </label>
            <label>Spinach
            <input 
                name="spinach"
                type="checkbox"
                checked={values.spinach === true}
            /> 
            </label>
            <label>Sausage
            <input 
                name="sausage"
                type="checkbox"
                checked={values.sausage === true}
            /> 
            </label>
            <input
                id="special-text"
                name="special"
                type="text"
                placeholder="Special Instructions"
                value={values.special}
            />
            <button id="order-button">Add to Order</button>
        </form>
    )
}