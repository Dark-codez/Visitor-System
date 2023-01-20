const mongoose = require('mongoose');

const electionSchema = mongoose.Schema({
	title: {
		type: String,
		required: [true, 'title required'],
		lowercase: true,
	},
	position: {
		type: String,
		required: [true, 'position required'],
		lowercase: true
	},
    status: {
        type: String,
        default: "OPEN",
        lowercase: true
    },
    closingdate: {
        type: Date,
        required: [true, "Date Required"],
        lowercase: true
    },
    winner: {
        id: mongoose.Schema.Types.ObjectId,
    }
});

const Election = mongoose.model('election',electionSchema);

module.exports = Election;
