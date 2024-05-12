import express from "express"
import { checkout } from "../controllers/paymentControllers.js";
import { paymentverification } from "../controllers/paymentControllers.js";
const router=express.Router()
router.route("/checkout").post(checkout)
router.route("/paymentverification").post(paymentverification)
export default router;