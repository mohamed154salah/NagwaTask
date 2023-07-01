import express, { Express, Request, Response } from 'express';
import router from './routes/index';
import cors from 'cors';
import morgan from 'morgan';
const app: Express = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));
app.use(cors());
app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'hello' });
});
app.use('/', router);
export default app;
