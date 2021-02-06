'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coordinates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shape_id: {
        type: Sequelize.NUMBER
      },
      c_1: {
        type: Sequelize.NUMBER
      },
      c_2: {
        type: Sequelize.NUMBER
      },
      c_3: {
        type: Sequelize.NUMBER
      },
      c_4: {
        type: Sequelize.NUMBER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('coordinates');
  }
};