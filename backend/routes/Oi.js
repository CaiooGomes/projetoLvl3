const router = require('express').Router()
const OiController = require('../Controllers/Oi')

router.get('/oi',OiController.initial)
    .get('/',OiController.doc)
module.exports = router;