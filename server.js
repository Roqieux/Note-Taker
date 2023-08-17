//dependencies 

const express = require('express');

//use express

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
// sets up express app to handle data parser, middle wear created req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes to route files
require('./routes/apiRoute.js')(app);
require('./routes/htmlRoute.js')(app);


// app listener - starts the server
app.listen(PORT, () => {
    console.log(`Server available at localhost${PORT}`);
  });