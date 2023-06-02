import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemonsByName } from '../../redux/actions'
import styles from './styles.module.css'

// Del readme: SearchBar: un input de búsqueda para encontrar pokemon por nombre. La búsqueda debe ser exacta, por lo que sólo lo encontrará si se lo busca con su nombre completo.

//! ARREGLAR QUE LA BUSQUEDA SEA EXACTA, Y QUE ARROJE UN ERROR SI EL NOMBRE DEL POKEMON NO COINCIDE


const SearchBar =() => {
  const dispatch = useDispatch()
  const [name, setName] = useState("")

  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getPokemonsByName(name))
    setName("")

  }

  return (
    <>

    <div className={styles.Container}>
      <input type='text' placeholder='Buscar...' name='search' value={name} onChange={(e) => handleInputChange(e)}/>
    </div>
    <div>
      <button type='submit' onClick={(e) => handleSubmit(e)}>Buscar 🔎</button>
    </div>
    </>
  )
}

export default SearchBar