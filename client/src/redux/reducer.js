import {
  CREATE_POKEMONS,
  FILTER_BY_ORIGIN,
  FILTER_BY_TYPE,
  GET_ALL_POKEMONS,
  GET_ALL_TYPES,
  GET_POKEMONS_BY_ID,
  GET_POKEMONS_BY_NAME,
  SORT_BY_ALPHABETICAL_ORDER,
  SORT_BY_ATTACK,
} from "./types";

const initialState = {
  allPokemons: [],
  pokemonsFilter: [],
  types: [],
  pokemonDetail: {},
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        pokemonsFilter: action.payload,
      };

    case GET_POKEMONS_BY_NAME:
      return {
        ...state,
        pokemonsFilter: action.payload,
      };

    case GET_ALL_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case CREATE_POKEMONS:
      return {
        ...state,
      };

    case GET_POKEMONS_BY_ID:
      return {
        ...state,
        pokemonDetail: action.payload,
      };

    case FILTER_BY_TYPE:
      let pokemonsTypeFiltered;
      if (action.payload === "all") {
        pokemonsTypeFiltered = state.allPokemons;
      } else {
        pokemonsTypeFiltered = state.allPokemons.filter((poke) =>
          poke.types.includes(action.payload)
        );
      }
      return {
        ...state,
        pokemonsFilter: pokemonsTypeFiltered,
      };

    case FILTER_BY_ORIGIN:
      const regexUUID =
        /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
      if (action.payload === "all") {
        return {
          ...state,
          pokemonsFilter: state.allPokemons,
        };
      }

      if (action.payload === "db") {
        let pokemonsFilterDb = state.allPokemons.filter((pokemon) =>
          regexUUID.test(pokemon.id)
        );
        return {
          ...state,
          pokemonsFilter: pokemonsFilterDb,
        };
      }

      if (action.payload === "api") {
        let pokemonsFilterApi = state.allPokemons.filter(
          (pokemon) => !regexUUID.test(pokemon.id)
        );
        return {
          ...state,
          pokemonsFilter: pokemonsFilterApi,
        };
      }

    case SORT_BY_ALPHABETICAL_ORDER:
      let orderAlphabetic = [...state.pokemonsFilter];

      if (action.payload === "asc") {
        orderAlphabetic.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          return 1;
        });
      }

      if (action.payload === "desc") {
        orderAlphabetic.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          return 1;
        });
      }

      return {
        ...state,
        pokemonsFilter: orderAlphabetic,
      };

    case SORT_BY_ATTACK:
      let orderByAttack = [...state.pokemonsFilter];

      if (action.payload === "min") {
        orderByAttack.sort((a, b) => Number(a.attack) - Number(b.attack));
      }

      if (action.payload === "max") {
        orderByAttack.sort((a, b) => Number(b.attack) - Number(a.attack));
      }

      return {
        ...state,
        pokemonsFilter: orderByAttack,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
