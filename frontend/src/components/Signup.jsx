import React, { useState } from 'react'
import './Signup.css'
import Header from './Header';
import { Link } from 'react-router-dom';
function Signup() {
    const [name,setName]=useState("");
    const [password,setPass]=useState("");
    const [email,setEmail]=useState("");
    const handleSubmit= async()=>{
        console.log('Handle')
        try{
            const res=await fetch('http://127.0.0.1:8000/signup',{
                method:'POST',
                headers:{'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    name,email,password
                })
            })
            const data=await res.json();
            alert(data.message);
        }
        catch(e){
            alert('Server error')
        }
    }

  return (
    <div><Header/>
    <div className="auth-container">
      <h2>Signup</h2>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Signup</button>
      <Link to='/login'>Login</Link>
    </div>
    </div>
  )
}

export default Signup