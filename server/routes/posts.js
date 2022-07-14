const express = require('express');
const { getPost, getPostsBySearch, getPosts, createPost, updatePost, deletePost, likePost, commentPost } = require('../controllers/posts.js');
const passport = require('passport');
require("../passportJwt.js");

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', passport.authenticate("jwt", { session: false }), createPost);
router.patch('/:id', passport.authenticate("jwt", { session: false }), updatePost);
router.delete('/:id', passport.authenticate("jwt", { session: false }), deletePost);
router.patch('/:id/likePost', passport.authenticate("jwt", { session: false }), likePost);
router.post('/:id/commentPost', passport.authenticate("jwt", { session: false }), commentPost);

module.exports = router;