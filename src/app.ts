import express, { Application, Request, Response } from 'express';
import { PORT } from '@/config';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}`);
});
