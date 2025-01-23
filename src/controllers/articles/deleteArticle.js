const { Article } = require("../../db.js");

const deleteArticle = async (req, res) => {
	try {
		const article = await Article.findByPk(req.params.id);
		if (article) {
			await article.destroy();
			res.json({ message: "Artículo eliminado con éxito" });
		} else {
			res.status(404).json({ error: "Artículo no encontrado" });
		}
	} catch (error) {
		res.status(500).json({ error: "Error al eliminar artículo" });
	}
};


module.exports = deleteArticle;