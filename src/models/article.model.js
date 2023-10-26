module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "Article",
    {
      titre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: true, // Ajoute les champs createdAt et updatedAt
    }
  );

  return Article;
};
