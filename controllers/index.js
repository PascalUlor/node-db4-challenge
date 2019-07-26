const recipeModel = require("../data/models");

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipeModel.getRecipes();
    res.status(200).json({
      status: 200,
      data: recipes
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err
    });
  }
};

const getShoppingCart = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const cart = await recipeModel.getShoppingList(id);
    if (id) {
      return res.status(200).json({
        status: 200,
        data: cart
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err
    });
  }
};

const getRecipeSteps = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const steps = await recipeModel.getInstructions(id);
    if (id) {
      return res.status(200).json({
        status: 200,
        data: steps
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err
    });
  }
};

const getIngredientsByRecipes = async (req, res) => {
  const id = req.params.id;
  try {
    const items = await recipeModel.getIngredients(id);
    if (id) {
      return res.status(200).json({
        status: 200,
        data: items
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err
    });
  }
};

module.exports = {
  getAllRecipes,
  getShoppingCart,
  getRecipeSteps,
  getIngredientsByRecipes
};
