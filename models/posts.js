const db = require("./db");
const Post = db.sequelize.define("Posts", {
    title : {
        type : db.Sequelize.STRING
    },
    content : {
        type : db.Sequelize.TEXT
    },
    img : {
        type : db.Sequelize.STRING
    }
})

// Post.sync({force : true}); // Sync = true

module.exports = Post;