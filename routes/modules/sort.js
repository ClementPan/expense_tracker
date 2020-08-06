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

  let category = []
  return Record.find({ category: filter })
    .lean()
    .then(record => {
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



////////// exports //////////
module.exports = router