const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const Posts = require("./models/posts");
const port = 3006;

// Config´s
    // EJS
    app.set("view engine", "ejs");
    // Static Path
    app.use(express.static(__dirname + '/public'));
    //BodyParser
    app.use(bodyParser.urlencoded({extended : false}));
    app.use(bodyParser.json());

// Routes

// Home
app.get('/', (req, res) => {
    Posts.findAll().then((posts) => {
        res.render("home", {posts : posts});
    });
});

// Register Posts
app.get("/register", (req, res) =>{
    res.render("register");
});

// Post Register
app.post("/adds", (req, res) =>{
    Posts.create({
        title : req.body.title,
        content : req.body.content,
        img : req.body.img
    });
    res.redirect("/");
});

app.listen(port, () => console.log(`ON >>> localhost:${port} !`));