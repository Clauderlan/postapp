const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")

// Config
    // Handlebars - Template Engine
    app.engine("handlebars", handlebars.engine({defaultLayout : "main"}));
    app.set("view engine", "handlebars");
    // Body Parser
    app.use(bodyParser.urlencoded({extended : false}));
    app.use(bodyParser.json());

// Routes
    // Posts Register Route
    app.get("/cadastro", (req, res) => {
        res.render("form");
    })

    // Posts Collector Route
    app.post("/add", (req, res) => {
        res.send("Title >> " + req.body.title + "<br>" + "Content >> " + req.body.content);
    })


app.listen("3006", () => {
    console.log("Ativo na porta 3006;");
});