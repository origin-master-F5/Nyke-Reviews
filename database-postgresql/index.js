const Pool = require('pg').Pool;

const pool = new Pool({
  user: "hr_sdc",
  password: "localhost",
  port: "5432",
  database: "NykeReviews"
})

module.exports = pool;