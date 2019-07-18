exports.up = function(knex) {
  return knex.schema
    .createTable("quantity", table => {
      table.increments();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
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
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("quantity_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("quantity")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.text("steps", 128).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("quantity")
    .dropTableIfExists("instructions");
};
