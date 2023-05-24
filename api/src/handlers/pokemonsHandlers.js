const { getPokemonsApi } = require('../controllers/pokemonsController')

// ---> Recibe la info por query
const allPokemonsHandler = async (req, res) => {
    try {
        const apiInfo = await getPokemonsApi()
        res.status(200).send(apiInfo)
        
    } catch (error) {
        res.status(400).send({message: 'No se pudieron obtener todos los pokemons', error })
    }

}

// ---> Recibe la info por params
const pokemonsByIdHandler = () => {}

// ---> Recibe la info por body
const createPokemonsHandler = () => {}



module.exports = {
    allPokemonsHandler,
    pokemonsByIdHandler,
    createPokemonsHandler
}