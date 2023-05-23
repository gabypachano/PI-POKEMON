const {Router} = require('express');
const router = Router();
// const {} = require() //Aqui voy a importar el handler

router.get('/', (req, res) => {
res.status(200).send('Esta es mi ruta que se trae a todos los tipos')
})

module.exports = router;