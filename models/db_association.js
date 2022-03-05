const User = require("./user_models");
const Post = require("./post");
// const commentaire= require();

User.hasMany(Post, {
    foreignKey: {
        allowNull: false
    }
});
Post.belongsTo(User);

//utlisateur plusieur poste/ et un poste appartient a un seul utilisateur.
// un commentaires appartienta un poste et un poste peut avoir plusieur comentaires
// un utlisateur peut avoir plusieur commentaires / un commentaire  apprtien a un utlisateur