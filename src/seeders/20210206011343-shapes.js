'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('shape', [{
			name: 'square'
		},{
			name: 'triangle'
		},{
			name: 'circle'
		},{
			name: 'pentagone'
		}], {});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('shape', null, {});
	}
};
