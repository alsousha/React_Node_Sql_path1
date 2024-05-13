import express from 'express';
import {
	getPosts
} from '../controllers/user.js'

const router = express.Router();
router.get('/posts', getPosts);


export default router;