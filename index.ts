import express, {json} from 'express';
import cors from 'cors';
import 'express-async-errors';
import { handleError } from './utils/errors';
import rateLimit from 'express-rate-limit';
import {todoRouter} from "./routers/todo.router";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(json());
// app.use(rateLimit({
//     windowMs: 5 * 60 * 10000, // 5 minutes
//     max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
// }))

//Routes
// const router = Router();
app.use('/todo', todoRouter);
// app.use('/api', router);

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on http://localhost:3001');

});
