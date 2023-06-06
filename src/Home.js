import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Welcome to the App</h1>
            <Link to="/pizza">
                <button id="order-pizza">Order Pizza</button>
            </Link>
        </div>
        
    )
}