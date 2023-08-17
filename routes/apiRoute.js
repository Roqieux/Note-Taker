// dependencies 
const path = require('path');
const fs = require('fs')

// npm package that allows for unique ids to be created
var uniqid = require('uniqid');


// routing
module.exports = (app) => {

  // GET reads the db.json file and returns saved notes JSON
  
  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

  // POST receives a new note to save on the request body add it to the db.json file and then return the new note to the client

  app.post('/api/notes', (req, res) => {
    let notes = fs.readFileSync('db/db.json');
    notes = JSON.parse(notes);
    res.json(notes);
    let userNote = {
      title: req.body.title,
      text: req.body.text,
      // creating unique id for each note
      id: uniqid(),
    };
  
    notes.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(notes));
    res.json(notes);

  });


  // DELETE receives a query parameter containing the id of a note to delete

  app.delete('/api/notes/:id', (req, res) => {
    // reading notes form db.json
    let notes = JSON.parse(fs.readFileSync('db/db.json'))
    // removing note with id
    let deleteNotes = notes.filter(item => item.id !== req.params.id);
    // Rewriting note to db.json
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);
    
  })
};