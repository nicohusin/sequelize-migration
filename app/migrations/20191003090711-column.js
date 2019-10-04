'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("blogs", "adminId", {
      type: Sequelize.STRING,
      defaultValue: "U"
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("blogs", "adminId")
  }
};
