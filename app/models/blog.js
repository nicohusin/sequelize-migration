"use strict";
module.exports = (sequelize, DataTypes) => {
  const blog = sequelize.define(
    "blog",
    {
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      comment: DataTypes.STRING
    },
    {}
  );
  blog.associate = function(models) {
    blog.belongsTo(models.admin);
  };
  return blog;
};
