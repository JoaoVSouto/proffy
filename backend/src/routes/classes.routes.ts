import { Router } from 'express';

import CreateClassService from '@services/CreateClassService';
import ListClassService from '@services/ListClassService';

const routes = Router();

routes.get('/', async (req, res) => {
  const { week_day, subject, time } = req.query;

  const listClass = new ListClassService();

  const classes = await listClass.execute({
    week_day: Number(week_day),
    subject: String(subject),
    time: String(time),
  });

  return res.json(classes);
});

routes.post('/', async (req, res) => {
  const { ...payload } = req.body;

  const createClass = new CreateClassService();

  await createClass.execute(payload);

  return res.status(201).send();
});

export default routes;
