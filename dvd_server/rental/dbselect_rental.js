const pool = require("../db");

pool.query("SELECT * FROM public.rental", (err, res) => {
  try {
    console.log(res.rows);
  } catch {
    console.error(err.message);
  }
});

pool.end();
