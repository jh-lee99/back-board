const SnakeNamingStrategy = require("typeorm-naming-strategies").SnakeNamingStrategy;
const isTS = require('detect-ts-node');

const config = {
  "name": "default",
  "type": "mysql",
  "replication": {
    "master": {
      "host": "192.168.30.101",
      "port": 3306,
      "username": "boarduser",
      "password": "boardpass",
      "database": "boarddb"
    },
    "slaves": [{
      "host": "192.168.30.101",
      "port": 3307,
      "username": "boarduser",
      "password": "boardpass",
      "database": "boarddb"
    }]
  },
  "synchronize": false,
  "logging": false,
  "namingStrategy": new SnakeNamingStrategy()
};

if (isTS) {
  config.entities = [
    "src/entity/**/*.ts"
  ];
  config.migrations = [
    "src/migration/**/*.ts"
  ];
  config.subscribers = [
    "src/subscriber/**/*.ts"
  ];
} else {
  config.entities = [
    "./entity/**/*.js"
  ];
  config.migrations = [
    "./migration/**/*.js"
  ];
  config.subscribers = [
    "./subscriber/**/*.js"
  ];
}

module.exports = config;
