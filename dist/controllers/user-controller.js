var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "../models/user-model.js";
import asyncHandler from "express-async-handler";
import jwt from 'jsonwebtoken';
const login = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield User.findOne({ username });
        if (user && (user.password) === password) {
            res.status(201).send({
                _id: user._id,
                username: user.username,
                token: generateToken(user),
            });
        }
        else {
            res.status(400);
            throw new Error("wrong password");
        }
    }
    catch (e) {
        res.status(400);
        throw new Error("Error logging in" + e);
    }
}));
const register = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new User(req.body);
    try {
        const newUser = yield user.save();
        res.status(201).json({ message: "added user", newUser });
    }
    catch (_a) {
        res.status(400);
        throw new Error("Error adding user");
    }
}));
const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        username: user.username,
    }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};
const getUser = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let token = req.headers.authorization;
    if (token && token.startsWith('Bearer')) {
        try {
            let userData = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
            res.status(201).send(userData);
        }
        catch (e) {
            throw new Error("Error getting user" + e);
        }
    }
}));
export { login, register, getUser };
//# sourceMappingURL=user-controller.js.map