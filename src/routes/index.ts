import express from 'express';
import { GetRandomIcons, SearchForIcon } from '../controllers';
import { Validateuser } from '../middlewares';
const router = express.Router();

router.route('/').get(Validateuser, GetRandomIcons);
router.route('/search').get(Validateuser, SearchForIcon);

export default router;
