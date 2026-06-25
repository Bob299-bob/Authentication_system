import React, { useState } from 'react'
import Header from './Header'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=async ()=>{
        try{
            const res=await fetch('http://127.0.0.1:8000/login',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    email,password
                })
            })
            const data = await res.json()

            if (data.message === "login success") {
                localStorage.setItem("name", data.name)
                localStorage.setItem("email", data.email)

                alert(`Welcome ${data.name}`)
            }
            else {
                alert(data.message)
            }
        }
        catch{
            alert('Server error')
        }
    }
  return (
   <div><Header/>
    <div className="auth-container">
      <h2>Login</h2>
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

      <button onClick={handleSubmit}>Login</button>
      <Link to='/forgetpass'>Forget Password</Link>
    </div>
    </div>
  )
}

export default Login