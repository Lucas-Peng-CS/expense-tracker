const express = require("express");
const router = express.Router();
const Record = require("../../models/record");
const Category = require("../../models/category");

router.get("/", (req, res) => {
  let totalAmount = 0;
  Category.find()
    .lean()
    .then((categories) => {
      Record.find()
        .lean()
        .sort({ date: "desc" })
        .then((records) => {
          records.forEach((record) => {
            totalAmount += record.amount;
          });
          res.render("index", {
            records,
            categories,
            totalAmount,
          });
        });
    })
    .catch((error) => console.error(error));
});

module.exports = router;
