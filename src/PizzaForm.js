import React from 'react'

export default function PizzaForm() {
    return(
        <form id="pizza-form">
            <input
                id="name-input"
                name="nameInput"
                type="text"
                placeholder="Name"
                value={form.value}
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
                checked={form.value === true}
            /> 
            </label>
            <label>Mushrooms
            <input 
                name="mushrooms"
                type="checkbox"
                checked={form.value === true}
            /> 
            </label>
            <label>Spinach
            <input 
                name="spinach"
                type="checkbox"
                checked={form.value === true}
            /> 
            </label>
            <label>Sausage
            <input 
                name="sausage"
                type="checkbox"
                checked={form.value === true}
            /> 
            </label>
            <input
                id="special-text"
                name="specialText"
                type="text"
                placeholder="Special Instructions"
                value={form.value}
            />
            <button id="order-button">Add to Order</button>
        </form>
    )
}