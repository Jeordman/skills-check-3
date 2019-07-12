require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const ctrl = require("./controller");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

app.use(express.json());

//app.get/push/etc go here
app.get('/api/houses', ctrl.getHouses)
app.post('/api/add', ctrl.addHouse)

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    app.listen(SERVER_PORT, () => {
      console.log(`HIS SERVER...... It's over ${SERVER_PORT}!!`);
    });
  })
  .catch(err => console.log(`DATABASE MASSIVE CONNECTION ERROR`, err));
