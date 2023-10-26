const { Sequelize, DataTypes } = require("sequelize");

// Créez une instance Sequelize et configurez-la pour se connecter à votre base de données
const sequelize = new Sequelize("architecture_web", "root", "", {
  host: "localhost",
  dialect: "mysql", // Remplacez par le dialecte de votre base de données (mysql, postgres, sqlite, etc.)
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

module.exports = Article;
