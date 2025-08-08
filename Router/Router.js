import express from "express";
const router = express.Router();
import RateController from "../Controller/RateController.js";
import Api from "../Controller/Api.js";


router.get("/", Api);
router.post("/rate", RateController);

export default router;
