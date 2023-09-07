import {NextFunction, Request, Response} from 'express';
import {connect} from 'mongoose';

const dbConnect = async (req: Request, res: Response, next: NextFunction) => {
    const connectionURL: string = process.env.MONGO_URI || "";
    if (connectionURL == "") {
        return res.status(500).send({
            message: "Failed to connect with database, Empty database URL"
        })
    } else {
        connect(connectionURL).catch((e) => {
            console.log(e)
            return res.status(500).send({
                message: "Failed to connect with database"
            })
        }).then(() => {
            next()
        })
    }
}

export {dbConnect}