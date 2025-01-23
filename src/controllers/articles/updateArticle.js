const { Article } = require("../../db");

const updateArticle = async (req, res) => {
	const { name, description, price, stock } = req.body;
	try {
		const article = await Article.findByPk(req.params.id);
		if (article) {
			await article.update({ name, description, price, stock });
			res.json({ message: "Artículo actualizado con éxito" });
		} else {
			res.status(404).json({ error: "Artículo no encontrado" });
		}
	} catch (error) {
		res.status(400).json({ error: "Error al actualizar artículo" });
	}
};

module.exports = updateArticle;