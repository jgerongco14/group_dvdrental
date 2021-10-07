const pool = require("./db");

const sql = "insert into public.film (film_id, title, description, release_year, language_id, rental_duration, rental_rate, length, replacement_cost, rating, last_update, special_features) values (DEFAULT, $1, $2, $3, $4, DEFAULT, DEFAULT, $5, DEFAULT, DEFAULT, DEFAULT, $6) RETURNING *"

const value = ['Rising of the Shield Hero', 'A life of a hero with a bad fate being the shield hero, fighting his way to be the strongest', '2013', 1, 50, [ 'Behind the Scenes' ]];

pool.query(
    sql,
    value,

(err, res) => {
  if (err) {
      console.log(err.stack);
  } else {
      console.log(res.rows);
  }
});

pool.end();