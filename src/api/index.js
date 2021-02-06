const router = require('express').Router();
const shapeRoutes = require('./shape.js');
const functRoutes = require('./function.js');
const imageRoutes = require('./image.js');

router.use('/shape',shapeRoutes);
router.use('/function',functRoutes);
router.use('/image',imageRoutes);

module.exports = router;
