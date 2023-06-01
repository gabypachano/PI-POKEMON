import React from 'react'
import './Card.css'
import { Link } from "react-router-dom"

const Card = ({id, image, name, types, attack}) => {
  return (
    <div>
      <h3>{name.toUpperCase()}</h3>
      <Link to={`/detail/${id}`}>
        <div>
          <img src={image} alt={name}/>
        </div>
      </Link>
    
      <div>
        <p><span>Types: </span></p>
        {
          <p><span>{types}</span></p>
        }

      </div>
      <div>
        <h3> {attack} </h3>
      </div>
    </div>
  )
}

export default Card