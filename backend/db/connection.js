const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:test1234@postgres:5432/task-planner') 

module.exports = sequelize;