var Sequelize = require("sequelize");

const sequelize = new Sequelize("appAdmin", "postgres", "v7[_##H?9bQDK_PQ", { 
  host: "localhost",
  dialect: "postgres",
});
module.exports = sequelize;
