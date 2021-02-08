const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class image_shape extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	};
		image_shape.init({
		ima_id: DataTypes.NUMBER,
		shape_id: DataTypes.NUMBER
	}, {
		sequelize,
		modelName: 'image_shape',
	});
	return image_shape;
};
