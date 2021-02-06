const router = require('express').Router()
const { controllersImage } = require('../controllers')
const multer = require('multer')

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'static/clean_images')
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now())
	}
})

var uppload = multer({ storage: storage });


router.post('/save', uppload.single('image'), controllersImage.save)
router.post('/delete', controllersImage.del)
router.get('/get', controllersImage.get)

module.exports = router;
