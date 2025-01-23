const { User } = require("../../db");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
	const { name, email, password } = req.body;
	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		await User.create({ name, email, password: hashedPassword });
		res.status(201).json({ message: "Usuario registrado con éxito" });
	} catch (error) {
		res.status(400).json({ error: "Error al registrar usuario" });
	}
};

module.exports = registerUser;
