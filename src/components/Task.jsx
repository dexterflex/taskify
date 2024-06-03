import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Task = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from('.from-left', {
            scrollTrigger: {
                trigger: '.form',
                start: 'center 80%',
                toggleActions: "play none none none",
            },
            scale: 0,
            opacity: 0,
            x: '-50%',
            duration: .8,
            ease: 'Power2.inOut',
        })
    })
    useGSAP(() => {
        gsap.from('.from-right', {
            scrollTrigger: {
                trigger: '.form',
                start: 'top 80%',
                end: 'top top',
                toggleActions: "play none none none",
            },
            scale: 0,
            opacity: 0,
            x: '50%',
            duration: .8,
            ease: 'Power2.inOut',
        })
    })

    let [tasks, addTask] = useState([{
        "id": 1,
        "title": "Set up the initial state",
        "desc": "Initialize the state for each form input.",
        "start": "03:45 PM",
        "end": "03:45 PM",
        "created": "Mon Jun 03 2024 04:51:53 GMT+0530"
    }]);

    // temporary task 
    let tempTask = {
        "id": "",
        "title": "",
        "desc": "",
        "start": "",
        "end": "",
        "created": ""
    }
    function handleCurrTask(title, desc, start, end) {
        tempTask.id = tasks.length + 1;
        if (title) {
            tempTask.title = title;
        }
        if (desc) {
            tempTask.desc = desc;
        }
        if (start) {
            tempTask.start = start;
        }
        if (end) {
            tempTask.end = end;
        }
    }
    function handleAddTask(event) {
        event.preventDefault()
        let date = new Date();
        let created = date.toLocaleDateString() + date.toLocaleTimeString()
        tempTask.created = created;
        if (tempTask.id && tempTask.title && tempTask.desc && tempTask.start && tempTask.end) {
            let currTask = [...tasks]
            currTask.push(tempTask);
            addTask(currTask);
            tempTask = {
                "id": "",
                "title": "",
                "desc": "",
                "start": "",
                "end": "",
                "created": ""
            }
        }
    }
    function Form() {
        return (
            <form onSubmit={(event) => handleAddTask(event)} className='form shadow-2xl shadow-black p-5 h-96 rounded'>
                <h2 className='mb-8 text-3xl'>Add Task</h2>
                <input type="text" name="task" id="task" placeholder='Task-Title' onChange={(e) => handleCurrTask(e.target.value, null, null, null)} required className='bg-slate-200 rounded block w-full mb-4 py-2 px-4 outline-none' />
                <textarea name="task-desc" id="" cols="30" rows="10" placeholder='Task-Description' onChange={(e) => handleCurrTask(null, e.target.value, null, null)} required className='bg-slate-200 rounded block w-full h-20 mb-4 py-2 px-4 outline-none resize-none'></textarea>
                <div className='flex gap-3 mb-8'>
                    <input type="time" name="start-time" id="start-time" onChange={(e) => handleCurrTask(null, null, e.target.value, null)} required className='bg-slate-400 py-1 px-4 rounded' />
                    <input type="time" name="end-time" id="end-time" onChange={(e) => handleCurrTask(null, null, null, e.target.value)} required className='bg-slate-400 py-1 px-4 rounded' />
                </div>
                <div className='flex justify-end gap-2'>
                    <button type='reset' className='rounded text-black py-2 w-28 bg-white border-2 border-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white'>Reset</button>
                    <button type='submit' className='rounded text-white py-2 w-28 bg-black border-2 border-black transition-all duration-300 ease-in-out hover:bg-white hover:text-black'>Add</button>
                </div>
            </form>
        )
    }

    return (
        <div className=' bg-white md:p-14 px-5 py-9 flex flex-col md:flex-row gap-10'>
            <div className='from-left md:w-1/2'>
                <Form />
            </div>
            {/* all tasks  */}
            <div className='from-right md:w-1/2 shadow-2xl shadow-black p-5 rounded flex flex-col gap-5 h-96 overflow-scroll'>
                {
                    tasks.map(task => {
                        return (
                            <div className='bg-slate-200 rounded p-3' key={task.id}>
                                <div className='flex justify-between items-center'>
                                    <h2 className='font-bold text-xl text-black'>{task.title}</h2>
                                    <div className='flex gap-2'>
                                        <a href="" className='text-yellow-700'><i className="fa-regular fa-pen-to-square"></i></a>
                                        <a href="" className='text-red-600'><i className="fa-solid fa-trash"></i></a>
                                    </div>
                                </div>
                                <small className='text-gray-500'>Created on : {task.created}</small>
                                <p className='mt-4 text-blue-500'>{task.desc}</p>
                                <div className='text-gray-500 text-end'>
                                    <small>{task.start} - {task.end}</small>
                                </div>
                            </div >
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Task

