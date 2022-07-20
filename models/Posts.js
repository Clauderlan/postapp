const db = require("./db");

const Posts = db.sequelize.define("Posts", {
    title : {
        type : db.Sequelize.STRING
    },
    content : {
        type : db.Sequelize.TEXT
    }
});

// Posts.sync({force : true}); // Sync = true