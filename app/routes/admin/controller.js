const db = require("../../models");

const admin = db.admin;

module.exports = {
  getAdmin: (req, res) => {
    admin
      .findAll()
      .then(result => res.send(result))
      .catch(error => res.send(error));
  }
};
