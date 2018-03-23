let faker = require('faker');

var NO_OF_USERS = 10;

let users = [];
for (let i=0; i<NO_OF_USERS; i++) {
    users.push({
	    name: faker.name.findName(),
        email: faker.internet.email()
    });
}

module.exports = users;

