// 總路由器
const express = require('express')
const router = express.Router()

// routes 
const home = require('./modules/home')
const records = require('./modules/records')
const sort = require('./modules/sort')

// router
router.use('/', home)
router.use('/records', records)
router.use('/sort', sort)

module.exports = router