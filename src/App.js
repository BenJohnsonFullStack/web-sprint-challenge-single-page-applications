import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import Home from "./Home"
import PizzaForm from "./PizzaForm"


const App = () => {
  const initialFormValues = {
    name: "",
    size: "",
    pepperoni: false,
    mushrooms: false,
    spinach: false,
    sausage: false,
    special: "---- Select a Size ----"
  }

  const initialFormErrors = {
    name: "",
    size: ""
  }

  const initialOrders = []

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("name must be at least 2 characters")
      .min(2, "name must be at least 2 characters") 
  })

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [orders, setOrders] = useState(initialOrders)

  const postOrder = newOrder => {
    axios.post("http://localhost:3000/pizza", newOrder)
      .then((res) => {
        setOrders([res.data, ...orders])
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }
  
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/pizza" 
        element={<PizzaForm 
          values={formValues} 
          errors={formErrors}
          // submit={formSubmit}
          // change={inputChange}
          />} />
    </Routes>
  );
};
export default App;
