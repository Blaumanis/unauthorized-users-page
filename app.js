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
    <meta charset="ISO-8859-1">
    <link
      href="https://fonts.googleapis.com/css?family=SF+Pro+Rounded&display=swap"
      rel="stylesheet"
    />
​
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
    />
      
  <style> 
      
      p{
    font-size: 20px !important;
     padding: 10px 0 10px 0 !important;
}
 .icons {
    width:4%;
     margin-right:20px
}
 .smicons {
    width:8%;
     margin-right:20px
}
 h3{
    color: #D2CBFF !important
}
 .button {
     height: 48px;
     width: 350px;
     background: #F8A226;
     border-radius: 48px;
     color: rgba(255,255,255,1);
     font-family: "Helvetica Neue";
     font-weight: Bold;
     font-size: 18px;
     opacity: 1;
     text-align: center;
     padding:10px;
     margin-top:36px;
     margin-bottom:36px;
}
 .bcard{
    width:100%;
     border: 6px solid white
}
 body {
     background-color: #fff;
     font-family: "Helvetica Neue";
     font-weight: Regular;
     font-size: 18px;
}
 .bg-dark {
     background-color: #5844D1;
     color: #fefefe;
     border-bottom: 5px solid #f1f1f1;
}
 .container {
     max-width: 750px;
     margin: 0 auto;
}
 .well {
     border-radius: 0;
}
 p {
     font-size: 16px;
}
 a:hover{
    text-decoration: none;
}     
      
 </style>     
      
      
      
      
  </head>
  <body>
    <div class="row bg-dark">
      <div class="container">
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12 well-lg reset-margin"
        >
          <!-- <img
            class="bcard"
            src="https://marketplace.canva.com/EAE_CSANkEw/1/0/1600w/canva-black-business-card-or-identity-card-template-OWiJeZqjbXc.jpg"
          /> -->
          <h1 class="text-left">${data?.name}</h1>
          <h4 class="text-left">${data?.position}</h4>
          <h3 class="text-left">${data?.phone}</h3>
        </div>
      </div>
    </div>
​
    <div class="container">
      <div class="row">
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12 well-lg reset-margin"
        >
          <p>
            <img src="Location-icon.svg" class="icons" /> ${data?.address}
          </p>
​
          <p>
            <img src="Mail-icon.svg" class="icons" />
            <a href="mailto:hillbuve@gmail.com">${data?.email}</a>
          </p>
​
          <p>
            <img src="Globe-icon.svg" class="icons" />
            <a href="http://hillbuve@gmail.com">${data?.website}</a>
          </p>
​
          <!-- <p>
            <a href=""><img src="linkedin.svg" class="smicons" /></a>
            <a href=""><img src="twitter.svg" class="smicons" /></a>
            <a href=""><img src="facebook.svg" class="smicons" /></a>
            <a href=""><img src="instagram.svg" class="smicons" /></a>
            <a href=""><img src="whatsapp.svg" class="smicons" /></a>
          </p>
​
            <a href=""> <div class="button">SAVE CONTACT</div></a> -->
        </div>
      </div>
    </div>
  </body>
</html>
  `
   
  res.type('html').send(html)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
