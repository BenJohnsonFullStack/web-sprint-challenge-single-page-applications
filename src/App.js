import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'
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
    special: ""
  }

  const initialFormErrors = {
    name: "",
    size: ""
  }

  const initialOrders = []

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [orders, setOrders] = useState(initialOrders)

  const postOrder = newOrder => {
    axios.post("http://localhost:3000/pizza", newOrder)
      .then((res) => {
        setOrders(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pizza" element={<PizzaForm />} />
    </Routes>
  );
};
export default App;
