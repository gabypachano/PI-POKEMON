import axios from "axios"
import { GET_ALL_POKEMONS } from "./types"

export const getAllPokemons = async (dispatch) => {
    try {
        let endpoint = "http://localhost:3001/pokemons"
        const response = await axios.get(endpoint)
        dispatch({type: GET_ALL_POKEMONS, payload: response.data})
    } catch (error) {
        console.error(error)
    }
}

