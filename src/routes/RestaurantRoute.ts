import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

// Get restaurant by ID
router.get(
  "/:restaurantId",
  param("restaurantId")
    .isMongoId()
    .withMessage("RestaurantId parameter must be a valid MongoDB ObjectId"),
  RestaurantController.getRestaurant
);

// Search restaurants by city
router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City parameter must be a valid string"),
  RestaurantController.searchRestaurant
);

export default router;
