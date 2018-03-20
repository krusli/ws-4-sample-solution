let express = require('express');
let app = express();

let fakedb = require('./db.js');

// import controllers
let rootController = require('./controllers/root.js');
let usersAllController = require('./controllers/users_all.js');
let usersOneController = require('./controllers/users_one.js');

app.set('view engine', 'ejs');

app.get('/', rootController);

app.get('/users', usersAllController);

app.get('/users/:id', usersOneController);

app.listen(3000, () => console.log('Listening on port 3000...'));
