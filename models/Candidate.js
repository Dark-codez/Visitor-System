const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
	fname: {
		type: String,
		required: [true, 'FirstName required'],
		lowercase: true,
	},
	lname: {
		type: String,
		required: [true, 'LastName required'],
		lowercase: true,
	},
	dob: {
		type: Date,
		required: [true, 'Date of birth required'],
	},
    gender: {
        type: String,
        required: [true, 'Gender required'],
    },
    origin: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'State of origin required'],
    },
	party_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: [true, 'Password required'],
	},
	election_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: [true, 'Password required'],
	},
    vote_count: {
        type: Number,
        default: 0
    }
});

const Candidate = mongoose.model('candidate',candidateSchema);

module.exports = Candidate;
