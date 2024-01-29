import express from 'express';
import routes from './routes';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

routes(app)

app.listen(port, host, () => {
  console.log(`[ ready ✨ ] http://${host}:${port}`);
});
