const express = require('express');
const app = express(); 
app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser')

if(process.env.HOST_DB) {
	var config = require('./config-exemple')
} else {
	var config = require('./config')
}

const mysql = require('promise-mysql');

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(cors());

// ici nos routes à récupérer
// const authRoutes = require('./routes/authRoutes');

const host = config.db.host;
const database = config.db.database;
const user = config.db.user;
const password = config.db.password;
//const port = config.db.port;

mysql.createConnection({
	host: host,
	database: database,
	user: user,
	password: password
}).then((db) => {
    console.log('connecté bdd');
	setInterval(async function () {
		let res = await db.query('SELECT 1');
	}, 10000);
	
	app.get('/', (req, res, next)=>{
		res.json({msg: 'Welcome to your api PRISMA TRANSPORT TNS !', status: 200})
	})
	
	
    //utilisation de nos routes
	// truckRoutes(app, db)
	
	
}) 

const PORT = process.env.PORT || 9500;

app.listen(PORT, ()=>{
	console.log('listening port: '+PORT);

}) 