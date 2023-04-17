import pg from 'pg';


//Testing the postgres connection   
const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'smonkey',
  password: '1234',
  port: 5432, // or your custom port number
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Connected to PostgreSQL database at ${pool.options.host}:${pool.options.port}`);
  console.log(`Current timestamp from database: ${res.rows[0].now}`);
  pool.end();
});
