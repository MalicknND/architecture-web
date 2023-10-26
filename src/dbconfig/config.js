const mysql = require("mysql");

// Configuration de la connexion à la base de données
const dbConfig = {
  host: "localhost", // Remplacez par le nom de votre serveur de base de données
  user: "votre_nom_utilisateur",
  password: "votre_mot_de_passe",
  database: "votre_base_de_donnees",
};

// Création du pool de connexion
const pool = mysql.createPool(dbConfig);

// Exportez le pool de connexion pour l'utiliser dans d'autres parties de votre application
module.exports = pool;
