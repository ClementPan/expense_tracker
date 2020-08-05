// basic setting
const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')


router.get('/', (req, res) => {
  let category = []
  Record.find()
    .sort({ _id: 1 })
    .lean()
    .then(
      record => {
        record.forEach(item => {
          let cato = []
          Category.find({ name: item.category })
            .lean()
            .then(cate => {
              cato.push(cate[0].tag)
              category.push(cato)
            })
            .catch(error => console.error(error))
        })
        res.render('index', { record, category })
      })
    .catch(err => console.error(err))
})

// press create button
router.post('/', (req, res) => {
  const newRecord = req.body
  Record.create(newRecord)
    .then(res.redirect('/'))
    .catch(err => console.error(err))
})






module.exports = router