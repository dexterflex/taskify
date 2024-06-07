import React from 'react'
import Hero from './Hero.jsx'
import Task from './Task.jsx'

const Main = () => {
    return (
        <div>
            <Hero />
            <hr className='border-1 border-gray-400 bg-white  md:mx-10 mx-3 m-28 ' />

            <Task />
        </div>
    )
}

export default Main
