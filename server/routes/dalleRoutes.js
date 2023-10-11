import express from 'express'
import {getDalleController,postDalleController} from '../controller/DalleController.js';

const router=express.Router();


router.route('/').get(getDalleController);
router.route('/').post(postDalleController);

export default router