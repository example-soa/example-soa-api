const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const data = require("./data.json")

app.get('/api', (req, res) => {
  res.json(data)
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`)
})
