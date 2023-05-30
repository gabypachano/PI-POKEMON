import React from 'react'
import "./Landing.css"
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='div1'>
      <h1 className="title">BIENVENIDOS A MI APP DE POKEMON</h1>
      <Link to={"/home"}>
      <button>Home</button>
      </Link>
    </div>
  )
}

export default Landing