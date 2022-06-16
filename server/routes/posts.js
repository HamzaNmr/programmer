import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.post('/', getPosts);
router.get('/', createPost);


export default router;