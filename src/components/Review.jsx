import React from "react";
import user_image from "../assets/images/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg";

const Review = () => {
    const usernames = [
        "John Doe",
        "Jane Smith",
        "Cool User123",
        "Random Reviewer",
        "Happy Customer",
    ];
    const comments = [
        "Amazing product! Highly recommend.",
        "Not what I expected, but it works.",
        "Five stars! Will buy again.",
        "Terrible experience. Do not recommend.",
        "Decent quality for the price.",
    ];
    const ratings = [5, 4, 5, 2, 5]

    function Card({ username, comment, date, rating }) {
        return (
            <div className="w-60 text-center shadow-[0px_0px_25px_theme('colors.gray.500')]  rounded-md transition-all duration-300 ease-in-out hover:scale-110 flex flex-col  overflow-hidden select" id="review">
                {/* iamge section of review card  */}
                <div className="h-24 py-5 bg-gray-800 relative">
                    <div className="rounded-full w-24 h-24 bg-white mx-auto overflow-hidden absolute left-1/2 top-1/2 -translate-x-1/2 ">
                        <img src={user_image} alt="" />
                    </div>
                </div>
                {/* bottom section for review card  */}
                <div className="group flex-1  px-5 pb-10 pt-16 border border-white">
                    <h2 className="text-xl text-gray-800 font-bold mb-4">{username}</h2>
                    <p className="text-amber-800 mb-3">{comment}</p>
                    <small className="text-slate-400">{date}</small>
                    <div className="text-amber-300 mt-2">
                        {Array.from({ length: rating }, (_, index) => (
                            <i class="fa-solid fa-star"></i>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="bg-white md:p-14 px-5 py-9">
            <div className="mb-28 flex justify-center">
                <h2 className="text-3xl text-slate-80 border-b-2 px-4 py-2 border-rose-500"><i class="fa-solid fa-heart fa-bounce mx-2 text-red-600"></i> from Our Users</h2>
            </div>
            <div className="reviews md:px-10 flex flex-wrap justify-center align-middle gap-20">
                {usernames.map((username, index) => {
                    return (
                        <Card
                            key={index}
                            username={username}
                            comment={comments[index]}
                            date={new Date().toDateString()}
                            rating={ratings[index]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Review;
