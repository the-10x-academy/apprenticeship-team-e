require("../Data/Postdata");
const { posts } = require("../Data/Postdata");
const path = require("path");
const Post = require("../models/post");

module.exports = {
	getPosts: async (req, res) => {
		try {
			const data = await posts();
			res.send(data);
		} catch (error) {
			console.log(error.message);
		}
	},
	insertPost: (req, res, next) => {
		const imageFile = req.file.filename;
		const imagePath = req.file.path.replace("public", "");
		var obj = {
			author: req.body.author,
			location: req.body.location,
			description: req.body.description,
			filePath: imagePath,
		};
		Post.create(obj, (err, item) => {
			if (err) {
				console.log(err);
			} else {
				// item.save();
				console.log(item);
				res.redirect("http://localhost:3000/");
			}
		});
	},
};
