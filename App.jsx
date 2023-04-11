import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from "./data.js"
import './App.css'

function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
                
            />
        )
    })        
    
            
    return (
        <div className='container'>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

export default App
