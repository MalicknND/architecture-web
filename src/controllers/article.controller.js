const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  connectionLimit: 10,
});

exports.getArticles = async (req, res) => {
  try {
    const [articles] = await pool.promise().query("SELECT * FROM articles");
    res.json(articles);
  } catch (error) {
    console.error("Erreur lors de la récupération des articles :", error);
    res.status(500).json({
      error: "Une erreur s'est produite lors de la récupération des articles.",
    });
  }
};
