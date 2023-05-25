const { getPokemonsApi, getPokemonById, getAllPokemons } = require('../controllers/pokemonsController')

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
        res.status(400).json({error: error.message})
    }
}

// ---> Recibe la info por params
const pokemonsByIdHandler = async (req, res) => {
    // try {
    //     const {id} = req.params
    //     const pokemonsId = getPokemonById(id)
    //     res.status(200).send(pokemonsId)        
    // } catch (error) {
    //     res.status(400).send({message: `No se encontro el pokemon con id: ${id}`})
    // }
}

// ---> Recibe la info por body
const createPokemonsHandler = () => {}



module.exports = {
    allPokemonsHandler,
    pokemonsByIdHandler,
    createPokemonsHandler
}