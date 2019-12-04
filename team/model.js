const Sequelize = require("sequelize");
const db = require("../db");
const Team = db.define(
  "team", // if we pass the name below, what is this one?
  {
    name: {
      type: Sequelize.STRING,
      field: "team_name"
    }
  },
  { tableName: "football_teams" },
  { timestamps: false } // разобраться, почему это не работает
);
module.exports = Team;
