module.exports = {
   "type": "postgres",
   "host": process.env.PG_HOST,
   "port": process.env.PG_PORT,
   "username": process.env.PG_USERNAME,
   "password": process.env.PG_PASSWORD,
   "database": process.env.PG_DB_NAME,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}