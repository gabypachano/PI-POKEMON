import axios from "axios"
import { GET_ALL_POKEMONS } from "./types"

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