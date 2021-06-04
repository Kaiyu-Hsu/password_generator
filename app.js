const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 因express載好，所以只要載入在node_modules中的body-parser就好
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  // console.log('req.body', req.body)
  // console.log('random password is: ', generatePassword(req.body))
  const options = req.body
  const password = generatePassword(options)
  // res.render('index')
  res.render('index', { password: password, options: options})
})

app.listen(port, () => {
  console.log(`The engine is working on http://localhost:${port}`)
})