const Sequelize = require("sequelize");
const db= require("../config");


module.exports = db.sequelize.define(
  "inventory", 
  {
    name: { type: Sequelize.STRING },
    quantity: { type: Sequelize.INTEGER }
  },
  { 
      freezeTableName: 'inventory' , timestamps: false}
  );