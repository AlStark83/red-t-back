const { Article } = require("../../db");

const getArticleById = async (req, res) => {
	const article = await Article.findByPk(req.params.id);
	if (article) res.json(article);
	else res.status(404).json({ error: "Artículo no encontrado" });
};

module.exports = getArticleById;