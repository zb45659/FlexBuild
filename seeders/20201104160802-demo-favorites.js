'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Favorites',
       [
         {
           userId: 3,
           workoutId: 1,
           createdAt: new Date(),
           updatedAt: new Date(),
        },
        {
          userId: 4,
          workoutId: 1,
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
