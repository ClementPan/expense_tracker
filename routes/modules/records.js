const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

// router
router.get('/new', (req, res) => {
  res.render('new')
})

router.delete('/:id', (req, res) => {
  const recordToDelete = req.params.id
  return Record.findById(recordToDelete)
    .then(record => Record.deleteOne(record))
    .then(() => res.redirect('/'))
    .catch(err => console.error(err))

})

module.exports = router