import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemonsByName } from '../../redux/actions'


// Del readme: SearchBar: un input de búsqueda para encontrar pokemon por nombre. La búsqueda debe ser exacta, por lo que sólo lo encontrará si se lo busca con su nombre completo.

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

  }






  return (
    <>

    <div>
      <input type='text' placeholder='Buscar...' name='search' value={name} onChange={(e) => handleInputChange(e)}/>
      <button type='submit' onClick={(e) => handleSubmit(e)}>Search 🔎</button>
    </div>
    </>
  )
}

export default SearchBar