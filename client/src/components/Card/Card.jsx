import React from 'react'
import './Card.css'
import { Link } from "react-router-dom"

const Card = ({id, image, name, types}) => {
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
          <p><span>{types?.map((type) => type + " ")}</span></p>
        }

      </div>
    </div>
  )
}

export default Card