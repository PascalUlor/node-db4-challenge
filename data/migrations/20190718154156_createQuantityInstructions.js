exports.up = function(knex) {
  return knex.schema
    .createTable("quantity", table => {
      table.increments();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
      table
        .integer("quantity")
        .notNullable()
        .unsigned();
    })
    .createTable("instructions", table => {
      table.increments();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      table
        .integer("quantity_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("quantity");
      table.text("steps", 128).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("quantity")
    .dropTableIfExists("instructions");
};
