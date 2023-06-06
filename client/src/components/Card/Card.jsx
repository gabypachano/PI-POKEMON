import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ id, image, name, types }) => {
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
          <span>TIPOS: </span>
          {types.join(' ')}
        </p>
      </div>
    </div>
  );
};

export default Card;
