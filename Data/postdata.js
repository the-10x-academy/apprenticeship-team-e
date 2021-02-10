const Post = require("models/post");
​
module.exports = {
  posts: async () => {
    try {
      const data = await Post.find({});
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
};