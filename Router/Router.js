import express from 'express';
const router = express.Router();
import {RateController} from '../controllers/RateController.js';


router.post('/rate', RateController);

export default router;
