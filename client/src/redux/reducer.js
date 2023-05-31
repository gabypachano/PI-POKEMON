import { CREATE_POKEMONS, GET_ALL_POKEMONS, GET_ALL_TYPES, GET_POKEMONS_BY_NAME } from './types'

const initialState = {
  allPokemons: [],
  pokemons: [],
  types: [],
  // pokemonsFilter: [],
  // pokemonDetail: {}
}
const rootReducer = (state = initialState, action) => {

    switch(action.type) {
      case GET_ALL_POKEMONS:
        return {
          ...state,
          allPokemons: action.payload,
          pokemons: action.payload
        }

      case GET_POKEMONS_BY_NAME:
        return {
          ...state,
          pokemons: action.payload
        }
      
      case GET_ALL_TYPES:
        return {
          ...state,
          types: action.payload
        }
      
      case CREATE_POKEMONS:
        return {
          ...state
        }

        default: 
        return {...state}
    }
}

export default rootReducer