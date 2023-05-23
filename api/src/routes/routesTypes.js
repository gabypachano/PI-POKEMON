const {Router} = require('express');
const { allTypesHandler } = require('../handlers/typesHandlers');
const router = Router();

router.get('/', allTypesHandler)

module.exports = router;