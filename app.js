const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const port = 2000

let data
app.post('/api/data', (req, res) => {
  data = req.body
  console.log(data)
  res.send({ success: true })
})

app.get('/', (req, res) => {
  let html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello from Render!</title>
        <style>
          body{
              display:flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
          
          .card {
  
          }
        </style>
      </head>
      <body>
        <div class="card">
          <img width='300' src=${data?.backgroundImage} alt="card-img"/>
          <h3>Name: ${data?.name}</h3>
          <h3>Position: ${data?.position}</h3>
          <h3>Phone: ${data?.phone}</h3>
          <h3>Email: ${data?.email}</h3>
          <h3>Website: ${data?.website}</h3>
          <h3>Address: ${data?.address}</h3>
        </div>
      </body>
    </html>
  `
  res.type('html').send(html)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
