const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

////// routes
router.get('/:method', (req, res) => {
  const sortMethod = req.params.method
  let filter = ''
  if (sortMethod === 'home') {
    filter = '家居物業'
  } else if (sortMethod === 'shuttle') {
    filter = '交通出行'
  } else if (sortMethod === 'grin') {
    filter = '休閒娛樂'
  } else if (sortMethod === 'utensils') {
    filter = '餐飲食品'
  } else {
    filter = '其他'
  }

  Record.find({ category: filter }).lean().then(records => {
    Category.find({ name: filter })
      .lean()
      .then(categories => {
        let cateList = []
        for (let i = 0; i < records.length; i++) {
          cateList.push(categories[0].tag)
        }
        res.render('index', { record: records, category: cateList })
      })
  })
})

////////// exports //////////
module.exports = router