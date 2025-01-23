const { Router } = require("express")
const  registerUserController  = require("../controllers/users/registerUser.js")

const registerUserRouter = Router()

registerUserRouter.post("/", registerUserController)

module.exports = registerUserRouter