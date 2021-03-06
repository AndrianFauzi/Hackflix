'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Favorites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: { //mungkin disini
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Users",
            key: "id"
          }
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      MovieId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Movies",
            key: "MovieDetailId"
          }
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Favorites');
  }
};