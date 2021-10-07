const pool = require("../db");

const sql = `INSERT INTO public.customer (store_id,first_name,last_name,email,address_id,activebool,active) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`;

const values = [
    1,
    'Rendel Jeff',
    'Gerongco',
    'rjg@gmail.com',
    1,
    true,
    1,
];

pool.query(sql, values, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows);
    }
});
pool.end();