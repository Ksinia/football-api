const Sequelize = require("sequelize");
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:ah93zheade@localhost:5434/postgres";
const db = new Sequelize(databaseUrl);
db.sync() //pass { force: true } when you want to delete all data and update tables schema
  .then(console.log("database schema has been updated"))
  .catch(console.error());

module.exports = db;
