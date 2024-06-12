const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
// router.get('/profile', authController.getProfileDetails);

router.get('/user/:id',authController.getUserById);
router.put('/user/:id/views',authController.updateTotalViews);
router.put('/user/:id/likes',authController.updateTotalLikes);
router.put('/user/:id/dislikes',authController.updateTotalDislikes);


module.exports = router;


