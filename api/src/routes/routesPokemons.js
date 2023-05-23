const {Router} = require('express');
const { allPokemonsHandler, pokemonsByIdHandler, createPokemonsHandler } = require('../handlers/pokemonsHandlers');
const router = Router();


router.get('/', allPokemonsHandler)

router.get('/:id', pokemonsByIdHandler)

router.post('/', createPokemonsHandler)

module.exports = router;

