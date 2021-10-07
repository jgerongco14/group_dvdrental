const pool = require("../db");

pool.query(
  "INSERT INTO public.rental(rental_date, invertory_id, costumer_id, return_date, staff_id, last_update) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
  ["2005-05-24 21:53:30"],
  ["21"],
  ["21"],
  ["2005-05-24 21:53:30"],
  ["21"],
  ["2005-05-24 21:53:30"],
  (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows);
    }
  }
);

pool.end();
