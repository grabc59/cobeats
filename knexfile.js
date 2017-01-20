'use strict';

const database_name = 'cobeats';

module.exports = {

  test: {
    client: 'pg',
    connection: `postgresql://localhost/${database_name}_test`,
    migrations : {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds/test'
    }
  },

  development: {
    clinet: 'pg',
    connection: `postgres://localhost/${database_name}`,
    migrations : {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds/development'
    }
  },

  production: {
    clinet: 'pg',
    connection: process.env.DATABASE_URL,
    migrations : {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds/production'
    }
  }


};
