// only need 1 router for now - super simple web app
let express = require('express');
let router = express.Router();

// import controllers
let rootController = require('../controllers/root.js');
let usersAllController = require('../controllers/users_all.js');
let usersOneController = require('../controllers/users_one.js');

router.get('/', rootController);
router.get('/users', usersAllController);
router.get('/users/:id', usersOneController);

module.exports = router;
