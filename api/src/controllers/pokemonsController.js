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

//Aqui hacer el manejo de errores con trhow new error arreglar el condicional como la imagen de prueba y probar el handler y el error igual en la funcion de arriba... porque esta enviando un .send como texto //!IMPORTANTE
const getPokemonById = async (id) => {
    const pokemonsInfo = await getAllPokemons()
    const pokemonsById = await pokemonsInfo.find(pokemon => pokemon.id == id)
    if(pokemonsById.length === 0) return 'No se encontró ningún pokemon con ese ID'
    return pokemonsById
}


// Función para crear un nuevo Pokemon
const createPokemonDb = async (name, image, hp, attack, defense, speed, height, weight) => {
}

// Nombre.
// Imagen.
// Vida.
// Ataque.
// Defensa.
// Velocidad (si tiene).
// Altura (si tiene).
// Peso (si tiene).

//! OJO TENER EN CUENTA
// Botones/Opciones para filtrar por tipo, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemones por orden alfabético y por ataque.
// Paginado: el listado de pokemones se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 12 pokemones por página.

module.exports = {
    getPokemonsApi,
    getPokemonsDb,
    getAllPokemons,
    getPokemonById,
    createPokemonDb
}