const { Pool } = require("pg");

const pool = new Pool({
     user: "solo",
     host: "localhost",
     database: "week7db",
     password: "1234",
     port: 5432
});

module.exports = pool;
