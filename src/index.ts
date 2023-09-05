import express, {Express} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import toolsRouter from './routers/tools-route.ts';
dotenv.config();
const PORT = process.env.PORT;


let corsOptions = {
    origin : `http://localhost:${PORT}`
};

const app : Express = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use('/tools', toolsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});