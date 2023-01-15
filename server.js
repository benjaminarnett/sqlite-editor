const fs = require('fs');
const sqlite3 = require('sqlite3')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.text())
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/create-database', (req, res) => {
  const databaseFilename = req.body
  new sqlite3.Database(`database/${databaseFilename}.db`, (err) => {
    if (err) {
      console.error(err.message)
    }
    else {
      res.json(fs.readdirSync('database'))
    }
  })
})

app.post('/delete-database', (req, res) => {
  const filename = req.body
  fs.unlink(`database/${filename}`, (err) => {
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