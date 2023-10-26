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

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting db :", err);
    return;
  }
});

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use("/api/v1", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`server launch on port ${process.env.PORT}`);
});
