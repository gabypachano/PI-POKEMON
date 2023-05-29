import axios from "axios"
import { GET_ALL_POKEMONS } from "./types"

// export const getAllPokemons = async (dispatch) => {
    
//     try {
//         let endpoint = "http://localhost:3001/pokemons"
//         const response = await axios.get(endpoint).data

//             dispatch({type: GET_ALL_POKEMONS, payload: response})
//             return response.data
//     } catch (error) {
//         console.error(error)
//     }
// }

export const getAllPokemons = () => {
    try {
        return async function (dispatch) {
            let endpoint = "http://localhost:3001/pokemons"
            const response = await axios.get(endpoint)
            dispatch({type: GET_ALL_POKEMONS, payload: response.data})
        }     
    } catch (error) {
        console.error(error)
    }
    
    
   
}