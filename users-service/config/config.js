//  config.js
//
//  Simple application configuration. Extend as needed.
module.exports = {
    port: process.env.PORT || 8123,
  db: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    database: 'users',
    user: 'myroot',
    password: '123',
    port: 3306
  }
};
