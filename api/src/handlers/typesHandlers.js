const { getAllPokemonsTypes } = require("../controllers/typesController")


const allTypesHandler = async (req, res) => {
    try {
        const all = await getAllPokemonsTypes()
        res.status(200).json(all)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    allTypesHandler
}