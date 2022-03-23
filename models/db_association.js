const User = require("./user_models");
const Post = require("./post");
const Comment = require("./comment");
// const commentaire= require();

User.hasMany(Post, {
    foreignKey: {
        allowNull: false
    }
});
Post.belongsTo(User);

User.hasMany(Comment, {
    foreignKey: {
        allowNull: false
    }
});
Comment.belongsTo(User);

Post.hasMany(Comment, {
    foreignKey: {
        allowNull: false
    }
});
Comment.belongsTo(Post);

//utlisateur plusieur poste/ et un poste appartient a un seul utilisateur.

// un utlisateur peut avoir plusieur commentaires / un commentaire  apprtien a un utlisateur

// un commentaires appartienta un poste et un poste peut avoir plusieur comentaires