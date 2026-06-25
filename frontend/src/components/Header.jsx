import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  const [name, setName] = useState("")
  useEffect(() => {
    const storedName = localStorage.getItem("name")
    setName(storedName)
  }, [])

  const logout = () => {
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    setName("")
  }

  return (
    <div className='HContainer'>
      
      <div className="left">
        <Link to='/'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/signup'>SignUp/Login</Link>
      </div>

      <div className="right">
        {name ? (
          <>
            <span>Hii  {name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <span>Guest</span>
        )}
      </div>

    </div>
  )
}

export default Header