const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
	email: {
		type: String,
        unique: true,
		required: [true, 'Email required'],
		lowercase: true,
	},
	password: {
		type: String,
		required: [true, 'password required'],
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
    StateOfOrigin: {
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

const Voter = mongoose.model('candidate',candidateSchema);

module.exports = Voter;
