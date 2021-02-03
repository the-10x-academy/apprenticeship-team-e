const express = require("express");
const { getPosts } = require("../Service/posts");
const router = express.Router();
require("../Service/posts");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/posts", getPosts);

module.exports = router;
