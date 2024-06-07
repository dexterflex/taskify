import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

// Task function
const Task = () => {
    gsap.registerPlugin(ScrollTrigger);
    // animation
    useGSAP(() => {
        gsap.from(".task-from-left", {
            scrollTrigger: {
                trigger: ".task-from-left",
                start: "top 100%",
                toggleActions: "play none none none ",
            },
            opacity: 0,
            x: "-100%",
            y: '50px',
            scale: 0,
            delay: .3,
            duration: 1.5,
            ease: "Power2.inOut",
        });
    });
    useGSAP(() => {
        gsap.from(".task-from-right", {
            scrollTrigger: {
                trigger: ".task-from-right",
                start: "top 100%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            x: "100%",
            y: '50px',
            scale: 0,
            delay: .3,
            duration: 1.5,
            ease: "Power2.inOut",
        });
    });

    // hooks
    const [allTasks, setAllTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState({
        "index": "",
        "title": "",
        "description": "",
        "start": "",
        "end": "",
    });

    // handlers functions

    // handles the changes in form fields 
    function handleChange(event) {
        let { name, value } = event.target;
        let cpyCurrentTask = { ...currentTask };
        cpyCurrentTask[name] = value;
        setCurrentTask(cpyCurrentTask);
    }

    // handing form submission 
    function handleSubmit(event) {
        event.preventDefault();
        let cpyCurrentTask = { ...currentTask };
        cpyCurrentTask.created = `${new Date()}`

        if (currentTask.index !== "") {
            let index = cpyCurrentTask.index;
            cpyCurrentTask.index = "";

            let cpyAllTasks = [...allTasks];
            cpyAllTasks[index] = cpyCurrentTask;
            setAllTasks(cpyAllTasks);
        }
        else {
            setAllTasks([...allTasks, cpyCurrentTask]);
        }
        resetCurrentTask()
    }

    //  reset current task i.e make the form fields empty
    function resetCurrentTask() {
        setCurrentTask({
            "index": "",
            "title": "",
            "description": "",
            "start": "",
            "end": "",
        })
    }

    // edit the tasks 
    function edit(task, index) {
        let cpyCurrentTask = { ...task };
        cpyCurrentTask.index = index;
        setCurrentTask(cpyCurrentTask);
    }

    // removes element from all tasks 
    function remove(index) {
        let sure = confirm("Are you sure");
        if (sure) {
            let cpyAllTasks = allTasks.splice(1, 1)
            setAllTasks(cpyAllTasks)
        }
        else {
            console.log("something wrong")
        }
    }

    function convertTo12HourFormat(time24) {
        // Split the input string to get hours and minutes
        let [hours, minutes] = time24.split(':');

        // Convert hours to an integer
        hours = parseInt(hours);

        // Determine AM or PM suffix
        let period = hours >= 12 ? 'PM' : 'AM';

        // Convert hours to 12-hour format
        hours = hours % 12 || 12;  // The `|| 12` handles the case when `hours` is 0

        // Return the formatted time
        return `${hours}:${minutes} ${period}`;
    }

    return (
        <div className=" bg-white md:p-14 px-5 py-9 flex flex-col md:flex-row gap-11 " id="todo">
            {/* form  */}
            <div className="task-from-left  p-5 h-96 rounded md:w-1/2  shadow-2xl shadow-black">
                <form onSubmit={handleSubmit}>
                    <h2 className="mb-8 text-3xl">{currentTask.index === "" ? "Add Task" : "Update Task"}</h2>
                    <input
                        type="text"
                        name="title"
                        value={currentTask.title}
                        onChange={handleChange}
                        placeholder="Task-Title"
                        className="bg-slate-200 rounded block w-full mb-4 py-2 px-4 outline-none"
                        required
                    />
                    <textarea
                        name="description"
                        value={currentTask.description}
                        onChange={handleChange}
                        placeholder="Task-Description"
                        className="bg-slate-200 rounded block w-full h-20 mb-4 py-2 px-4 outline-none resize-none"
                        required
                    ></textarea>
                    <div className="flex gap-3 mb-8">
                        <input
                            type="time"
                            name="start"
                            value={currentTask.start}
                            onChange={handleChange}
                            className="bg-slate-400 py-1 px-4 rounded text-white"
                            required
                        />
                        <input
                            type="time"
                            name="end"
                            value={currentTask.end}
                            onChange={handleChange}
                            className="bg-slate-400 py-1 px-4 rounded text-white"
                            required
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="reset" onClick={resetCurrentTask}
                            className="rounded text-black py-2 w-28 bg-white border-2 border-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="rounded text-white py-2 w-28 bg-black border-2 border-black transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>

            {/* all allTasks  */}
            <div className="task-from-right md:w-1/2 shadow-2xl bg-slate-800 shadow-black p-5 rounded flex flex-col gap-5 h-96 overflow-scroll ">
                {allTasks.length == 0 ? (
                    <div className="bg-slate-200 rounded p-3  shadow-inner shadow-black">
                        You are free of Tasks.
                        <br />
                        So, Add little fun in your task. <br /> There is nothing like fun,
                        is there?
                    </div>
                ) : (
                    allTasks.map((task, index) => {
                        return (
                            <div
                                className="bg-slate-200 rounded p-3  shadow-inner shadow-black"
                                key={index}
                            >
                                <div className="flex justify-between items-center">
                                    <h2 className="font-bold text-xl text-black">{task.title}</h2>
                                    <div className="flex gap-2">
                                        <a onClick={() => edit(task, index)} className="text-yellow-500">
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </a>
                                        <a onClick={() => remove(index)} className="text-red-600">
                                            <i className="fa-solid fa-trash"></i>
                                        </a>
                                    </div>
                                </div>
                                <small className="text-gray-500">
                                    Created on : {task.created}
                                </small>
                                <p className="mt-4 text-blue-500">{task.description}</p>
                                <div className="text-gray-500 text-end pt-4 px-2">
                                    <small>
                                        {convertTo12HourFormat(task.start)} - {convertTo12HourFormat(task.end)}
                                    </small>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Task;
