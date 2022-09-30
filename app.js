const express = require('express')
const request = require('request')
const cors = require('cors')
const app = express()
require('dotenv').config()


// middlewares
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
 res.send("Api ready for use")
})
app.get('/quotes', (req, res) => {
  const request = require("request");

  const options = {
    method: "GET",
    url: process.env.URL,
    headers: {
      "X-RapidAPI-Key": process.env.KEY,
      "X-RapidAPI-Host": process.env.HOST,
      useQueryString: true,
    },
  };

  request(options, function (error, response, body) {
    if (error) console.log(error);

   console.log(body);
   res.send(body)
  });

})
const port =process.env.PORT || 5000
app.listen(port ,()=>console.log(`app listening on port ${port}`))