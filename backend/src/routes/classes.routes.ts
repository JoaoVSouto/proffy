import { Router } from 'express';

import CreateClassService from '@services/CreateClassService';

const routes = Router();

routes.post('/', async (req, res) => {
  const { ...payload } = req.body;

  const createClass = new CreateClassService();

  await createClass.execute(payload);

  return res.status(201).send();
});

export default routes;
