const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const port = 2000;

let data;
app.post("/api/data", (req, res) => {
    data = req.body
    console.log(data)
    res.send({ success: true });
});

app.get('/data', (req,res) => {
  res.json(data)
})


// app.get("/", (req, res) => res.type('html').send(html));

app.get("/", (req, res) => {
  let html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello from Render!</title>
        ...
      </head>
      <body>
        <section>
          Hello from Render!! ${data ? data?.name : 'hello'}
        </section>
      </body>
    </html>
  `
  res.type('html').send(html);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// const html = `
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Hello from Render!</title>
//     <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
//     <script>
//     </script>
//   </head>
//   <body>
//   </body>
// </html>
// `
