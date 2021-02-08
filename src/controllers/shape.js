const db = require('../models')
const path = require('path')

const { sendMessage } = require('../tools/tcp')

const all = async (req, res) => {
	let shape = await db.coordinates.create(req.body.data);
	await db.image_shape.create({shape_id:shape.id,ima_id:req.body?.image?.id});
 	let params = { c_1: Number(req.body.data?.c_1),c_2: Number(req.body.data?.c_2),c_3: Number(req.body.data?.c_3), c_4: Number(req.body.data?.c_4), name: req.body.image?.name, action:req.body?.data?.action, extension: req.body?.image?.extension, path: req.body.image?.path }
	let resp = await sendMessage(params)

	resp.float = req.body.image?.path
	return res.json(resp);
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
