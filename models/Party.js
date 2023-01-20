const mongoose = require('mongoose');

const partySchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Email required'],
		unique: true,
		lowercase: true,
	},
	headquarters: {
		type: String,
		lowercase: true
	},
    establishmentdate: {
        type: Date
    }
});

const Party = mongoose.model('party',partySchema);

module.exports = Party;
