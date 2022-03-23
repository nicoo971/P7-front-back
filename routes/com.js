const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const comCtrl = require('../controllers/comments');
router.delete('/:id/', auth, comCtrl.deleteOneComment);
router.get('/:id', auth, comCtrl.GetCommentByPost);
router.post('/', auth, comCtrl.createComment);


module.exports = router;