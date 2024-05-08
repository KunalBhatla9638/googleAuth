const {Sequelize} = require("sequelize")

const sequelize = new Sequelize("auth", "root", "", {
    host : "localhost",
    logging : false,
    dialect : "mysql"
})

module.exports = sequelize;