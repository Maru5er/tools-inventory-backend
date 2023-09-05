import {addTools} from '../controllers/tools-controller.ts';
import express from 'express';
import {dbConnect} from '../middlewares/dbConnect.ts';

const router = express.Router();
router.route('/').post([dbConnect], addTools);

export default router;