const { getPokemonsApi, getPokemonById, getAllPokemons, createPokemonDb } = require('../controllers/pokemonsController')

// ---> Recibe la info por query
const allPokemonsHandler = async (req, res) => {
    const {name} = req.query
    try {
        if(name) {
            const apiInfo = await getAllPokemons(name)
            return res.status(200).send(apiInfo)
        }
        const apiInfo = await getAllPokemons()
        res.status(200).send(apiInfo)
        
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}

// ---> Recibe la info por params
const pokemonsByIdHandler = async (req, res) => {
    const {id} = req.params
    try {
        const pokemonsId = await getPokemonById(id)
        res.status(200).send(pokemonsId)        
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

// ---> Recibe la info por body
const createPokemonsHandler = async (req,res) => {
    const {name, image, hp, attack, defense, speed, height, weight, types} = req.body
    try {
        const pokemonCreate = await createPokemonDb(name, image, hp, attack, defense, speed, height, weight, types)
        res.status(200).send({message: "Pokemon creado con éxito"})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

module.exports = {
    allPokemonsHandler,
    pokemonsByIdHandler,
    createPokemonsHandler
}