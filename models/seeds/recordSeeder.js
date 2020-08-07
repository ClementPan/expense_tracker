// require DB
const db = require('../../config/mongoose')

// require RecordSchema
const Record = require('../record')
const record = require('../record')

const records = [
  {
    name: '午餐',
    date: '2019/04/23',
    category: '餐飲食品',
    amount: '60'
  }, {
    name: '晚餐',
    date: '2019/04/23',
    category: '餐飲食品',
    amount: '60'
  }, {
    name: '捷運',
    date: '2019/04/23',
    category: '交通出行',
    amount: '120'
  }, {
    name: '電影：驚奇隊長',
    date: '2019/04/23',
    category: '休閒娛樂',
    amount: '220'
  }, {
    name: '租金',
    date: '2019/04/01',
    category: '家居物業',
    amount: '25000'
  }
]

db.once('open', () => {
  records.forEach(record => Record.create(record))
  console.log('Seed Record created.')
  process.exit()
})