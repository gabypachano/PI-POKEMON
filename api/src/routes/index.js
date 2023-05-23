const { Router } = require('express');
const router = Router();
const routesPokemons = require('./routesPokemons')
const routesTypes = require('./routesTypes')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", routesPokemons);

router.use("/types", routesTypes);



module.exports = router;
