import { Router } from 'express';

import classesRoutes from './classes.routes';
import connectionRoutes from './connections.routes';

const routes = Router();

routes.use('/classes', classesRoutes);
routes.use('/connections', connectionRoutes);

export default routes;
