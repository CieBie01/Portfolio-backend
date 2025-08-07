import express from 'express';
const router = express.Router();
import RateController from '../Controller/RateController.js';


router.post('/rate', RateController);

export default router;
