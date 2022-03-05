const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const postCtrl = require('../controllers/post');
router.delete('/:id/',auth, postCtrl.deleteOnePost);
router.get('/',auth, postCtrl.GetAllPosts);
router.get('/:id',auth, postCtrl.GetOnePost);
router.post('/',auth,postCtrl.createPost);



module.exports = router;