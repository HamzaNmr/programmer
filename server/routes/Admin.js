import express from 'express';
import {
    DeletePost,
    DeleteUser, 
    getReport  } from '../controllers/Admin.js';

const router = express.Router();

router.get('/', getReport);
router.delete('/:id', DeletePost);
router.delete('/:id', DeleteUser);

export default router;