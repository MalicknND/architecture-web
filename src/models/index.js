const Sequelize = require("sequelize");
const sequelize = new Sequelize("architecture_web", "root", "", {
  host: "localhost",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.articles = require("./article.model.js")(sequelize, Sequelize);

module.exports = db;
