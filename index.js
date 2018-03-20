let express = require('express');
let app = express();

let fakedb = require('./db.js');

app.get('/', (req, res) => {
  res.send('Hello world.');
})

app.get('/users', (req, res) => {
    res.send(fakedb)
});

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    if (id > fakedb.no_of_users - 1)
        res.sendStatus(404);
    else
        res.send(fakedb[id]);
});

app.listen(3000, () => console.log('Listening on port 3000...'));
