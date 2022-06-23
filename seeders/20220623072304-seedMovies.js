'use strict';
const fs = require('fs')

module.exports = {
  up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const data = JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'))
    data.forEach(e => {
      e.createdAt = new Date()
      e.updatedAt = new Date()
    });

    return queryInterface.bulkInsert('MovieDetails', data)
  },

  down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('MovieDetails')
  }
};
