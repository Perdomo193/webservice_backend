'use strict';

module.exports = {
        up: async (queryInterface, Sequelize) => {
                await queryInterface.bulkInsert('shapes', [{
                        name: 'rectangle',
			createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
			updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
                },{      
                        name: 'triangle',
			createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
			updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
                },{      
                        name: 'circle',
			createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
			updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
                },{      
                        name: 'pentagone',
			createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
			updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
                }], {}); 
        },               

        down: async (queryInterface, Sequelize) => {
                return queryInterface.bulkDelete('shapes', null, {});
        }
};

