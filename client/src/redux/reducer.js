import React from 'react'
import { GET_ALL_POKEMONS } from './types'

const initialState = {
  pokemons: [],
  types: [],
  pokemonsFilter: [],
  pokemonDetail: {}
}
const rootReducer = (state = initialState, action) => {

    switch(action.type) {
      case GET_ALL_POKEMONS:
        return {
          ...state,
          pokemons: action.payload
        }
        default: 
        return {...state}
    }
}

export default rootReducer