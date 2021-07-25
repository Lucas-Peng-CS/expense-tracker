const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')

router.get('/new', (req, res) => {
  return res.render('new')
})
router.post('/', (req, res) => {
  const 
})
router.get('/:id/edit', (req, res) => {
  const 
})
router.put('/:id', (req, res) => {

})
router.delete('/:id', (req, res) => {

})

module.exports = router