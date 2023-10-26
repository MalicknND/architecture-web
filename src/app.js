const express = require("express");
require("dotenv").config();
const { engine } = require("express-handlebars");
const app = express();
const path = require("path");
const mysql = require("mysql2");
var helpers = require("handlebars-helpers")();
const cors = require("cors");
const articleRouter = require("./routes/article.route");
const bodyParser = require("body-parser");
const apiRouter = require("./routes");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("architecture_web", "root", "", {
  host: "localhost",
  dialect: "mysql", // Remplacez par le dialecte de votre base de données (mysql, postgres, sqlite, etc.)
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use("/api/v1", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`server launch on port ${process.env.PORT}`);
});
