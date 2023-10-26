const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const apiRouter = require("./routes");
const Sequelize = require("sequelize");
const db = require("./models");

db.sequelize
  .sync()
  .then(() => {
    console.log("Synchroniser la base");
  })
  .catch((err) => {
    console.log("Erreur de synchronisation: " + err.message);
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
