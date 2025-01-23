require("dotenv").config();
const { User } = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const loginUserController = async (req, res) => {
	const { email, password } = req.body;

	try {
    const user = await User.findOne({ where: { email } });
		if (!email || !password) {
			return res.status(401).json({ message: "Missing credentials" });
		}
		if (!user) {
			return res.status(401).json({ message: "Invalid Credentials" });
		}
		const isValidPassword = bcrypt.compareSync(password, user.hashed_password);
    
    if (!isValidPassword) {
			//TODO change message for "Not valid credentials"
			return res.status(401).json({ message: "Invalid password" });
		}
		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
			expiresIn: "1h",
			});
		return res.status(203).json({ message: "Welcome", token });
	} catch (error) {
		return res.status(500).json({ message: "Error loggin user", error });
	}
};

module.exports = loginUserController;