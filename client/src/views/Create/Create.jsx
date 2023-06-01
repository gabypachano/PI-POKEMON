import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPokemons, getTypes } from '../../redux/actions';

// Este formulario debe ser controlado completamente con JavaScritp. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

// Nombre.
// Imagen.
// Vida.
// Ataque.
// Defensa.
// Velocidad (si tiene).
// Altura (si tiene).
// Peso (si tiene).
// Posibilidad de seleccionar/agregar varios tipos en simultáneo.
// Botón para crear el nuevo pokemon.



const Create = () => {
  const dispatch = useDispatch()
  const types = useSelector((state) => state.types)
  
  const [input, setInput] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: []
  })

  const initialState = {
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: []
  }

  const [selectedTypes, setSelectedTypes] = useState([])

  const handleInputChange = (e) => {
    setInput({
      ...input, [e.target.name]: e.target.value
    })
  }

  const handleTypesChange = (e) => {
    if(![...selectedTypes].includes(e.target.value)) {
      setSelectedTypes(current => [...current, e.target.value])
    }
  }

  const removeTypes = (types) => {
    let data = [...selectedTypes].filter(typ => typ !== types)
    setSelectedTypes(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInput({
      ...input, types: input.types.push(...selectedTypes)
    })
    dispatch(createPokemons(input))
    setInput(initialState)
    setSelectedTypes([])
    alert('Formulario enviado con exito!')
  }

// Cada vez que se monte el componente vamos a hacer un useEffect para que se traiga los tipos de pokemons

useEffect(() => {
  dispatch(getTypes())
}, [dispatch])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre: </label>
          <input
          type="text"
          name="name"
          required
          value={input.name}
          placeholder='Escribe un nombre...'
          onChange={handleInputChange} />
        </div>

        <div>
          <label>Imagen: </label>
          <input 
          type="text"
          name="image"
          required
          value={input.image}
          placeholder='La URL debe ser http, https'
          onChange={(e) => handleInputChange(e)} />
        </div>

        <div>
          <label>Vida: </label>
          <input 
          type="number"
          name="hp"
          required
          value={input.hp}
          placeholder='Escribe un valor'
          onChange={(e) => handleInputChange(e)} />
        </div>

        <div>
          <label>Ataque: </label>
          <input 
          type="number"
          name="attack"
          required
          value={input.attack}
          placeholder='Escribe un valor'
          onChange={(e) => handleInputChange(e)} />
        </div>

        <div>
          <label>Defensa: </label>
          <input 
          type="number"
          name="defense"
          required
          value={input.defense}
          placeholder='Escribe un valor'
          onChange={(e) => handleInputChange(e)} />
        </div>

        <div>
          <label>Velocidad: </label>
          <input 
          type="number"
          name="speed"
          value={input.speed}
          placeholder='Escribe un valor'
          onChange={(e) => handleInputChange(e)} />
        </div>

        <div>
          <label>Altura: </label>
          <input 
          type="number"
          name="height"
          value={input.height}
          placeholder='Escribe un valor'
          onChange={(e) => handleInputChange(e)} />
        </div>

        <div>
          <label>Peso: </label>
          <input 
          type="number"
          name="weight"
          value={input.weight}
          placeholder='Escribe un valor'
          onChange={(e) => handleInputChange(e)} />
        </div>

        <div>
          {
            selectedTypes?.map(types => {
              return (
                <span key={types}>
                  {types}
                  <button onClick={() => removeTypes(types)}>X</button>
                </span>
              )
            })
          }
        </div>

        <div>
          <select name="types" onChange={handleTypesChange}>
            <option>Types</option>
            {
              types?.map(type => {
                return (
                  <option key={type.id} value={type.name} >
                    {type.name}
                  </option>
                )
              })
            }

          </select>
        </div>

        <button type="submit">ENVIAR</button>
      </form>
    </div>
  )
}

export default Create