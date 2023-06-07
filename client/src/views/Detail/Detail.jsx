import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsById } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const myPokemon = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getPokemonsById(id));
  }, [dispatch, id]);

  return (
    <>
      <div className={style.container}>
        <Link to="/home">
          <button className={style.button}>Home</button>
        </Link>
        <div className={style.card}>
          <h2>{myPokemon[0]?.name.toUpperCase()}</h2>
          {myPokemon.length > 0 && (
            <img src={myPokemon[0]?.image} alt={myPokemon[0]?.name} />
          )}
          <p>
            <span>ID: </span>
            {myPokemon[0]?.id}
          </p>
          <p>
            <span>Tipos: </span>
            {myPokemon[0]?.types.join(" ")}
          </p>
          <p>
            <span>Vida: </span>
            {myPokemon[0]?.hp}
          </p>
          <p>
            <span>Ataque: </span>
            {myPokemon[0]?.attack}
          </p>
          <p>
            <span>Defensa: </span>
            {myPokemon[0]?.defense}
          </p>
          <p>
            <span>Velocidad: </span>
            {myPokemon[0]?.speed}
          </p>
          <p>
            <span>Altura: </span>
            {myPokemon[0]?.height}
          </p>
          <p>
            <span>Peso: </span>
            {myPokemon[0]?.weight}
          </p>
        </div>
      </div>
    </>
  );
};

export default Detail;
