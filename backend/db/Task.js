const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./connection");

const Task  = sequelize.define("task", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    }, 
    detail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isCompleted:{ 
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
    underscored: true,
})

module.exports = Task;