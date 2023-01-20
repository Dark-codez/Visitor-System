const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const router = require('./routes/authroutes');
// const {checkUser} = require('./authentication/requireAuth');
const Election = require('./models/Election');
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
// view engine
app.set('view engine', 'ejs');

// database connection
mongoose.connect('mongodb://localhost/votingSystem');

mongoose.connection.once('open',function(){
	console.log('Database connection successful');
	app.listen(3000,(err) => {
		if(err){
			throw Error("Node didn't connect")
		}
		console.log('Node connection succesful')
	});
}).on('error',function(error){
	console.log(error);
});
// routes
app.use(router);