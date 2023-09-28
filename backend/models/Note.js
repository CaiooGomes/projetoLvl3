const Sequelize = require('sequelize')
const sequelizeDB = require('../config/database')

const Note = sequelizeDB.define("Note", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Date.now()
    }
})

module.exports = Note