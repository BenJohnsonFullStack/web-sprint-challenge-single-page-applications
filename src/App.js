import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'
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

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pizza" element={<PizzaForm />} />
    </Routes>
  );
};
export default App;
