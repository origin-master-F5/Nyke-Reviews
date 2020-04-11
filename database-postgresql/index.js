const { Pool } = require('pg');
const colors = require('colors');

const pool = new Pool({
    user: "hr_sdc",
    password: "s35d35c",
    port: "5432",
    database: "nykereviews"
})

pool.connect()
    .then(() => console.log('Connected to PSQL'.magenta))
    .catch((err) => console.error(err))

module.exports = pool;