import React from 'react'
import './Cards.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Cards = () => {

  //Acá voy a crear mi Estado Global, se guarda todo lo que está en el estado allPokemons
  const pokemons = useSelector(state => state.allPokemons)







// Acá haré mi paginado
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12) // Mi paginado es de 12 pokemons por pagina
  const indexOfLastPokemon = currentPage * pokemonsPerPage // 1 * 12 = 12
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage // 12 - 12 = 0
  // const currentPokemons = 
  


  return (
    <div>
      

    </div>
  )
}

export default Cards