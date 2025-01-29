require("dotenv").config();
const { User } = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const loginUserController = async (req, res) => {
	
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(401).json({ message: "Missing credentials" });
		}
    const user = await User.findOne({ where: { email } });
		console.log(user.name);
		
		
		if (!user) {
			return res.status(401).json({ message: "Invalid Credentials" });
		}
		const isValidPassword =  bcrypt.compareSync(password, user.password);
    
    if (!isValidPassword) {
			//TODO change message for "Not valid credentials"
			return res.status(401).json({ message: "Invalid password" });
		}
		const token = jwt.sign({name: user.name , id: user.id }, process.env.JWT_SECRET, {
			expiresIn: "1h",
			});
		return res.status(203).json({ message: "Welcome", token });
	} catch (error) {
		console.error("Error interno:", error);
		return res.status(500).json({ message: "Error loggin user", error });
	}
};

module.exports = loginUserController;