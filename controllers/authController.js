const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Election = require('../models/Election');
const Party = require('../models/Party');
const State = require('../models/State');
const Candidate = require('../models/Candidate');
// FUNCTION TO HANDLE ERRORS
function handleErrors(err){
	let errors = {email: '', data: '', password: ''};
	
	if(err.message.includes('duplicate')){
		errors['data'] = "Manufacturer Exists";
		return errors;
	}
	if(err.message.includes('user validation')){
		Object.values(err.errors).forEach((properties) => {
			errors[properties.path] = properties.message;
		});
	}
	if(err.message.toLowerCase().includes('invalid email')){
		errors['email'] = "Invalid Email"
	}
	if(err.message.toLowerCase().includes('invalid password')){
		errors['password'] = "Invalid password"
	}
	return errors;
}

// FUNCTION TO CREATE JWT
function createToken(id){
	return jwt.sign({id},'secret');
}


// GET REQUESTS
const getHome = function(req,res){
	res.render('./User/Home/index.ejs');
}
const getElections = function(req,res){
	res.render('./User/Elections/elections.ejs');
}
const getLogin = function(req,res){
	res.render('./User/Login/login.ejs');
}
// ADMIN GET REQUESTS
const adminGet = function(req,res){
	res.render('./Admin/Login/login.ejs');
}
const candidate_get = async function(req,res){
	const election = await Election.find({});
	const parties = await Party.find({});
	const states = await State.find({});
	console.log(election,parties);
	res.render('./Admin/candidate/candidate.ejs',{
		election,
		parties,		
		states	
	});
}
const voter_get = function(req,res){
	res.render('./Admin/voter/voter.ejs');
}
const party_get = function(req,res){
	res.render('./Admin/party/party.ejs');
}
const add_elections_get = function(req,res){
	res.render('./Admin/add_elections/election.ejs');
}
const all_elections_get = async function(req,res){
	const elections = await Election.find({});
	res.render('./Admin/all_elections/elections.ejs',{
		elections 
	});
}
// POST REQUESTS
// CREATE NEW ELECTION
const add_election_post = async function(req,res){
	const {title, position,closingdate} = req.body;
	console.log(title,position,closingdate);
	try{
		const user = await Election.create({
			title: title,
			position: position,
			closingdate: new Date(closingdate)
		});
		res.status(201).json({user})

	}catch(err){
		console.log(err);
		res.status(500).json({status: "failed"})
	}
}
const add_party_post = async function(req,res){
	const {name,headquarters,establishmentdate} = req.body;
	try{
		const party = await Party.create({
			name,
			headquarters,
			establishmentdate
		})
		res.status(200).json(party)
	}catch(err){
		res.status(500).json({status: "failed"})
		console.log(err.message);
	}
}
const add_candidate_post = async function(req,res){
	const {election_id,party_id,state,fname,lname,gender,dob} = req.body;
	try{
		const candidate = await Candidate.create({
			fname: fname,
			lname: lname,
			dob: dob,
			gender: gender,
			origin: state,
			party_id: party_id,
			election_id: election_id,
		})
		res.status(200).json(candidate)
	}catch(err){
		console.log(err);
		res.status(500).json({status: 'failed'})
	}
}
module.exports = {
	getHome,
	getElections,
	getLogin,
	adminGet,
	candidate_get,
	voter_get,
	party_get,
	add_elections_get,
	all_elections_get,

	add_election_post,
	add_party_post,
	add_candidate_post
	
	// admin_logout,
	// admin_login_get,

	// // admin_homepage_get,	

	// admin_post,
}

// ADMIN LOGIN
// const admin_login_get = function(req,res){
// 	res.render("./admin/login");
// }
// const admin_logout = function(req,res){
// 	res.cookie('jwt','',{
// 		maxAge: 1
// 	});
// 	res.redirect('/admin');	
// }
// const admin_post = async function(req,res){
// 	const { username, password} = req.body;
// 	try{
// 		const admin = await Admin.login({ username, password });
// 		const token = createToken(admin._id);
// 		res.cookie('jwt',token);
// 		res.status(200).json({
// 			success: true
// 		});
// 	}catch(err){
// 		console.log(err);
// 		const error = handleErrors(err);
// 		res.status(400).json({
// 			errors: error
// 		});
// 	}	
// }

// DELETE REQUESTS