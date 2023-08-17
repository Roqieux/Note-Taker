
// dependencies
const path = require('path');


// routing
module.exports = (app) => {

  // creating routes
  // GET /notes returns notes.html
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // GET / returns index.html
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  })
};