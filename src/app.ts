import express, { Application, Request, Response } from 'express';
import { PORT } from '@/config/index';
import db from './db';

db.authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', err);
  });

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}`);
});
