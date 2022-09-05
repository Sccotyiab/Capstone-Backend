const { DataTypes } = require("sequelize");

module.exports = (db) => {
    return db.define("business", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Owner: DataTypes.STRING,
        Business: DataTypes.STRING,
        Type: DataTypes.STRING,
        Address: DataTypes.STRING,
        Contact: DataTypes.STRING,
        Website: DataTypes.STRING,
        Description: DataTypes.TEXT,
        Image: DataTypes.STRING,
    });
};
