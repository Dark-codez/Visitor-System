const mongoose = require('mongoose');

const stateSchema = mongoose.Schema({
	name: {
		type: String,
	},
});

const State = mongoose.model('state',stateSchema);

module.exports = State;
