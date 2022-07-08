const express = require('express');
const { getPostsBySearch, getPosts, createPost, updatePost, deletePost, likePost } = require('../controllers/posts.js');
const passport = require('passport');
require("../passportJwt.js");

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.post('/', passport.authenticate("jwt", { session: false }), createPost);
router.patch('/:id', passport.authenticate("jwt", { session: false }), updatePost);
router.delete('/:id', passport.authenticate("jwt", { session: false }), deletePost);
router.patch('/:id/likePost', passport.authenticate("jwt", { session: false }), likePost);

module.exports = router;