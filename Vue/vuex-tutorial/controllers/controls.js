const MovieSchema = require('../models/Count.js');

module.exports.controller = (app) => {
	
  // add a new count
  app.post('/count', (req, res) => {
	  alert("IN controls.js");
    const newCount = new ({
      value: req.body.value,
    });
    
    newCount.save((error, count) => {
      if (error) { console.log(error); }
      res.send("test");
	   alert("sent out success");
    });
  });
  
};