const knex = require("knex");
const dbconfig = require("../knexfile").development;
const db = knex(dbconfig);
module.exports = db;
