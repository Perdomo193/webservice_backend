const net = require('net')
const path = require('path')

const client = new net.Socket();

const sendMessage = function (data) {
	return new Promise((resolve, reject) => {
		client.connect(4242,'127.0.0.1', function () {
			data.path = path.join(__dirname,'../../',data.path);
			data.user = '123';
			client.write(JSON.stringify(data));

			client.on('data', function(data) {
				resolve(JSON.parse(data));
				client.destroy();
			});

			client.on('error', function(error){
				client.destroy();
				client.unref();
				throw error;
			});
		});
	});
}

module.exports = {
	sendMessage,
}
