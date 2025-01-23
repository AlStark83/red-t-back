const { Article } = require("../../db");

const createArticle = async (req, res) => {
	const { name, description, price, stock } = req.body;
	try {
		await Article.create({ name, description, price, stock });
		res.status(201).json({ message: "Artículo creado con éxito" });
	} catch (error) {
		res.status(400).json({ error: "Error al crear artículo" });
	}
};

module.exports = createArticle;
