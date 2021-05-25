var Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "dcr4clt2kc05pm",
  "vzaomodcuhlwsp",
  "e8e4702b202c0dad50af7b60f8ff92132ca173f2e605d4333502ef7d72bbef99",
  {
    port: "5432",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }
);
module.exports = sequelize;
