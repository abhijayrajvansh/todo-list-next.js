"use client"

import React, { useState } from "react";

const page = () => {

  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault(); // inbuilt feature which prevent to reload the webpage on form submit and button click
    console.log(title, description)
    settitle("")
    setdescription("")
  }

  return (
    <>
      <h1 className="bg-blue-900 text-white font-bold p-5 text-xl text-center">
        Rajvansh's To Do List!
      </h1>

      <form onSubmit={handleSubmit}>
        <input type="text" 
        className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded" 
        placeholder="Enter Title Here"
        value = {title}
        onChange={e => {
          settitle(e.target.value)
        }}
        />

        <input type="text" className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded" placeholder="Enter Task Description"
        value = {description}
        onChange={e => {
          setdescription(e.target.value)
        }}/>

        <button className="bg-blue-900 text-white px-4 py-2 m-5 font-bold text-2xl rounded">Add Task</button>
      </form>
    </>
  )
};

export default page;
