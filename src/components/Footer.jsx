import React from 'react'

const Footer = () => {
    return (
        <div className='md:p-14 px-5 py-9 flex flex-col ' id='contact'>
            <div className='text-slate-700 group py-10 px-12 mb-14 mx-auto rounded shadow-[0_0_10px_theme("colors.gray.500")] overflow-hidden flex items-center justify-between gap-24'>
                <div>

                    <h2 className='text-3xl font-bold mb-1'>Vivek Kumar</h2>
                    <p className='text-gray-400'>Software Develper</p>
                </div>
                <div>
                    <div className="phone mb-2">
                        <i className="fa-solid fa-phone mr-3"></i>
                        <span>+91-6204490133</span>
                    </div>
                    <div className="linkedIn mb-2">
                        <i class="fa-brands fa-linkedin mr-3"></i>
                        <a href="https://www.linkedin.com/in/vivek-kumar-b73590202/">LinkedIn/Vivek</a>
                    </div>
                    <div className="github mb-2">
                        <i class="fa-brands fa-github mr-3"></i>
                        <a href="https://github.com/dexterflex">github/vivek</a>
                    </div>
                    <div className="portfolio">
                        <i class="fa-solid fa-briefcase mr-3"></i>
                        <a href="#">Portfolio</a>
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
