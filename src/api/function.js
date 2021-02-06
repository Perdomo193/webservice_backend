const router = require('express').Router()
const { controllersFunc } = require('../controllers')

router.post('/gray', controllersFunc.gray)
router.post('/canny', controllersFunc.canny)
router.post('/sobbel', controllersFunc.sobbel)

module.exports = router;
