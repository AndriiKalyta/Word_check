const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())

var array = [
  { en: 'car', ua: 'авто'},
  { en: 'bike', ua: 'мото'},
  { en: 'bus', ua: 'автобус'}];

app.get('/words', (req, res) => {
  res.json(array);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






//node .\index.js



