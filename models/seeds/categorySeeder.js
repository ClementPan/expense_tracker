// require DB
const db = require('../../config/mongoose')

// require CategorySchema
const Category = require('../category')

// require
const categories = [
  {
    name: '家居物業',
    tag: `fa-home `
  }, {
    name: '交通出行',
    tag: `fa-shuttle-van `
  }, {
    name: '休閒娛樂',
    tag: `fa-grin-beam `
  }, {
    name: '餐飲食品',
    tag: `fa-utensils `
  }, {
    name: '其他',
    tag: `fa-pen `
  },
]

db.once('open', () => {
  Category.create(categories)
    .then(() => console.log('Seed Category created!'))
    .then(() => process.exit())
    .catch(err => console.error(err))
})