"use strict";

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/hello", (req, res) => {
  res.json({ greetings: "Hello, API" });
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  // req.file is the `avatar` file
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  });
  // req.body will hold the text fields, if there were any
});
app.listen(process.env.PORT || 3000, function () {
  console.log("Node.js listening ...");
});
