const router = require('express').Router()
const { controllersImage } = require('../controllers')
const multer = require('multer')

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'static/clean_images')
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/')[1])
	}
})

var uppload = multer({ storage: storage });

router.post('/save/:filter', uppload.single('image'), controllersImage.save)
router.post('/delete', controllersImage.del)
router.get('/get', controllersImage.get)

module.exports = router;
