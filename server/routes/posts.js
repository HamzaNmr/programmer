const express = require('express');
const { getPosts, createPost, updatePost, deletePost, likePost,displayPostByTitleOrByTags } = require('../controllers/posts.js');

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
router.get('/display', displayPostByTitleOrByTags);



module.exports = router;