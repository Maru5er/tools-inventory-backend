import { login } from "../controllers/user-controller.js";
import express from 'express';
import { dbConnect } from '../middlewares/dbConnect.js';
const router = express.Router();
router.route('/login').post([dbConnect], login);
export default router;
//# sourceMappingURL=user-route.js.map