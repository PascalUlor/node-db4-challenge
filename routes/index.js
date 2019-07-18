const express = require("express");
const Controller = require("../controllers");

const router = express.Router();

router.get("/", Controller.getAllRecipes);

router.get("/:id", Controller.getShoppingCart);

module.exports = router;
