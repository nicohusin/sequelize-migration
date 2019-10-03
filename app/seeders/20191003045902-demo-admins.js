'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('admins', [{
      name: 'John',
      email: 'demo@demo.com',
      password: 'asd',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
