const Sequelize = require("sequelize");
const fs = require("fs");

const db = {};
const sequelize = new Sequelize('quickstartdb', "myadmin@mysqldb31", "Jain@7503560505", {
  host: "mysqldb31.mysql.database.azure.com", //"localhost"
  dialect: "mysql",
  driver: 'tedious',
  operatorsAliases: false,
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  "dialectOptions": {
    "ssl": {
       "require": true
    }
  }
});

sequelize.sync({
  logging:console.log,
  force:false
}).then(()=>{
  console.log("connection of database Successfully")
}).catch(err=>{
  console.log("Unable to connect to dtabase",err);
})

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;