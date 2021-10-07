const pool = require("../db");

const sql =
  "UPDATE public.film SET rating = $1 WHERE film_id = 1001  RETURNING *";
const value = ["PG-13"];

pool.query(
  sql,
  value,

  (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows);
    }
  }
);

pool.end();
