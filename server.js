const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/basic-calc", (req, res) => {
    res.render("basic-calc");
});

app.listen(3000);