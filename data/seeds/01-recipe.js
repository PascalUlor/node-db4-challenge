exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipename: "jollof rice" },
        { recipename: "banga soup" },
        { recipename: "egg sauce" }
      ]);
    });
};
