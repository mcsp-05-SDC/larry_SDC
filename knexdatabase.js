require('dotenv').config();

exports.seed = async function(knex, Promise) {
    const fakeUsers= [];
    const desiredFakeUsers = 1;
    for (let i = 0; i < desiredFakeUsers; i++) {
        fakeUsers.push(createFakeUser());
    }
    await knew('users')
    .insert(fakeUsers)
};