let express = require('express');
let app = express();

let fakedb = require('./db.js');

// use ejs as the view engine
app.use('view engine', ejs)

app.get('/', (req, res) => {
  res.send('Hello world.');
})

app.get('/users', (req, res) => {
  // renders the .ejs template, passing the users db through the
  // variable "users"
  res.render('user_template', {
      users: fakedb
  });
});

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    if (id > fakedb.length - 1)
        res.sendStatus(404);
    else
        res.send(fakedb[id]);
});

app.listen(3000, () => console.log('Listening on port 3000...'));
