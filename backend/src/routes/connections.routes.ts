import { Router } from 'express';

import CreateConnectionService from '@services/CreateConnectionService';
import CountConnectionsService from '@services/CountConnectionsService';

const routes = Router();

routes.get('/', async (req, res) => {
  const countConnections = new CountConnectionsService();

  const total = await countConnections.execute();

  return res.json({ total });
});

routes.post('/', async (req, res) => {
  const { user_id } = req.body;

  const createConnection = new CreateConnectionService();

  await createConnection.execute({ user_id });

  return res.status(201).send();
});

export default routes;
