import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, image, name, types }) => {
  return (
    <div className={style.card}>
      <h2>{name.toUpperCase()}</h2>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <div>
        <p>
          <span>TIPOS:</span>
          {types.join(" ")}
        </p>
      </div>
    </div>
  );
};

export default Card;
