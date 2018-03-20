let express = require('express');
let app = express();

let router = require('./routes/router');

app.set('view engine', 'ejs');

// use the router
app.use(router);

app.listen(3000, () => console.log('Listening on port 3000...'));
