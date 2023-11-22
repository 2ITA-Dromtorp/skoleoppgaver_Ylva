const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello her kommer det sql data istedenfor denne teksten!')
})

app.listen(port, () => {
  console.log(`ylvass app listening on port ${port}`)
})

