require("../Data/Postdata");
const { posts } = require("../Data/Postdata");

module.exports = {
	getPosts: async (req, res) => {
		const data = await posts();
		res.send(data);
	},
};
