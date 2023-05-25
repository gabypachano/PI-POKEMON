const { getAllPokemonsTypes } = require("../controllers/typesController")


const allTypesHandler = async (req, res) => {
    try {
        const allPokeTypes = await getAllPokemonsTypes()
        res.status(200).json(allPokeTypes)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    allTypesHandler
}