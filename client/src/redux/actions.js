import axios from "axios"
import { GET_ALL_POKEMONS, GET_POKEMONS_BY_NAME, GET_ALL_TYPES } from "./types"

export const getAllPokemons = () => {
    let endpoint = "http://localhost:3001/pokemons"
    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint)
                dispatch({type: GET_ALL_POKEMONS, payload: response.data})
            } catch (error) {
                console.error(error)
            }
        }
}

export const getPokemonsByName = (name) => {
    let endpoint = `http://localhost:3001/pokemons?name=${name}`
    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint)
            dispatch({type: GET_POKEMONS_BY_NAME, payload: response.data})
        } catch (error) {
            console.error(error)
        }

    }
}

export const getTypes = () => {
    let endpoint = "http://localhost:3001/types"
    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint)
            dispatch({type: GET_ALL_TYPES, payload: response.data})
        } catch (error) {
            console.error(error)
        }
    }

}

export const createPokemons = (payload) => {
    let endpoint = "http://localhost:3001/pokemons"
    return async () => {
        try {
            const response = await axios.post(endpoint, payload)
            console.log(response)
            alert("Nuevo pokemon creado")
            return response            
        } catch (error) {
            alert("Este pokemon ya existe")
            console.error(error)
        }
    }
}
