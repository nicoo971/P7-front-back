const { DataTypes } = require('sequelize');
const db = require("../middleware/db-config");

module.exports = db.define('comment', {
    content: {
        type: DataTypes.STRING(250),
        allowNull: false,
        validate: { notEmpty: true }

    }
});