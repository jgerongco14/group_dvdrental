const pool = require("../db");

pool.query(
  "UPDATE public.rental SET customer_id = $1 WHERE rental_date = 2005-05-24 22:53:30",
  ["120"],
  (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows);
    }
  }
);
pool.end();
