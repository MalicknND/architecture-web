const { Sequelize, DataTypes } = require("sequelize");

// Créez une instance Sequelize et configurez-la pour se connecter à votre base de données
const sequelize = new Sequelize("architecture_web", "root", "", {
  host: "localhost",
  dialect: "mysql", // Remplacez par le dialecte de votre base de données (mysql, postgres, sqlite, etc.)
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

// Définissez le modèle de l'article
const Article = sequelize.define("Article", {
  titre: {
    type: DataTypes.STRING,
    allowNull: false, // Le titre ne peut pas être vide
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false, // La description ne peut pas être vide
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false, // La date ne peut pas être vide
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Article created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = Article;
