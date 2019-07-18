const db = require("../dbconfig");

const getRecipes = () => {
  return db("recipes");
};

const getShoppingList = recipe_id => {
  return db
    .select(
      "recipes.recipename",
      "ingredients.ingredientname",
      "quantity.quantity"
    )
    .from("recipes")
    .join("ingredients", "ingredients.id", "quantity.ingredient_id")
    .join("quantity", "recipes.id", "quantity.recipe_id")
    .where({ "recipes.id": recipe_id });
};

module.exports = {
  getRecipes,
  getShoppingList
};
