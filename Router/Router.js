import express from 'express';
const router = express.Router();
import RateController from '../Controller/RateController.js';


router.post('/rate', RateController);
router.get('/', (req, res) => {
    res.send({ status: "API is working" });
}
);
export default router;
