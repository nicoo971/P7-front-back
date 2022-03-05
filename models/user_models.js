const { DataTypes } = require('sequelize');
const db = require("../middleware/db-config");

module.exports = db.define('User', {

    username: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
        isEmail: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
});    
