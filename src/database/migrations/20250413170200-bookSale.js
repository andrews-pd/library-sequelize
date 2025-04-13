'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('bookSales', {
      saleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'sales',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      bookId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'books',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('bookSales');
  }
};
