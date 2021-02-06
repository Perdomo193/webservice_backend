const db = require('../models')
const net = require('net')
const path = require('path')

const client = new net.Socket();

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

const sendMessage = function (data) {
	return new Promise((resolve, reject) => {
		client.connect(4242,'127.0.0.1', function () {
			data.path = path.join(__dirname,'../../',data.path);
			data.user = '123';
			client.write(JSON.stringify(data));
		});
	
		client.on('data', function(data) {
			resolve(JSON.parse(data));
			client.destroy();
		});
		client.on('error', function(error){
			reject(error);
		})
	});
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
