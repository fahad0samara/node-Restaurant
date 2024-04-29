import express from "express";
import multer from "multer";
import MyRestaurantController from "../controllers/MyRestaurantController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyRestaurantRequest } from "../middleware/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

// Get restaurant orders
router.get("/orders", jwtCheck, jwtParse, MyRestaurantController.getMyRestaurantOrders);

// Update order status
router.patch("/orders/:orderId/status", jwtCheck, jwtParse, MyRestaurantController.updateOrderStatus);

// Get my restaurant
router.get("/", jwtCheck, jwtParse, MyRestaurantController.getMyRestaurant);

// Create my restaurant
router.post("/", upload.single("imageFile"), validateMyRestaurantRequest, jwtCheck, jwtParse, MyRestaurantController.createMyRestaurant);

// Update my restaurant
router.put("/", upload.single("imageFile"), validateMyRestaurantRequest, jwtCheck, jwtParse, MyRestaurantController.updateMyRestaurant);

export default router;
