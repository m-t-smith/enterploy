var express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      sql = require("mssql")

var app = express()
//app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

var port = process.env.PORT || 8081;

app.get('/status', (req, res) => {
  res.send({
    message: 'working'
  })
})

app.listen(port)

async () => {
  try {
    await sql.connect('mssql://mtsmithe@uncg.edu:catfish!1@localhost/CSC471DB')
    const result = await sql.query`select * from Employee`
     // eslint-disable-next-line 
    console.dir(result)
  } catch (err) {
     // eslint-disable-next-line 
    console.log("what did you do!?!?", err)
    }
  }
  
