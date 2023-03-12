const pg = require('pg');

// Setup pg to allow for database connections

const pool = new pg.Pool({
    // The name of the database
    database: 'koalas',
    //Our database is on our computer
    host: 'localhost',
    // What port is our database using
    port: 5432,
});

module.exports = pool;
