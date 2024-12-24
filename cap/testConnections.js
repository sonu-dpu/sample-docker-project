const { Client } = require('pg');

const client = new Client({
  user: 'admin',
  host: 'postgres',  // Service name from docker-compose.yml
  database: 'erp_db',
  password: 'admin123',
  port: 5432,
});

client.connect()
  .then(() => {
    console.log("Connected to PostgreSQL!");
    return client.query('SELECT NOW()');
  })
  .then(res => {
    console.log(res.rows[0]);
  })
  .catch(err => {
    console.error("Connection error", err.stack);
  })
  .finally(() => client.end());
