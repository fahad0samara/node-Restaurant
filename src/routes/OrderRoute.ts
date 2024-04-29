import express from "express";
import { jwtCheck, jwtParse } from "../middleware/auth";
import OrderController from "../controllers/OrderController";

const router = express.Router();

// Get user orders
router.get("/", jwtCheck, jwtParse, OrderController.getMyOrders);

// Create checkout session
router.post("/checkout/create-checkout-session", jwtCheck, jwtParse, OrderController.createCheckoutSession);

// Stripe webhook handler
router.post("/checkout/webhook", OrderController.stripeWebhookHandler);

export default router;
