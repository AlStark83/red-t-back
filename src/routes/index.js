const { Router } = require("express");
const articlesRouter = require("./articlesRouter.js");
const loginUserRouter = require("./loginUserRouter.js");
const registerUserRouter = require("./registerUserRouter.js");

const mainRouter = Router();

mainRouter
.use("/articles", articlesRouter)
.use("/login", loginUserRouter)
.use("/register", registerUserRouter)


module.exports = mainRouter;