const {Router} = require('express');
const router = Router();
const { allTypesHandler } = require('../handlers/typesHandlers');

router.get('/', allTypesHandler)

module.exports = router;