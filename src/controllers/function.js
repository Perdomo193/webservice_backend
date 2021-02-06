const db = require('../models')

const gray = async (req, res) => {
	return res.status(404).send('not found');
}
const canny = async (req, res) => {
	return res.status(404).send('not found');
}
const sobbel = async (req, res) => {
	return res.status(404).send('not found');
}
module.exports = {
	gray,
	canny,
	sobbel
}
