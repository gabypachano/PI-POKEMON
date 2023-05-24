const {Router} = require('express');
const router = Router();
const { allPokemonsHandler, pokemonsByIdHandler, createPokemonsHandler } = require('../handlers/pokemonsHandlers');


router.get('/', allPokemonsHandler)

router.get('/:id', pokemonsByIdHandler)

router.post('/', createPokemonsHandler)

module.exports = router;

