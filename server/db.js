const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "darksoul",
    host: "localhost",
    port: 5432,
    database: "emart"
});

module.exports = pool; 