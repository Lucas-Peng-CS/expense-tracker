const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require("../../models/category");

router.get('/new', (req, res) => {
  const date = new Date()
  const currentDate = formatDate(date);
  function formatDate (date) {
    let month = date.getMonth() + 1
    month = month < 10 ? '0' + month : month;
    return date.getFullYear() + "-" + month + "-" + date.getDate()
  }
  Category.find()
    .lean()
    .then((categories) => res.render("new", { categories, currentDate }))
    .catch((error) => console.error(error));
})
router.post('/', (req, res) => {
  const data = req.body
  return Record.create(data)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then((record) => {
      Category.find()
        .lean()
        .then((categories) =>
          res.render("edit", { record, categories })
        );
    })
    .catch((error) => console.log(error));
})
router.put('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then((record) => {
      record = Object.assign(record, req.body)
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error));
})
router.delete('/:id', (req, res) => {

})

module.exports = router