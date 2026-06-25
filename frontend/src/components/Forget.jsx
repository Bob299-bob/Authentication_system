import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
function Forget() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleReset = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/forgetpass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })

      const data = await res.json()
      alert(data.message)

    } catch (err) {
      console.log(err)
      alert("Server error")
    }
  }

  return (
    <div>
      <Header />

      <div className="auth-container">
        <h2>Forget Password</h2>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="New Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleReset}>
          Reset Password
        </button>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  )
}

export default Forget