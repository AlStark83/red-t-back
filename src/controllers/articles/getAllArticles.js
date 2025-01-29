const { Article } = require("../../db");

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();

    if (!articles || articles.length === 0) {
      return res.status(404).json({ message: "No hay artículos disponibles." });
    }

    res.status(200).json(articles);
  } catch (error) {
    console.error("Error en getAllArticles:", error);
    res.status(500).json({ message: "Error al obtener los artículos" });
  }
};

module.exports = getAllArticles;
