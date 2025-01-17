const express = require("express");
const Controller = require("../controllers");

const router = express.Router();

router.get("/", Controller.getAllRecipes);

router.get("/:id", Controller.getShoppingCart);
router.get("/:id/instructions", Controller.getRecipeSteps);

router.get("/ingredients/:id/recipes", Controller.getIngredientsByRecipes);

module.exports = router;
