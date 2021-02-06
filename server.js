const express = require('express');
const app = express();
const apiRouter = require('./src/api');
const path = require('path');
const env = process.env.NODE_ENV || 'development';

app.use('/static',express.static(path.join(__dirname, 'static')));

const bodyParser = require('body-parser');
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.get('/', function(req, res) {
//	res.render('index.html');
//});

app.use('/api', apiRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

module.exports = app;

