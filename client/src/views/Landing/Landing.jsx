import React from 'react'
import "./Landing.css"
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
      <h1>Bienvenidos a mi App de Pokemon</h1>
      <Link to={"/home"}>
      <button>Home</button>
      </Link>
    </div>
  )
}

export default Landing