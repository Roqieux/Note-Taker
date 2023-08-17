// dependencies 
const path = require('path');
const fs = require('fs')

// npm package that allows for unique ids to be created
var uniqid = require('uniqid');


// routing
module.exports = (app) => {

  // GET /api/notes reads the db.json file and returns saved notes JSON
  
  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

