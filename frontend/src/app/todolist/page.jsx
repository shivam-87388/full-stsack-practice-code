'use client'
import React from "react";
import { useState } from "react";
import { IconTrash } from "@tabler/icons-react";
import axios from 'axios';








const todolist = () => {
//   const response = await axios.get(
//   "http://localhost:5000/todo/"
// );
// console.log(response);

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handelChange = (e) => {
    setTask(e.target.value);
    console.log(e.target.value);
  };

  const handelAdd = async() => {
    if (task.trim() === "") 
      return;
    const response = await axios.post("http://localhost:5000/todo/add",{addtodo:task});
console.log(response);

    setTasks([...tasks, task]);

    setTask("");

    console.log([...tasks, task]);
  };
  const handelDelete = async(id) => {
    const response = await axios.delete(`http://localhost:5000/todo/delete/${id}`);
console.log(response);
    const tasklist = [...tasks];
    tasklist.splice(id, 1);
    setTasks(tasklist);
  };
  

  return (
    <div>
      <div className=" flex items-center justify-center p-6 flex-col w-full">
        <h1 className="text-center text-black text-5xl font-bold font-['Inria_Serif'] p-2">
          To Do list
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-2">
          <input
            value={task}
            onChange={handelChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handelAdd();
              }
            }}
            type="text"
            placeholder="enter task"
            className="md:w-lg w-64 h-14 px-4.5 text-2xl rounded-lg border-2 border-black"
          ></input>
          <button onClick={handelAdd} className="flex items-center justify-center px-6 h-14 text-nowrap cursor-pointer hover:ring-2 ring-black bg-red-800 rounded-lg text-white text-xl md:text-2xl border-2 border-white font-bold font-['Inria_Serif']">
            Add task
          </button>
        </div>
        {tasks.length > 0 && (
          <div className="flex flex-col justify-center items-center gap-2 rounded-lg bg-green-900 w-3/5 p-2 mt-2">
            {tasks.map((element, index) => {
              return (
                <p
                  key={index}
                  className="flex justify-between items-center w-full border-white border-2 text-white rounded-md px-2.5 py-2 text-2xl"
                >
                  {element}
                  <button
                    onClick={() => handelDelete(index)}
                    className="p-2 rounded-md bg-cyan-500 hover:bg-cyan-600 hover:cursor-pointer"
                  >
                    <IconTrash stroke={2} size={25} />
                  </button>
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default todolist;
