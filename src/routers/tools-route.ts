import {addTools} from '../controllers/tools-controller.js';
import express from 'express';
import {dbConnect} from '../middlewares/dbConnect.js';

const router = express.Router();
router.route('/').post([dbConnect], addTools);

export default router;