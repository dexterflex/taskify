import React from "react";
import heroImage from "../assets/images/photo-1484480974693-6ca0a78fb36b.avif";
import heroImageSecondary from "../assets/images/premium_photo-1661963783275-dff88a0296f6.avif";
import hello from "../assets/images/waving_hand_24dp_FILL0_wght400_GRAD0_opsz24.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactTyped } from "react-typed";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
    // Create Ref element.
    const el = useRef(null);
    useGSAP(() => {
        gsap.from(".hero-from-left", {
            scrollTrigger: {
                trigger: ".hero-from-left",
                start: "center 100%",
                toggleActions: "play none none none",
            },
            x: '-100%',
            opacity: 0,
            delay: .2,
            duration: 1.5,
            ease: "power2.inOut",
        });
    });

    useGSAP(() => {
        gsap.from(".hero-from-right", {
            scrollTrigger: {
                trigger: ".hero-from-right",
                start: "100px 100%",
                end: 'center top',
                toggleActions: "play none none none",
            },
            x: '100%',
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut",
        });
    });

    return (
        <div className="md:p-14 px-5 py-9 bg-white" id="hero">
            {/* hero-section first portion  */}
            <div className="hero-from-left text-white flex flex-col-reverse md:flex-row items-center justify-center py-24">
                <div className="w-full md:w-1/2 text-left md:pr-10 ">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                        <img src={hello} alt="not found" className="mb-4 w-14"></img>
                        <ReactTyped
                            strings={[
                                "Daily Tasks",
                                "Goal Setting",
                                "Task Scheduling",
                                "Welcome to <span class='text-purple-500'>taskify</span>",
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                        />
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-black">
                        Your Ultimate Task Management Solution
                    </p>

                    <p className="text-lg mb-8 text-gray-500">
                        Stay organized and boost your productivity with our easy-to-use task
                        management app. Whether you're managing daily tasks, planning a
                        project, or keeping track of your goals, Taskify has got you
                        covered.
                    </p>
                    <a
                        href="#"
                        className="px-4 py-2 mb-4 bg-black text-white inline-block animate-bounce"
                    >
                        <button>Get Started</button>
                    </a>
                </div>
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img
                        src={heroImageSecondary}
                        alt="not found"
                        className="w-full h-auto rounded shadow-2xl shadow-black"
                    />
                </div>
            </div>
            {/* hero section second portion  */}
            <div className="hero-from-right text-white flex flex-col md:flex-row  items-center justify-center py-24 pb-0">
                <div className="w-full md:w-1/2 mb-6">
                    <img
                        src={heroImage}
                        alt="not found"
                        className="image w-full h-auto rounded shadow-2xl shadow-black"
                    />
                </div>
                <div className="w-full md:w-1/2 text-left md:pl-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-black ">
                        <span className="text-amber-800 mr-3">
                            <i className="fa-regular fa-rectangle-list "></i>
                        </span>
                        Benefits of Using Todos{" "}
                    </h1>
                    <p className="text-lg mb-4 text-gray-500">
                        <strong>Organization:</strong> Todos help in organizing tasks and activities
                        systematically. By listing tasks, you ensure that nothing is
                        forgotten.
                    </p>
                    <p className="text-lg mb-4 text-gray-500">
                        <strong>Prioritization:</strong> By arranging tasks based on their importance and
                        urgency, you can focus on what needs immediate attention.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
