import express from "express";
const router = express.Router();
import RateController from "../Controller/RateController.js";

router.get("/", (req, res) => {
  res.send({ status: "API is working" });
});
router.post("/rate", RateController);

export default router;
