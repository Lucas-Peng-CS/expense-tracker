const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require("../../models/category");

router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .then((categories) => res.render("new", { categories }))
    .catch((error) => console.error(error));
})
router.post('/', (req, res) => {
  const data = req.body
  return Record.create(data)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
  
})
router.get('/:id/edit', (req, res) => {
  
})
router.put('/:id', (req, res) => {

})
router.delete('/:id', (req, res) => {

})

module.exports = router