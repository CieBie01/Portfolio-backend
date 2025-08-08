import express from "express";
const router = express.Router();
import RateController from "../Controller/RateController.js";
import ContactController from "../Controller/ContactController.js";



router.post("/rate", RateController);
router.post("/contact", ContactController);
export default router;
