const pool = require("../db");
const sql =
  "INSERT INTO public.rental( inventory_id, customer_id,return_date, staff_id) VALUES ($1,$2,$3,$4) RETURNING *";

const value = [12, 12, "2005-05-26 22:04:30", 1];

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
