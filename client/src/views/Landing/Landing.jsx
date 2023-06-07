import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <h1 className={style.tittle}>BIENVENIDOS A MI APP DE POKEMON</h1>
      <Link to={"/home"}>
        <button className={style.button}>Home</button>
      </Link>
    </div>
  );
};

export default Landing;
