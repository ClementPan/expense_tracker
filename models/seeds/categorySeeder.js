// require DB
const db = require('../../config/mongoose')

// require CategorySchema
const Category = require('../category')
const category = require('../category')

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



// const categories = [
//   {
//     name: '家居物業',
//     tag: `<i class="cateIcons fas fa-home mx-2 text-info"></i>`
//   }, {
//     name: '交通出行',
//     tag: `<i class="cateIcons fas fa-shuttle-van mx-2 text-info"></i>`
//   }, {
//     name: '休閒娛樂',
//     tag: `<i class="cateIcons fas fa-grin-beam mx-2 text-info"></i>`
//   }, {
//     name: '餐飲食品',
//     tag: `<i class="cateIcons fas fa-utensils mx-2 text-info"></i>`
//   }, {
//     name: '其他',
//     tag: `<i class="cateIcons fas fa-pen mx-2 text-info"></i>`
//   },
// ]

db.once('open', () => {
  categories.forEach(category => Category.create(category))
  console.log('Seed Category created.')
})