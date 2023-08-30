import React from 'react'
import img from "./jhinchroma.jpg"

export const Card = () => {
    return (
        <div className='card'>
            <img className='cardimg' src={img} alt="img" />
            <h1>Holas </h1>
        </div>
    )
}