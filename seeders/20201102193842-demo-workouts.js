'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Workouts', 
      [
        {
          name: 'Chest Muscular Endurance',
          type:'Chest',
          time: 90,
          userId: 1,
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
