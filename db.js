let faker = require('faker');

var NO_OF_USERS = 10;

let users = {}
for (let i=0; i<NO_OF_USERS; i++) {
    users[i] = ({
	    name: faker.name.findName(),
        email: faker.internet.email()
    });
}

users.no_of_users = NO_OF_USERS;

module.exports = users;

