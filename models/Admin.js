const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
	username: {
		type: String,
		required: [true, 'Email required'],
		unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: [true, 'Password required'],
		lowercase: true
	},
});

adminSchema.statics.login = async function(options){
	const admin = await this.findOne({username: options.username});
	if(admin){
		const auth = admin.password === options.password;
		if(auth){
			return admin;
		}else{
			throw Error("Invalid Password");
		}
	}else{
		throw Error("Invalid Email");
	}
}
const Admin = mongoose.model('admin',adminSchema);

module.exports = Admin;
