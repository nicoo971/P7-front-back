const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user_ctrl');
// const itemCtrl = require('../controllers/item_ctrl');
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

// router.get('/:userid/items/', itemCtrl.getItemsByUser);
// router.post('/:userid/items/', itemCtrl.createItem);

// router.get('/', userCtrl.getAllUsers);

module.exports = router;