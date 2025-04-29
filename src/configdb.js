const { Sequelize } = require('sequelize');

const dbConnection = new Sequelize(
  process.env.DATABASEDB,
  process.env.USERNAMEDB,
  process.env.PWDDB,
  {
    host: process.env.HOSTDB,
    dialect: 'postgres',  // 🔥 Aquí debe decir 'postgres'
    logging: false,       // (opcional) para que no spamee logs
  }
);

module.exports = dbConnection;
