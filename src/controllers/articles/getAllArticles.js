const { Article } = require("../../db");

const getAllArticles = async (req, res) => {
	const articles = await Article.findAll();
	res.json(articles);
};

module.exports = getAllArticles;