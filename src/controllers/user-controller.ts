import User from "../models/user-model.js";
import asyncHandler from "express-async-handler";
import {Request, Response} from "express";
import { ObjectId } from "mongoose";
import jwt from 'jsonwebtoken';
import { userI } from "../models/user-model.js";
import { isDocument } from '@typegoose/typegoose';

const login = asyncHandler(async (req : Request, res : Response) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username});
        if (user && (user.password) === password) {
            res.status(201).send({
                _id : user._id,
                username : user.username,
                token : generateToken(user),
            })
        } else {
            res.status(400);
            throw new Error("wrong password");
        }
    } catch (e) {
        res.status(400);
        throw new Error("Error logging in" + e);
    }
});

const register = asyncHandler(async (req : Request, res : Response) => {
    const user = new User(req.body);
    try {
        const newUser = await user.save();
        res.status(201).json({message : "added user", newUser});
    } catch {
        res.status(400);
        throw new Error("Error adding user");
    }
});

const generateToken = (user : userI) => {
    return jwt.sign({
        _id : user._id,
        username : user.username,
    }, process.env.JWT_SECRET, {
        expiresIn : '30d'
    });
}

export {login, register}