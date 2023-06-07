const axios = require("axios");
const { Pokemon, Type } = require("../db");

// Funcion para traerme los datos de la API, me traigo 50 pokemones
const getPokemonsApi = async () => {
  try {
    const peticionApi = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=50"
    );
    const results = await peticionApi.data.results;

    const promisesPokemon = results.map(async (pokemon) => {
      const info = await axios.get(pokemon.url);

      return {
        id: info.data.id,
        name: info.data.name,
        image: info.data.sprites.front_default,
        types: info.data.types.map((data) => data.type.name),
        attack: info.data.stats[1].base_stat,
        hp: info.data.stats[0].base_stat,
        defense: info.data.stats[2].base_stat,
        speed: info.data.stats[5].base_stat,
        height: info.data.height,
        weight: info.data.weight,
      };
    });

    const getAllPokemons = await Promise.all(promisesPokemon);
    return getAllPokemons;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función para obtener la info de la DB
const getPokemonsDb = async () => {
  const allPokemonsDb = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
    },
  });

  const mapPokeInfo = allPokemonsDb.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.image,
      types: pokemon.Types.map((poke) => poke.name),
      attack: pokemon.attack,
      hp: pokemon.hp,
      defense: pokemon.defense,
      speed: pokemon.speed,
      height: pokemon.height,
      weight: pokemon.weight,
    };
  });
  return mapPokeInfo;
};

// Función para concatenar ----> Con esta función voy a obtener los pokemons que me traigo de la API y también los que son creados y guardados en la base de datos.
const getAllPokemons = async (name) => {
  const pokemonsDb = await getPokemonsDb();
  const pokemonsApi = await getPokemonsApi();
  const allPokemons = pokemonsDb.concat(pokemonsApi);

  let pokebyName;
  if (name) {
    pokebyName = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );
    if (pokebyName.length) return pokebyName;
    throw new Error("No se encontró ningún pokemon con ese nombre");
  }
  return allPokemons;
};

const getPokemonById = async (id) => {
  const pokemonsInfo = await getAllPokemons();
  const pokemonsById = await pokemonsInfo.filter((pokemon) => pokemon.id == id);
  if (pokemonsById.length) return pokemonsById;
  throw new Error(`No se encontró el pokemon con ID: ${id}`);
};

// Función para crear un nuevo Pokemon y guardarlo en la base de datos

const createPokemonDb = async (
  name,
  image,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  types
) => {
  const [pokemon, created] = await Pokemon.findOrCreate({
    where: { name },
    defaults: {
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    },
  });

  if (!created) throw new Error("Este pokemon ya existe en la DB");

  const typesDb = await Type.findAll({ where: { name: types } });
  pokemon.addType(typesDb);
};

module.exports = {
  getPokemonsApi,
  getPokemonsDb,
  getAllPokemons,
  getPokemonById,
  createPokemonDb,
};
