import { Router } from 'express';
import { GetRestaurantsController } from '../controllers/restaurants-controller';

const router = Router();

router.get('/nearest', new GetRestaurantsController().handle);

export default router;
