import { GET_ALL_POKEMONS, GET_POKEMONS_BY_NAME } from './types'

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


        default: 
        return {...state}
    }
}

export default rootReducer