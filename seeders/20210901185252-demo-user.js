'use strict';

const faker = require('faker');

// name -> string
// age -> integer
// email -> string
// createdAt -> new Date().toISOString()
// updatedAt -> new Date().toISOString()

const seedArray = [] //array

for (let i = 0; i < 1000; i++) {

  const newObj = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: 30,
    email: faker.internet.email(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  seedArray.push(newObj);
}

console.log(seedArray);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', seedArray, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
