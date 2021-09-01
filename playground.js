const { User } = require('./models');

// CREATE, READ, UPDATE, DELETE

//CREATE
async function makeUser(firstName, lastName, age, email) {
    try {
        const newUser = await User.create({firstName, lastName, age, email});
        let user = newUser.toJSON();
        console.log(newUser.toJSON());
    } catch (err) {
        console.log(err);
    }
}

//makeUser('Nicolas', 'Tran', 1000, 17, 'nicholas.tran@yahoo.com');

async function findOrCreateUser(name, age, email) {
    try {
        const [user, created] = await User.findOrCreate({
            where: { name },
            defaults: { age, email }
        });

        console.log('USER:', user); //object
        console.log('WAS CREATED:', created); //true, false

    } catch (error) {
        console.log(err);
    }
}

// findOrCreateUser('Cal Clemmer', 24, 'cal@email.com');
// findOrCreateUser('Sharlene Imperial', 24, 'sharleneimperial@email.com');


//SELECT *
//FROM "Users"
//WHERE name = 'Sharlene Imperial';

// READ
async function fetchUserByName(name) {
    try {
        const foundUser = await User.findOne({
            where: { name }
        });
            console.log(foundUser);
    } catch (err) {
        console.log(err);
    }
}
//fetchUserByName('Sharlene Imperial');

async function fetchAllUsers() {
    try {
        const allUsers = await User.findAll({});
        //console.log(allUsers);

        const parsedUsers = await allUsers.map(u => u.toJSON());
        console.log(parsedUsers);

       // res.render('users/index', { users: parsedUsers });
        
    } catch (err) {
        console.log(err);
    }
} 
fetchAllUsers();

// Update
async function updateUser(firstName, lastName, email, age) {
    try {
        const numberOfRowsUpdate = await User.update({ email, age }, {
            where: { firstName, lastName }
        });
        console.log(numberOfRowsUpdate);
    } catch (err) {
        console.log(err);
    }
} 
// updateUser('Sharlene', 'Imperial', 'sharlene_imperial@yahoo.com', 3000);

//DELETE

async function deleteUser(email) {
    try {
    let deleteUserData = await User.destroy({
        where: { email }
    });
    console.log(deleteUserData);
    } catch (error) {
        console.log(error);
    }
} 

deleteUser('sharlene_imperial@yahoo.com');