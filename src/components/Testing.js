import React from "react";

const Testing = () => {
  return (
    <div className="from-right md:w-1/2 shadow-2xl bg-cyan-700 shadow-black p-5 rounded flex flex-col gap-5 h-96 overflow-scroll ">
      {allTasks.length == 0 ? (
        <div className="bg-slate-200 rounded p-3  shadow-inner shadow-black">
          You are free of allTasks.
          <br />
          So, Add little fun in your task. <br /> There is nothing like fun, is
          there?
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
                  <a onClick={() => edit(index)} className="text-yellow-500">
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
              <p className="mt-4 text-blue-500">{task.desc}</p>
              <div className="text-gray-500 text-end pt-4 px-2">
                <small>
                  {task.start} - {task.end}
                </small>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Testing;
