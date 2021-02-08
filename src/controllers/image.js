const db = require('../models')
const { sendMessage } = require('../tools/tcp')

const save = async (req, res) => {
	let data = {
		name: req.file?.filename.split('.')[0],
		extension: req.file?.mimetype.split('/')[1],
		path: req.file?.destination,
	};

	await db.image.create(data);
	data.action = req.params.filter;
	
	let resp = await sendMessage(data);
	resp.float = req.file?.destination;
	return res.json(resp);
}

const saveImage = async function (req, res) {
	let data = {
		name: req.file?.filename.split('.')[0],
		extension: req.file?.mimetype.split('/')[1],
		path: req.file?.destination,
	};

	let database = await db.image.create(data);
	return res.json(database.dataValues);
}

const del = async (req, res) => {	
	return res.status(404).send('not found');
};

const get = async (req, res) => {
	return res.status(404).send('not found');
};

module.exports = {
	save,
	saveImage,
	get,
	del
}
