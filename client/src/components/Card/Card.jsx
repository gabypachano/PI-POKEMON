import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ id, image, name, types, attack }) => {
  return (
    <div className="card">
      <h2>{name.toUpperCase()}</h2>
      <Link to={`/detail/${id}`}>
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
      </Link>
      <div>
        <p>
          <span>Types: </span>
          {types}
        </p>
      </div>
      <div>
        <h3> {attack} </h3>
      </div>
    </div>
  );
};

export default Card;
