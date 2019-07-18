exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredientname: "rice" },
        { ingredientname: "egg" },
        { ingredientname: "palm kernel" },
        { ingredientname: "vegetable" },
        { ingredientname: "vegetable oil" },
        { ingredientname: "tomato" }
      ]);
    });
};
