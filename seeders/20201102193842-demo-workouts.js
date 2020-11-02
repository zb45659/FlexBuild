'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Workouts', 
      [
        {
          type:'Chest',
          time: 90,
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      
    ],
    );
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
