'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class coordinates extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	};
	coordinates.init({
		shape_id: DataTypes.NUMBER,
		c_1: DataTypes.NUMBER,
		c_2: DataTypes.NUMBER,
		c_3: DataTypes.NUMBER,
		c_4: DataTypes.NUMBER
	}, {
		sequelize,
		modelName: 'coordinates',
	});
	return coordinates;
};
