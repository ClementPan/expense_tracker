const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

////////// routes //////////
// delete route
router.delete('/:id', (req, res) => {
  const recordToDelete = req.params.id
  return Record.findById(recordToDelete)
    .then(record => Record.deleteOne(record))
    .then(() => res.redirect('/'))
    .catch(err => console.error(err))
})

// new route: index to new
router.get('/new', (req, res) => {
  return res.render('new')
})

// edit route: index to edit
router.get('/:id', (req, res) => {
  const recordToEdit = req.params.id
  return Record.findById(recordToEdit)
    .lean()
    .then(record => {
      // 整理回傳資料：date, category
      let date = record.date.split('/').join('-')
      let categorySelected = record.category
      if (categorySelected === '家居物業') {
        const home = 1
        res.render('edit', { record, date, home })
      } else if (categorySelected === '交通出行') {
        const shuttle = 1
        res.render('edit', { record, date, shuttle })
      } else if (categorySelected === '休閒娛樂') {
        const grin = 1
        res.render('edit', { record, date, grin })
      } else if (categorySelected === '餐飲食品') {
        const utensils = 1
        res.render('edit', { record, date, utensils })
      } else if (categorySelected === '其他') {
        const pen = 1
        res.render('edit', { record, date, pen })
      }
    })
    .catch(err => console.error(err))
})

// edit route: edit to index
router.put('/:id', (req, res) => {
  const recordToEdit = req.params.id
  const { name, date, category, amount } = req.body
  return Record.findById(recordToEdit)
    .then(record => {
      record.name = name
      record.date = date
      record.category = category
      record.amount = amount
      // console.log("record: ", record)
      return record.save()
    })
    .then(res.redirect('/'))
    .catch(err => console.error(err))
})

////////// exports //////////
module.exports = router