import React from 'react'

export default function PizzaForm(props) {
    const { 
        values, 
        errors, 
        submit, 
        change 
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === "checkbox" ?checked : value
        change(name, valueToUse)
    }

    return(
        <form id="pizza-form" onSubmit={onSubmit}>
            <div className="error">{errors.name}</div>
            <input
                id="name-input"
                name="name"
                type="text"
                placeholder="Name"
                value={values.name}
                onChange={onChange}
            />
            <select id="size-dropdown"
                onChange={onChange}
                value={values.size}
                name="size"
            >
                <option value="">---- Select a Size ----</option>
                <option value="10">10" -- $12.95</option>
                <option value="12">12" -- $15.95</option>
                <option value="14">14" -- $17.95</option>
            </select>
            <label>Pepperoni
            <input 
                name="pepperoni"
                type="checkbox"
                checked={values.pepperoni}
                onChange={onChange}
            /> 
            </label>
            <label>Mushrooms
            <input 
                name="mushrooms"
                type="checkbox"
                checked={values.mushrooms}
                onChange={onChange}
            /> 
            </label>
            <label>Spinach
            <input 
                name="spinach"
                type="checkbox"
                checked={values.spinach}
                onChange={onChange}
            /> 
            </label>
            <label>Sausage
            <input 
                name="sausage"
                type="checkbox"
                checked={values.sausage}
                onChange={onChange}
            /> 
            </label>
            <input
                id="special-text"
                name="special"
                type="text"
                placeholder="Special Instructions"
                value={values.special}
                onChange={onChange}
            />
            <button id="order-button">Add to Order</button>
        </form>
    )
}