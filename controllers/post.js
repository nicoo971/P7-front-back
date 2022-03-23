const User = require('../models/user_models');
const Post = require('../models/post');



exports.addcommentaires = (req, res, next) => {


}

exports.deleteOnePost = (req, res, next) => {
    Post.findOne({ where: { id: req.params.id }, include: { model: User, attributes: ['username'] } })
        .then((post) => {
            if (post.UserId == req.currentuser.userId || req.currentuser.isAdmin) {
                Post.destroy({ where: { id: req.params.id } })
                    .then(() => { res.status(200).json({ message: "post suprimé" }) })
                    .catch((error) => res.status(500).json({ error: error.message }));
            } else {
                res.status(401).json({ message: "vous n'avez pas le droit" });
            }


        })
        .catch((error) => res.status(404).json({ error: error.message }));

}


exports.GetAllPosts = (req, res, next) => {
    Post.findAll({ include: { model: User, attributes: ['username'] } })
        .then((posts) => { res.status(200).json(posts) })
        .catch((error) => res.status(404).json({ error: error.message }));
}

exports.GetOnePost = (req, res, next) => {
    Post.findOne({ where: { id: req.params.id }, include: { model: User, attributes: ['username'] } })
        .then((posts) => { res.status(200).json(posts) })
        .catch((error) => res.status(404).json({ error: error.message }));
}








// exports.getOne = async(req, res, next) => {

//     const items = await Item.findOne({
//         where: { id: req.params.id },
//         include: [{ model: User, attributes: ['email'] }]

//     });

//     res.status(200).json({ items: items });

// };
// exports.getItems = async(req, res, next) => {

//     const items = await Item.findAll();

//     res.status(200).json({ items: items });

// };
// exports.getItemsByUser = async(req, res, next) => {

//     const items = await Item.findAll({ where: { UserId: req.params.userid } });

//     res.status(200).json({ items: items });

// };
exports.createPost = async(req, res, next) => {

    const item = Post.build({
        title: req.body.title,
        content: req.body.content,
        UserId: req.currentuser.userId,
    });

    item.save()
        .then(() => res.status(201).json({ message: 'item créé !' }))
        .catch(error => res.status(500).json({ error }));

};