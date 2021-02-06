const db = require('../models')

const all = async (req, res) => {
	return res.status(202).send('not found');
}
const square = async (req, res) => {
	return res.status(404).send('not found');
}
const triangle = async (req, res) => {
	return res.status(404).send('not found');
}
const pentagone = async (req, res) => {
	return res.status(404).send('not found');
}
module.exports = {
	all,
	square,
	triangle,
	pentagone,
}
