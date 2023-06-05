import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonsByName } from '../../redux/actions'
import style from './SearchBar.module.css'

// Del readme: SearchBar: un input de búsqueda para encontrar pokemon por nombre. La búsqueda debe ser exacta, por lo que sólo lo encontrará si se lo busca con su nombre completo.

const SearchBar =() => {
  const pokeName = useSelector((state) => state.allPokemons)
  const dispatch = useDispatch()
  const [name, setName] = useState("")

  const handleInputChange = (e) => {
    setName(e.target.value)
    console.log('Estoy consologeando name', name)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchName = pokeName.map(pokemon => pokemon.name.toLowerCase())
    console.log('Estoy consologueando searchname', searchName)
    if(searchName.includes(name.toLowerCase())) {
      dispatch(getPokemonsByName(name))
    } else {
      alert("El nombre del pokemon no coincide")
    }
    setName("")
  }

  return (
    <>
    <div className={style.container}>
      <input 
      type='text' 
      placeholder='Buscar...' 
      name='search' value={name} 
      onChange={(e) => handleInputChange(e)}
      />  
      <button 
      type='submit' 
      onClick={(e) => handleSubmit(e)}>
        Buscar 🔎
      </button>
    </div>
    </>
  )
}

export default SearchBar