const express = require("express")
const app = express()

const port = process.env.PORT || 3001

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`)
})
