'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  //   return queryInterface.bulkInsert(
  //     'Users', 
  //     [
  //       {
  //         name: 'Zac Benckendorf',
  //         username: 'zacb',
  //         password: 'pass',
  //         weight: 225,
  //         age: 24,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //       },
  //       {
  //         name: 'Austin Benckendorf',
  //         username: 'austinb',
  //         password: 'password',
  //         weight: 245,
  //         age: 24,
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
        // },
  //     ],
  //   );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
