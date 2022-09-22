import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Admin.css"

const Admin = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const handlecheck=()=>{
        if(email=="admin@gmail.com"&&password=="masai"){
            alert("your successfull login in ")
          navigate("/Adminpage")
        }else{
            alert("your creditinal a wrong")
        }
    }
  return (
    <div className='body'>
        <h1 className='h1'>Admin Login</h1>
      <div className='form'> 
      <div className='input1'>
      <label>Email:</label> 
      <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholer="email"/>
      </div>
      
      <br/>
      <label>Password:</label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholer="Password"/>
        <br/>
        <button className='button' onClick={handlecheck}>Login</button></div>
    </div>
  )
}

export default Admin