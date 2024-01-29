import bodyParser from 'body-parser';
import { authRouter } from './auth.route';

const routes = (app) => {
  app.use(bodyParser.json(), authRouter);
};

export default routes;
