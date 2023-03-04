module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: null,
    database: process.env.DB_NAME,
    host: process.env.DB_SERVER,
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: null,
    database: 'movies_db_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_SERVER,
    dialect: 'mysql'
  }
}
