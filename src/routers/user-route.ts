import {login, register, getUser} from "../controllers/user-controller.js";
import express from 'express';
import {dbConnect} from '../middlewares/dbConnect.js';
import { get } from "http";

const router = express.Router();
router.route('/login').post([dbConnect], login);
router.route('/getuser').get([dbConnect], getUser);

export default router;