const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { verifyToken } = require('../middlewares/authMiddleware');
const uploadMiddleware = require('../middlewares/uploadMiddleware');

router.post('/post',  uploadMiddleware.single('file'), postController.createPost);
router.put('/post', verifyToken, uploadMiddleware.single('file'), postController.updatePost);
router.get('/post', postController.getPosts);
router.get('/post/:id', postController.getPostById);
router.get('/search', postController.searchByTags);



router.post('/update-views', postController.updateViews);
router.get('/post/:postId', postController.getPost);



router.post('/update-likes', postController.updateLikes);
router.post('/remove-likes', postController.removeLikes);




router.post('/update-dislikes', postController.updateDislikes);
router.post('/remove-dislikes', postController.removeDisikes);




module.exports = router;
