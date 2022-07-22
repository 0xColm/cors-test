const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send({'msg': 'Welcom to CORS server'})
})

app.get('/cors', (req, res) => {
  res.send({'msg': 'This has CORS enabled'})
})

app.listen(8080, () => {
  console.log('listening on port 8080')
})