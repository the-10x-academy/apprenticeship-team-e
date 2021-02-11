
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schema = new Schema({
	filePath: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	description: {
		type: String,
		required: true,
	},
});
const post = new mongoose.model("post", schema);
module.exports = post;
