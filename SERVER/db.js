const Pool =require("pg");
 
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'yelpclone',
  password: 'Stef@nos.100',
  port: 5200,
});

module.exports ={ query : (text, params) => pool.query(text, params)};