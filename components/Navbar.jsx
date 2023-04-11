import React from 'react'
import logo from '/src/airbnb-logo.png'
import '/App.css'

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo" />
        </nav>
    )
}