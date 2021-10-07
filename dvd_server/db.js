const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "thor3132",
  host: "localhost",
  port: 5432,
  database: "dvdrental",
});

module.exports = pool;
