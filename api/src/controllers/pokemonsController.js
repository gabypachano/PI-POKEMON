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
    const allPokemonsDb = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
        }
    })

    const mapPokeInfo = allPokemonsDb.map(pokemon => {
        return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.image,
            types: pokemon.Types.map(poke => poke.name),
            attack: pokemon.attack,
            hp: pokemon.hp,
            defense: pokemon.defense,
            speed: pokemon.speed,
            height: pokemon.height,
            weight: pokemon.weight
        }
    })

    return mapPokeInfo
}

// Función para concatenar ----> Con esta función voy a obtener los pokemons que me traigo de la API y también los que son creados y guardados en la base de datos.
const getAllPokemons = async (name) => {
    const pokemonsDb = await getPokemonsDb()
    const pokemonsApi = await getPokemonsApi()
    const allPokemons = pokemonsDb.concat(pokemonsApi)

    let pokebyName
    if(name) {
        pokebyName = allPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()))
        if(pokebyName.length) return pokebyName
        throw new Error("No se encontró ningún pokemon con ese nombre")
    }
    return allPokemons
}

const getPokemonById = async (id) => {
    const pokemonsInfo = await getAllPokemons()
    const pokemonsById = await pokemonsInfo.filter(pokemon => pokemon.id == id)
    if(pokemonsById.length) return pokemonsById
    throw new Error(`No se encontró el pokemon con ID: ${id}`)
}

// Función para crear un nuevo Pokemon y guardarlo en la base de datos
// Paso a paso:
// (La función recibe por parámetro) todos los valores que voy a recibir por formulario
// 1. Voy a crear el pokemon con el metodo create or findorcreate
// 2. Voy a buscar los tipos en la base de datos porque desde alli es que el cliente los va a obtener
// 3. Voy a hacer la relacion de lo que recibo por body y los tipos que va a buscar en la DB
// 4. Probar con un JSON si se crea el pokemon y como se crea 
// 5. Muy probablemente debo hacer una funcion para mapear la forma en que me devuelve los tipos de los pokemones)
const createPokemonDb = async (name, image, hp, attack, defense, speed, height, weight, types) => {
    const [pokemon, created] = await Pokemon.findOrCreate({
        where: {name},
        defaults: {
            name,
            image, 
            hp, 
            attack, 
            defense, 
            speed, 
            height, 
            weight
        }
    })

    if(!created) throw new Error("Este pokemon ya existe en la DB")

    const typesDb = await Type.findAll(
        {where: {name: types}
    })

    pokemon.addType(typesDb)

}


// Nombre. **
// Imagen. **
// Vida.   **
// Ataque. **
// Defensa.**
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