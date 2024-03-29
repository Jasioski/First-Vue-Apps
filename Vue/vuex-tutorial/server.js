const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

//connect to mongodb
mongoose.connect('mongodb://localhost/vuex-demo', function() {
  console.log('Connection has been made');
})

.catch(err => {
  console.error('App starting error:', err.stack);
  process.exit(1);
});

// Include controllers
fs.readdirSync("controllers").forEach(function (file) {
  if(file.substr(-3) == ".js") {
    const route = require("./controllers/" + file)
    route.controller(app)
  }
})

router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

const port = process.env.API_PORT || 8082;
app.use('/', router);
app.listen(port, function() {
    console.log(`api running on port ${port}`);
});
