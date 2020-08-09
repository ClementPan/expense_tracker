// basic setting
const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/', (req, res) => {
  Record.find().lean().then(records => {
    Category.find().lean().then(categories => {
      let cateList = []
      records.forEach(record => {
        for (let i = 0; i < categories.length; i++) {
          if (record.category === categories[i].name) {
            cateList.push(categories[i].tag)
          }
        }
      })
      res.render('index', { record: records, category: cateList })
    })
  })
})

// new route: new to index
router.post('/', (req, res) => {
  const newRecord = req.body
  console.log(newRecord)
  Record.create(newRecord)
    .then(res.redirect('/'))
    .catch(err => console.error(err))
})

module.exports = router