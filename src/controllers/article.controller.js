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
