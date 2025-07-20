require('dotenv').config();
const { Model } = require('objection');
const Knex = require('knex');

const knex = Knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

Model.knex(knex); // Bind Objection to Knex

module.exports = knex;
