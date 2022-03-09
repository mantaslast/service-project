import express, { Application, Request, Response } from 'express';
import setupDatabase from '@/config/db';

const app: Application = express();

const main = async () => {
  /**
   * Setup database
   */
  await setupDatabase();
  app.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
  });

  app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started on port ${process.env.PORT}`);
  });
};

main();
