// basic setting
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// use static "Public"
app.use(express.static('public'))

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

// use body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// use method-override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// set routes
const router = require('./routes')
app.use(router)

app.listen(PORT, () => {
  console.log(`Server listening to http://localhost:${PORT}`)
})
