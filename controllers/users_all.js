let fakedb = require('../models/db.js');

module.exports = (req, res) => {
    // res.send(fakedb)
    // res.render('user_template');  // renders the .ejs template

    // renders the .ejs template, passing the users db through the
    // variable "users"
    res.render('user_template', {
        users: fakedb
    });

};
