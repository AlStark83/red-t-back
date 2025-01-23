const { Router } = require("express")
const  getAllArticles  = require("../controllers/articles/getAllArticles.js")
const  getArticleById  = require("../controllers/articles/getArticleById.js")
const  createArticle  = require("../controllers/articles/createArticle.js")
const  updateArticle  = require("../controllers/articles/updateArticle.js")
const  deleteArticle  = require("../controllers/articles/deleteArticle.js")

const articleRouter = Router()

articleRouter
.get("/", getAllArticles)
.get("/:id", getArticleById)
.post("/", createArticle)
.put("/:id", updateArticle)
.delete("/:id", deleteArticle)

module.exports = articleRouter