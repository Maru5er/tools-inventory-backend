import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';

let protect = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization;
    if (token) {
        try {
            let decoded = jwt.verify(token.split(",")[1], process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch {
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

export { protect };
