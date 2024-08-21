const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const profileUpload = require('../middlewares/profileUploadMiddleWare');

router.post('/register',profileUpload.single('file'),authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.patch('/updatePassword/:email', authController.updatePassword);




router.post('/sendMail', authController.sendMail);
router.post('/sendMail2', authController.sendMail2);


router.post('/compareOtp', authController.compareOtp);
router.post('/compareOtp2', authController.compareOtp2);







// router.get('/profile', authController.getProfileDetails);

router.get('/user/:id',authController.getUserById);
router.put('/user/:id/views',authController.updateTotalViews);
router.put('/user/:id/likes',authController.updateTotalLikes);
router.put('/user/:id/dislikes',authController.updateTotalDislikes);


module.exports = router;


