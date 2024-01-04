"use client";

import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const [mainTask, setmainTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // inbuilt feature which prevent to reload the webpage on form submit and button click

    setmainTask([...mainTask, { title, description }]);

    settitle("");
    setdescription("");
  };

  const handleDelete = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setmainTask(copyTask)
  }

  let renderTasks = "No Tasks Available";

  if(mainTask.length > 0){
    renderTasks = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5"> 
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-xl font-semibold">{t.title}</h5>
            <h6 className="text-xl">{t.description}</h6>
          </div>
          <button onClick={() => {
            handleDelete(i)
          }}
          className="bg-red-600 text-white font-bold px-6 py-3 rounded">Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-blue-900 text-white font-bold p-5 text-xl text-center">
        Rajvansh's To Do List!
      </h1>

      <form className="flex justify-center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded"
          placeholder="Enter Task Description"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />

        <button className="bg-blue-900 text-white px-4 py-2 m-5 font-bold text-2xl rounded">
          Add Task
        </button>
      </form>
      <hr />

      <div className="bg-slate-200 p-8">
        <ul>{renderTasks}</ul>
      </div>
    </>
  );
};

export default page;
