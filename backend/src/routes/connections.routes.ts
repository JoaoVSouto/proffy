import { Router } from 'express';

import CreateConnectionService from '@services/CreateConnectionService';

const routes = Router();

routes.post('/', async (req, res) => {
  const { user_id } = req.body;

  const createConnection = new CreateConnectionService();

  await createConnection.execute({ user_id });

  return res.status(201).send();
});

export default routes;
