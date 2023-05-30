import React from 'react'
import './Cards.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'

const Cards = () => {

  //Acá voy a crear mi Estado Global, se guarda todo lo que está en el estado allPokemons
  const pokemons = useSelector(state => state.allPokemons)


// Acá haré mi paginado
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonsPerPage, /* setPokemonsPerPage */] = useState(12) // Mi paginado es de 12 pokemons por pagina
  const indexOfLastPokemon = currentPage * pokemonsPerPage // 1 * 12 = 12
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage // 12 - 12 = 0
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon) // Me traigo mi estado global, este estado va a tener todos los perritos 
  
  const pageNumber = [];
  for(let i=1; i <= Math.ceil(pokemons.length/pokemonsPerPage); i++) {
    pageNumber.push(i)
  }

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
    <div className='styles.container'>
      <div className='styles.divCards'>
        {
          currentPokemons?.map((pokemon, index) => (
            <Card 
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            />
          ))
        }
      </div>
      
      <div>
        {
          pageNumber?.map((number, index) => {
            return(
              <button key={index} onClick={() => paginado(number)}>{number}</button>
            )
          })
        }
      </div>

    </div>
    </>
  )
}

export default Cards