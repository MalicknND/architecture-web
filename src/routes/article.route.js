const express = require("express");
const router = express.Router();

const articleController = require("../controllers/article.controller");

router.get("/", articleController.getArticles);

module.exports = router;
