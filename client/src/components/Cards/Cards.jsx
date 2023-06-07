import React from "react";
import { useState } from "react";

import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ pokemons }) => {
  // Acá haré mi paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage /* setPokemonsPerPage */] = useState(12); // Mi paginado es de 12 pokemons por pagina
  const indexOfLastPokemon = currentPage * pokemonsPerPage; // 1 * 12 = 12
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage; // 12 - 12 = 0
  const currentPokemons = pokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(pokemons.length / pokemonsPerPage); i++) {
    pageNumber.push(i);
  }

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.cards}>
          {currentPokemons?.map((pokemon, index) => (
            <Card
              key={index}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types}
            />
          ))}
        </div>

        <div>
          {pageNumber?.map((number, index) => {
            return (
              <button
                key={index}
                onClick={() => paginado(number)}
                className={style.button}
              >
                {number}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
