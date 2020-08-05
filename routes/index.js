// 總路由器
const express = require('express')
const router = express.Router()

// routes 
const home = require('./modules/home')
const records = require('./modules/records')

// router
router.use('/', home)
router.use('/records', records)


module.exports = router