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

module.exports = {
  getAllRecipes,
  getShoppingCart
};
