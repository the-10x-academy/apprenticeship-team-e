const express = require("express");
const { getPosts } = require("../Service/posts");
const { insertPost } = require("../Service/posts");
const router = express.Router();
require("../mongo");
require("../Service/posts");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + "-" + Date.now() + ".jpg");
		// cb(null, Date.now() + file.originalname);
	},
});

const upload = multer({ storage: storage });

router.get("/posts", getPosts);

router.post("/posts", upload.single("image"), insertPost);

module.exports = router;
