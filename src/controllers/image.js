const db = require('../models')

const save = async (req, res) => {

	await db.image.create({
		name: req.body.title,
		extension: 'jpg',
		path: req.file.path,
	});
	
	return re.status(202).send('successfully!');
};

const del = async (req, res) => {	
	return res.status(404).send('not found');
};

const get = async (req, res) => {
	return res.status(404).send('not found');
};

module.exports = {
	save,
	get,
	del
}
