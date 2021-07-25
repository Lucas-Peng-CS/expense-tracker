const Record = require("../record");
const db = require("../../config/mongoose");
const records = require('./records.json')

db.once("open", () => {
  Record.create(records)
  .then( () => {
    db.close()
    console.log("done");
  })
});
