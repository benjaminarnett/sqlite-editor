const fs = require('fs');
const sqlite3 = require('sqlite3')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.text())
app.use(express.static(__dirname + '/public'))

fs.mkdirSync('database', { recursive: true })

app.get('/', (req, res) => {
  res.render('index', { Mydata: fs.readdirSync('database') })
})

app.post('/create-database', (req, res) => {
  new sqlite3.Database(`database/${req.body}.db`, (err) => {
    if (err) {
      console.error(err.message)
    }
    else {
      res.json(fs.readdirSync('database'))
    }
  })
})

app.post('/delete-database', (req, res) => {
  fs.unlink(`database/${req.body}`, (err) => {
    if (err) {
      console.error(err.message)
    }
    else {
      res.json(fs.readdirSync('database'))
    }
  })
})

app.listen(3000, () => {
  console.log(`listening on port 3000`)
})