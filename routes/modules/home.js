// basic setting
const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')


// router.get('/', (req, res) => {
//   let category = []
//   Record.find()
//     .sort({ _id: 1 })
//     .lean()
//     .then(
//       record => {
//         record.forEach(item => {
//           let cato = []
//           Category.find({ name: item.category })
//             .lean()
//             .then(cate => {
//               cato.push(cate[0].tag)
//               category.push(cato)
//             })
//             .then(res.render('index', { record, category }))
//         })
//         // res.render('index', { record, category })
//       })
//     .catch(err => console.error(err))
// })

router.get('/', (req, res) => {
  Record.find().lean().then(records => {
    Category.find().lean().then(categories => {
      //這裡進行所有的records與categories比對即可
      let cateList = []
      records.forEach(record => {
        for (let i = 0; i < categories.length; i++) {
          if (record.category === categories[i].name) {
            cateList.push(categories[i].tag)
          }
        }
      })
      console.log('************************')
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