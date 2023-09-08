import { addTools, getTools, updateTools, deleteTools, getAllTools } from '../controllers/tools-controller.js';
import express from 'express';
import { dbConnect } from '../middlewares/dbConnect.js';
import { protect } from '../middlewares/auth.js';
const router = express.Router();
router.route('/').post([protect, dbConnect], addTools).get([protect, dbConnect], getAllTools);
router.route('/search').post([protect, dbConnect], getTools);
router.route('/update').put([protect, dbConnect], updateTools);
router.route('/delete').post([protect, dbConnect], deleteTools);
export default router;
//# sourceMappingURL=tools-route.js.map