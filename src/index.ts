import express, {Express} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import toolsRouter from './routers/tools-route.js';
import userRouter from './routers/user-route.js';
dotenv.config();

const PORT = process.env.PORT || 3001;


let corsOptions = {
    origin : "*"
};

const app : Express = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use('/tools', toolsRouter);
app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});