require("../Data/Postdata");
const { posts } = require("../Data/Postdata");

module.exports = {
	getPosts: async (req, res) => {
		try {
			const data = await posts();
			res.send(data);
		} catch (error) {
			console.log(error.message);
		}
	},
};
