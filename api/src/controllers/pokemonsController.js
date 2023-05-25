const axios = require("axios");
const { Pokemon, Type } = require('../db')


// README: Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.
// Funcion para traerme los datos de la API, me traigo 50 pokemones

const getPokemonsApi = async () => {
    try {
        const peticionApi = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=50')
        const results = await peticionApi.data.results
        
        const promisesPokemon = results.map(async pokemon => {
            const info = await axios.get(pokemon.url)
            return {
                id: info.data.id,
                name: info.data.name,
                image: info.data.sprites.front_default,
                types: info.data.types.map((t) => t.type.name),
                attack: info.data.stats[1].base_stat
            }
        })
        const getAllPokemons = await Promise.all(promisesPokemon)
        return getAllPokemons
    } catch (error) {
        throw new Error(error.message)
    }
}

// Función para obtener la info de la DB
const getPokemonsDb = async () => {
    return await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
}

// Función para concatenar ----> Con esta función voy a obtener los pokemons que me traigo de la API y también los que son creados y guardados en la base de datos.
const getAllPokemons = async (name) => {
    const pokemonsDb = await getPokemonsDb()
    const pokemonsApi = await getPokemonsApi()
    const allPokemons = pokemonsDb.concat(pokemonsApi)

    let pokebyName
    if(name) {
        pokebyName = allPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()))
        if(pokebyName.length === 0) return 'No se encontró ningún pokemon con ese nombre'
        return pokebyName
    }
    return allPokemons
}


const getPokemonById = async (id) => {
    // const pokemonsInfo = await allPokemons()
    // const pokemonsById = await pokemonsInfo.find(pokemon => pokemon.id == id)
    // if(pokemonsById.length === 0) return 'No se encontró ningún pokemon con ese ID'
    // return pokemonsById

}


// Función para crear un nuevo Pokemon
const createPokemonDb = async () => {
}

module.exports = {
    getPokemonsApi,
    getPokemonsDb,
    getAllPokemons,
    getPokemonById,
    createPokemonDb
}