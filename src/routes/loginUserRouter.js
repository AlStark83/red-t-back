const { Router } = require("express")
const  loginUserController  = require("../controllers/users/loginUser.js")

const loginUserRouter = Router()

loginUserRouter.post("/", loginUserController)

module.exports = loginUserRouter