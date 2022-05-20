const User = require('../models/user_models');
const Comment = require('../models/comment');


exports.createComment = async(req, res, next) => {

    const item = Comment.build({
        content: req.body.content,
        UserId: req.currentuser.userId,
        postId: req.body.PostId
    });

    item.save()
        .then(() => res.status(201).json({ message: 'item créé !' }))
        .catch(error => res.status(500).json({ error }));

};

exports.deleteOneComment = (req, res, next) => {
    Comment.findOne({ where: { id: req.params.id } })
        .then((comment) => {
            if (comment.UserId == req.currentuser.userId || req.currentuser.isAdmin) {
                Comment.destroy({ where: { id: req.params.id } })
                    .then(() => { res.status(200).json({ message: "comment suprimé" }) })
                    .catch((error) => res.status(500).json({ error: error.message }));
            } else {
                res.status(401).json({ message: "vous n'avez pas le droit" });
            }


        })
        .catch((error) => res.status(404).json({ error: error.message }));
}



exports.GetCommentByPost = (req, res, next) => {
    Comment.findAll({ where: { postId: req.params.id }, include: { model: User, attributes: ['username'] } })
        .then((comments) => { res.status(200).json(comments) })
        .catch((error) => res.status(404).json({ error: error.message }));
}