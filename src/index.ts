import express, {Express} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import toolsRouter from './routers/tools-route.js';
dotenv.config();

const PORT = process.env.PORT || 3001;


let corsOptions = {
    origin : "https://tools-inventory-1-6ec68a6025c3.herokuapp.com/"
};

const app : Express = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use('/tools', toolsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});