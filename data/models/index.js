const db = require("../dbconfig");

const getRecipes = () => {
  return db("recipes");
};

const getShoppingList = recipe_id => {
  return db
    .select("r.recipename", "i.ingredientname", "q.quantity")
    .from("recipes")
    .join("ingredients as i", "i.id", "q.ingredient_id")
    .join("quantity as q", "r.id", "q.recipe_id")
    .where({ "r.id": recipe_id });
};

module.exports = {
  getRecipes,
  getShoppingList
};
