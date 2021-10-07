const pool = require("../db");

const sql = "DELETE FROM public.film WHERE film_id = $1 RETURNING *";
const value = [1001];

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
