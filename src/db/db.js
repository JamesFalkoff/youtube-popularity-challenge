const Sequelize = require('sequelize');
const dbConfig = require('../config/dbConfig');

const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.DB_USER, dbConfig.DB_PSWD);

const Score = sequelize.define('score', {
  username: Sequelize.STRING,
  query: Sequelize.STRING,
  result: Sequelize.STRING,
  channel: Sequelize.STRING,
  score: Sequelize.INTEGER,
  createdAt: {type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  updatedAt: {type: Sequelize.DATE, defaultValue: Sequelize.NOW }
});

// creates table in MySQL if it's not already present
Score.sync();

module.exports.Score = Score;