const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
const exec = require('child_process').exec;

const thisServerPort = 9500

const announcementList = {
  "announcementList": [
    "Hello World 1",
    "Hello World 2",
    "Hello World 3"
  ]
}

app.use(cors())
app.use(bodyParser.json({limit: '100mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}))

app.post('/', async function (req, res) {
		res.send(JSON.stringify(announcementList))
});

app.listen(thisServerPort, function (err) {
  if (err) {
    throw err;
  }

  console.log(`Server started on port ${thisServerPort}`);
});


