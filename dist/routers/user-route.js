import { login, getUser } from "../controllers/user-controller.js";
import express from 'express';
import { dbConnect } from '../middlewares/dbConnect.js';
const router = express.Router();
router.route('/login').post([dbConnect], login);
router.route('/getuser').get([dbConnect], getUser);
export default router;
//# sourceMappingURL=user-route.js.map