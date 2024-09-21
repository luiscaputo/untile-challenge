import { Router } from 'express';
import restaurants from '../infra/http/routes/restaurants-routes';

const router = Router();

router.use(restaurants);

export default router;
