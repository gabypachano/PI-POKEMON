const axios = require("axios")
const { Type } = require('../db');


const getAllPokemonsTypes = async () => {
// Declaramos un array vacio para guardar nuestros tipos de pokemons
let allTypes = [];
// Vamos a hacer un llamado a la API para traernos todos los tipos de pokemons
const infoApi = await axios.get('https://pokeapi.co/api/v2/type')
const resultApi = await infoApi.data.results

let allPokemonsTypes = resultApi.map(pokemon => allTypes.push(pokemon.name))

// Para guardar los tipos de pokemon en la DB lo haremos con el método de sequalize findOrCreate por si ya existe este tipo en la base de datos, asi no se repiten los tipos
await Promise.all(allTypes.map(type => {
    Type.findOrCreate({
        where: {name: type}
    })
}))

// Finalmente, obtenemos todos los types de la DB y los retornamos
const allTypesDb = await Type.findAll()
return allTypesDb
}


module.exports = {
    getAllPokemonsTypes  
} 