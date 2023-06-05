import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonsById } from '../../redux/actions'


const Detail = () => {
  let {id} = useParams()
  const dispatch = useDispatch()
  const myPokemon = useSelector((state) => state.pokemonDetail)

  useEffect(() => {
    dispatch(getPokemonsById(id))
  }, [dispatch, id])

  console.log(myPokemon)

  return(
  <>
  <div>
    {
      myPokemon.length>0 ?
      <div>
        <h1>Nombre: {myPokemon[0]?.name.toUpperCase()} </h1>
        <h1>ID: {myPokemon[0]?.id} </h1>
        <h1><img src={myPokemon[0]?.image} alt={myPokemon[0].image} /></h1>
        <h1>Vida: {myPokemon[0].hp} </h1>
        <h1>Ataque: {myPokemon[0]?.attack}</h1>
        <h1>Defensa: {myPokemon[0]?.defense}</h1>
        <h1>Velocidad: {myPokemon[0]?.speed} </h1>
        <h1>Altura: {myPokemon[0]?.height} </h1>
        <h1>Peso: {myPokemon[0]?.weight} </h1>
        <h1>Tipo: {myPokemon[0]?.types} </h1>

      </div> : null
    }
  </div>
  </>
    )
  }

//que se debe renderizar en Detail?
//ID.
// Nombre.
// Imagen.
// Vida.
// Ataque.
// Defensa.
// Velocidad (si tiene).
// Altura (si tiene).
// Peso (si tiene).
// Tipo.

export default Detail