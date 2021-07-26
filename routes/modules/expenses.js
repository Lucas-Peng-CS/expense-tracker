const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require("../../models/category");

router.get('/new', (req, res) => {
  // return res.render('new')
})
router.post('/', (req, res) => {
  
})
router.get('/:id/edit', (req, res) => {
  
})
router.put('/:id', (req, res) => {

})
router.delete('/:id', (req, res) => {

})

module.exports = router