import React, { useState } from 'react'
import logo from '../assets/images/Figma-basics.svg'

const Header = () => {
    let [lightMode, setLightMode] = useState(true);

    function handleLightMode() {
        setLightMode(!lightMode);
        if (lightMode) {
            document.body.style.backgroundColor = "rgb(24 3 27)";
            document.body.style.color = "#fff";
        }
        else {
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#000";
        }
    }

    return (
        <div>
            {/* nav  */}
            <nav className='py-3 px-14 bg-slate-100 sm:flex items-center justify-between shadow '>
                {/* logo  */}
                <img
                    src={logo}
                    alt="not found"
                    className='h-10 mb-10 mx-auto sm:mx-0 sm:mb-0'
                />
                {/* night-day mode  */}
                {/* options  */}
                <div className="options flex items-center justify-center gap-5">
                    {/* night-day mode  */}
                    <span
                        className='text-white bg-purple-700 py-1 px-2 rounded  cursor-pointer' >
                        <i className="fa-solid fa-sun"></i>
                    </span>
                    {/* search-bar  */}
                    <form action="" className='flex border border-solid border-purple-700 py-1 px-3 bg-white'>
                        <input
                            type="text"
                            name='search'
                            placeholder='search..'
                            className='w-60 outline-none' />
                        <button
                            className='text-purple-700'>
                            <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
                        </button>
                    </form>
                </div>
            </nav >
        </div >
    )
}

export default Header
