import express from 'express'
import { getAllPost,postAll } from '../controller/PostController.js';
const router=express.Router();


router.route('/').get(getAllPost);
router.route('/').post(postAll);

export default router