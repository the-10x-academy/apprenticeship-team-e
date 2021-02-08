const mongoose = require("mongoose");

const post_schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	caption: {
		type: String,
		required: true,
	},
	image: {
		// data: Buffer,
		// contentType: String,
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = new mongoose.model("Post", post_schema);
