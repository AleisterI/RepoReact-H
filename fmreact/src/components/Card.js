import React from 'react'
import img from "./Jotaro.png"

export const Card = () => {
    return (
        <div className='card'>
            <img className='cardimg' src={img} alt="img" />
            <p className='title'>My presentation</p>
            <p className='desc'>My name is Franco Machado, my interest are maths, computing science and videogames.</p>
            <hr/>
            <div className='pillcont'>
                <p className='pill blue'>React</p>
                <p className='pill yellow'>JS</p>
                <p className='pill red'>HTML</p>
                <p className='pill skyblue'>CSS</p>
            </div>
        </div>
    )
}