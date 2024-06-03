import React, { useEffect, useRef, useState } from 'react';
import backgroundMusic from '../assets/audios/background-music-instrumental-207886.mp3'; // Update with your actual path

import logo from '../assets/images/Logo maker project.jpeg'

const Header = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Function to toggle play/pause
    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div>
            {/* nav  */}
            <nav className='py-2 md:px-14 px-5 bg-white sm:flex items-center justify-between shadow '>
                {/* logo  */}
                <img
                    src={logo}
                    alt="not found"
                    className='h-12 mx-auto sm:mx-0 sm:mb-0 mb-5'
                />
                {/* night-day mode  */}
                {/* options  */}
                <div className="options flex items-center justify-center gap-5">
                    {/* night-day mode  */}
                    <span onClick={toggleAudio}
                        className='text-white bg-purple-700  rounded  cursor-pointer h-8 w-8 flex items-center justify-center' >
                        <audio ref={audioRef} src={backgroundMusic} loop />
                        {isPlaying
                            ? <i class="fa-solid fa-pause"></i>
                            : <i class="fa-solid fa-play"></i>}
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
