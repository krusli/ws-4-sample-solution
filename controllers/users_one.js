let fakedb = require('../db.js');

module.exports = (req, res) => {
    let id = req.params.id;
    if (id > fakedb.length - 1)
        res.sendStatus(404);
    else
        res.send(fakedb[id]);
};
