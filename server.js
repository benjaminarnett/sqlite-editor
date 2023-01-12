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

app.post('/', (req, res) => {
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

app.listen(3000, () => {
  console.log(`listening on port 3000`)
})





/* 
https://stackoverflow.com/questions/19041837/difference-between-res-send-and-res-json-in-express-js
https://javascript.plainenglish.io/guide-to-the-express-response-object-sending-things-2defae78d53c

https://stackoverflow.com/questions/44735669/how-to-make-javascript-fetch-synchronous









https://www.geeksforgeeks.org/what-is-the-disadvantage-of-using-innerhtml-in-javascript/

https://developer.mozilla.org/en-US/docs/Web/API/Response/formData

https://medium.com/@mstaso1/how-to-use-javascripts-fetch-api-dcbc2c364a8b
https://stackoverflow.com/questions/24582338/how-can-i-include-css-files-using-node-express-and-ejs

https://www.youtube.com/watch?v=3yi0yvHgPfQ


https://stackoverflow.com/questions/44735669/how-to-make-javascript-fetch-synchronous
https://dev.to/kylejb/a-key-difference-between-then-and-async-await-in-javascript-53e9

https://www.freecodecamp.org/news/how-to-use-fetch-api/

https://www.geeksforgeeks.org/how-to-display-values-from-database-in-real-time-without-refreshing-the-webpage/

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data


https://stackoverflow.com/questions/56600633/displaying-arrays-in-a-list-with-ejs
https://www.sqlitetutorial.net/sqlite-nodejs/



EDIT MODE

edit/database
- create database
- edit database name
- delete database
- query databases
- sort aphabetically
edit/database/id
- add entity
- rename entity
- delete entity
- query entities
- sort aphabetically
edit/database/id/entity_name
- add attribute
- rename attribute
- modify existing attribute (type)
- delete attribute 
- query attribute
- sort aphabetically
edit/database/id/entity_name/values
- add values
- edit values
- delete values
- query values
- sort aphabetically
- sort high to low
- sort low to high

QUERY MODE

query/database (AND, OR)
- query databases
- sort aphabetically
query/database/id
- query entities
- sort aphabetically
query/database/id/entity_name
- query attribute
- sort aphabetically
query/database/id/entity_name/values
- query values
- sort aphabetically
- sort high to low
- sort low to high

VIEW MODE

pagination or endless scroll


+ include example databases
- music
- movies
- tv_shows
- anime
- manga


https://www.youtube.com/watch?v=FN_ffvw_ksE

https://medium.com/geekculture/how-to-send-forms-data-with-fetch-using-get-post-put-delete-and-catching-with-express-js-bfdb85b99709
https://flaviocopes.com/express-forms/
*/