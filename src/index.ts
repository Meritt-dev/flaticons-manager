import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import IndexRouter from './routes';
dotenv.config();
const main = async () => {
  const app = express();
  if (!process.env.MAIN_PORT) {
    process.exit(1);
  }
  app.use(cors());
  app.use('/', IndexRouter);
  app.listen(process.env.MAIN_PORT, () => {
    console.log(`Server is listening on port ${process.env.MAIN_PORT}`);
  });
};
main();
