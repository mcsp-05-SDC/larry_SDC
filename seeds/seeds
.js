var faker = require('faker');
const knex = require('knex');
// var randomName = faker.name.findName(); 
// var randomPrice = faker.commerce.price(); 

// const createFakeUsers = () => ({
//     randomName: faker.name.findName(), 
//     randomPrice: faker.commerce.price() 

// });

// exports.seed = async function(knex, Promise) {

// const fakeUsers = [];
// const desiredFakeUsers = 1;
// for (let i = 0; i < desiredFakeUsers; i++) {
//   fakeUsers.push(createFakeUsers());
// }
//   await knex('fec')
//   .insert(fakeUsers);
// };

// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('fec').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('item').insert([
//         {id: 1, name: randomName, price: randomPrice},
//         {id: 2, name: randomName, price: randomPrice},
//         {id: 3, name: randomName, price: randomPrice}
//       ]);
//     });
// };




const createFake = () => ({
  name: faker.name.firstName(),
  price: faker.commerce.price() 

});

exports.seed = async (knex, Promise) => {
  // Deletes ALL existing entries
  const fakeUsers = [];
  const desiredFakeUsers = 10000;
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFake());
  }
  await knex('item')
    .insert(fakeUsers);
};