import React from 'react'
import my_photo from '../assets/images/PHOTO.jpeg'
const Footer = () => {
    return (
        <div className='md:p-14 px-5 py-9 flex flex-col ' id='contact'>
            <div className='mb-14 flex md:flex-row flex-col  gap-14'>
                <div className="p-10 flex-1 flex sm:flex-row flex-col  justify-center items-center gap-x-20 gap-y-10 rounded shadow shadow-neutral-600">
                    <div>
                        <h2 className='text-3xl text-purple-500 font-bold sm:text-start text-center'>taskify</h2>
                        <p className='text-gray-400'>Turning To-Dos into Ta-Das</p>
                    </div>
                    <div className='text-slate-800 flex flex-col gap-2'>
                        <a href='#'>Home</a>
                        <a href='#todo'>todo</a>
                        <a href='#review'>reviews</a>
                        <a href='#faq'>FAQs</a>
                        <a href='#contact'>Contact</a>
                    </div>

                </div>
                <div className="group hover:bg-slate-700 p-10 flex-1 flex sm:flex-row flex-col justify-center gap-x-20 gap-y-10 items-center rounded shadow shadow-neutral-600">
                    <div className='sm:mb-0 mb-8'>
                        <img src={my_photo} alt="vivek_image" className='group group-hover:border group-hover:border:white group-hover:scale-110 duration-300 ease-in-out w-24 mb-4 rounded mx-auto sm:mx-0' />
                        <h2 className='text-3xl font-bold'>Vivek Kumar</h2>
                        <p className='text-gray-400'>Software Developer</p>
                    </div>
                    <div className='group group-hover:text-white text-slate-800 flex flex-col gap-2'>
                        <a href='#'><i class="fa-solid fa-phone mr-3 text-green-500"></i>+91-6204490133</a>
                        <a href='#'><i class="fa-solid fa-location-dot mr-3 text-red-600"></i>New Delhi, India</a>
                        <a href='#'><i class="fa-brands fa-linkedin mr-3 text-blue-600"></i>linkedIn/vivekKumar</a>
                        <a href='#'><i class="fa-brands fa-github mr-3"></i>github/vivekKumar</a>
                        <a href='#'><i class="fa-solid fa-briefcase mr-3 text-amber-800"></i>portfolio/vivekKumar</a>
                    </div>
                </div>
            </div>
            <p className='bg-slate-700 text-white p-3 text-center rounded'>
                {new Date().getFullYear()} <a href="https://github.com/dexterflex/taskify" className='font-bold text-purple-500'>taskify</a>. All rights reserved.
            </p>
        </div >
    )
}

export default Footer
