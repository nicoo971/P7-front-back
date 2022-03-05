const { DataTypes } = require('sequelize');
const db = require("../middleware/db-config");

module.exports = db.define('post', {

    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:{notEmpty:true}


    },
    content: {
        type: DataTypes.STRING(250),
        allowNull: false,
        validate:{notEmpty:true}

    }
});