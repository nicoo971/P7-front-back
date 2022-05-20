const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const postCtrl = require('../controllers/post');
const multer =require("../middleware/multer-config");
router.delete('/:id/',auth, postCtrl.deleteOnePost);
router.get('/',auth, postCtrl.GetAllPosts);
router.get('/:id',auth, postCtrl.GetOnePost);
router.post('/',auth,multer,postCtrl.createPost);




module.exports = router;