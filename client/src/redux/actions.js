import axios from "axios";
import {
  GET_ALL_POKEMONS,
  GET_POKEMONS_BY_NAME,
  GET_ALL_TYPES,
  FILTER_BY_TYPE,
  FILTER_BY_ORIGIN,
  SORT_BY_ALPHABETICAL_ORDER,
  SORT_BY_ATTACK,
  GET_POKEMONS_BY_ID,
} from "./types";

export const getAllPokemons = () => {
  let endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      dispatch({ type: GET_ALL_POKEMONS, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getPokemonsByName = (name) => {
  let endpoint = `http://localhost:3001/pokemons?name=${name}`;
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      dispatch({ type: GET_POKEMONS_BY_NAME, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getTypes = () => {
  let endpoint = "http://localhost:3001/types";
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      dispatch({ type: GET_ALL_TYPES, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const createPokemons = (payload) => {
  let endpoint = "http://localhost:3001/pokemons";
  return async () => {
    try {
      const response = await axios.post(endpoint, payload);
      console.log(response);
      alert(response.data.message);
      return response;
    } catch (error) {
      alert("Este pokemon ya existe");
      console.error(error);
    }
  };
};

export const getPokemonsById = (id) => {
  let endpoint = `http://localhost:3001/pokemons/${id}`;
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      dispatch({ type: GET_POKEMONS_BY_ID, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const filterByType = (value) => {
  console.log(value);
  return {
    type: FILTER_BY_TYPE,
    payload: value,
  };
};

export const filterByOrigin = (value) => {
  return {
    type: FILTER_BY_ORIGIN,
    payload: value,
  };
};

export const sortByAlphabetic = (value) => {
  return {
    type: SORT_BY_ALPHABETICAL_ORDER,
    payload: value,
  };
};

export const sortByAttack = (value) => {
  return {
    type: SORT_BY_ATTACK,
    payload: value,
  };
};
