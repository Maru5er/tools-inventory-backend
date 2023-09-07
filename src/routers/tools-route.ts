import {addTools, getTools, updateTools, deleteTools, getAllTools} from '../controllers/tools-controller.js';
import express from 'express';
import {dbConnect} from '../middlewares/dbConnect.js';

const router = express.Router();
router.route('/').post([dbConnect], addTools).get([dbConnect], getAllTools);
router.route('/search').post([dbConnect], getTools);
router.route('/:id').put([dbConnect], updateTools).delete([dbConnect], deleteTools);

export default router;