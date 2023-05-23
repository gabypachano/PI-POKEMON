const {Router} = require('express');
const router = Router();
// const {} = require() //Aqui voy a importar el handler


router.get('/', (req,res) => {
    res.status(200).send('Ruta get all pokemon OK')
})

// ---> Recibe la info por params
router.get('/:id', (req,res) => {
    const {id} = req.params;
    res.status(200).send(`Usuario con id ${id}`)
})

// ---> Recibe la info por query
router.post('/', (req,res) => {
    res.status(200).send('Creamos el usuario correctamente')
})

module.exports = router;

