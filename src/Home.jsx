import React from "react";
import {useState} from "react"

function Home({data,handleSubmit}) {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
console.log(data)
function submit(e){
e.preventDefault();
handleSubmit(email,password);
setEmail("");
setPassword("");
}

  return (
    <div className="flex justify-center items-center h-100 w-screen mt-20 ">
      <form onSubmit={submit} className="w-[400px] h-80 rounded-md shadow-lg bg-blue-300 text-white p-3">
        <h1 className="text-center font-bold text-2xl text-red-400">LOGIN FORM</h1>
        <div className="flex flex-col justify-center">
          <label className="font-bold mb-2 " htmlFor="email">EMAIL</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-white text-black outline-none focus:ring-2 focus:ring-green-200 p-2 rounded-md" type="email" id="email"/>
        </div>
        <div className="flex flex-col">
          <label className="font-bold mb-2 " htmlFor="pwd">PASSWORD</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} className="bg-white text-black outline-none focus:ring-2 focus:ring-green-200 p-2 rounded-md" type="password" id="pwd" />
        </div>
        <button type="submit" className="bg-green-300 p-2 text-blue-800 hover:cursor-pointer font-bold rounded mt-4 w-50 inline-block">LOGIN</button>
      </form>
    </div>
  );
}

export default Home;
