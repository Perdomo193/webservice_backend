const router = require('express').Router()
const { controllersShape } = require('../controllers')

router.post('/all', controllersShape.all)
//router.post('/square', controllersShape.signup)
//router.post('/triangle', controllersShape.signup)
//router.post('/circle', controllersShape.signup)

module.exports = router;
