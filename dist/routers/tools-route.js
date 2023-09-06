import { addTools, getTools, updateTools, deleteTools, getAllTools } from '../controllers/tools-controller.js';
import express from 'express';
import { dbConnect } from '../middlewares/dbConnect.js';
const router = express.Router();
router.route('/').post([dbConnect], addTools).get([dbConnect], getAllTools);
router.route('/:parameter&:value').get([dbConnect], getTools);
router.route('/:id').put([dbConnect], updateTools).delete([dbConnect], deleteTools);
export default router;
//# sourceMappingURL=tools-route.js.map