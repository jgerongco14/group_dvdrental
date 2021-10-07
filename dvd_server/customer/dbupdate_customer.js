const pool = require("../db");

pool.query(
    "UPDATE public.customer SET email = $1 WHERE customer_id = 600 RETURNING *",
    ['divinedesamparado1834@gmail.com'],
  (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows);
    }
  }
);
pool.end();