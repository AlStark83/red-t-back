const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	const Article = sequelize.define("Article", {
		name: { type: DataTypes.STRING, allowNull: false },
		description: { type: DataTypes.STRING },
		price: { type: DataTypes.FLOAT, allowNull: false },
		stock: { type: DataTypes.INTEGER, allowNull: false },
	});
};
