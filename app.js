// basic setting
const express = require('express')
const app = express()
const port = 3000

// express-handlebars with "hbs"
const exphbs = require('express-handlebars')

// set view engine
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: "hbs"
}))
app.set('view engine', 'hbs')

// connect to database
require('./config/mongoose')

// require Model: Record
// const Record = require('./models/record')

// use body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// use method-override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// set routes
const router = require('./routes')
app.use(router)

app.listen(port, () => {
  console.log(`Server listening to http://localhost:${port}`)
})