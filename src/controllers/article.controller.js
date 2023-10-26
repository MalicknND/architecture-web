const db = require("../models/index.js");
const Article = db.articles;

exports.getArticles = (req, res) => {
  console.log(Article.findAll);
  Article.findAll()
    .then((articles) => {
      res.json(articles);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des articles :", error);
      res.status(500).json({
        error:
          "Une erreur s'est produite lors de la récupération des articles.",
      });
    });
};
