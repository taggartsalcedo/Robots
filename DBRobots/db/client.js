const { Client } = require('pg')
const client = new Client('postgres://localhost:5432/robots')

module.exports = client