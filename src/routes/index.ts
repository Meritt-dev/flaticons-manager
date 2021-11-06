import express from 'express';
import { GetRandomIcons } from '../components';
import { Validateuser } from '../middlewares';
const router = express.Router();

router.route('/').get(Validateuser, GetRandomIcons);

export default router;
