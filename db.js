// mySQL Connection

const Sequelize = require("sequelize");
const sequelize = new Sequelize("postapp", "root", "", {
    host : "localhost",
    dialect : "mysql"
});

module.exports = {
    sequelize : sequelize,
    Sequelize : Sequelize
};