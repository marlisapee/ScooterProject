const ScooterApp = require('./ScooterApp');
const User = require('./User');

const app = new ScooterApp();
console.log('New Scooter App', app);

// 1. create new users
let user1 = new User('Phil Dunphy', 'password', 45);
let user2 = new User('Claire Dunphy', 'password', 45);
let user3 = new User('Luke Dunphy', 'password', 20);

// 2. register users to scooter app
app.registerUser(user1.username, user1.password, user1.age);
app.registerUser(user2.username, user2.password, user2.age);
app.registerUser(user3.username, user3.password, user3.age);

// 3. add scooters to stations
app.createScooter('Queens');
app.createScooter('Manhattan');
app.createScooter('Brooklyn');
app.createScooter('Queens');
app.createScooter('Manhattan');
app.createScooter('Brooklyn');

// console.log(app.print());

// 4. retrieve scooters
const scooter1 = app.getScooter(1);
const scooter2 = app.getScooter(2);

console.log('scooter 1:', scooter1);
console.log('scooter 2:', scooter2);

// 5. login users
console.log((user1 = app.loginUser(user1.username, user1.password)));
console.log((user2 = app.loginUser(user2.username, user2.password)));

// 6. rent scooters to users
console.log(app.rentScooter(scooter1, user1));
console.log(app.rentScooter(scooter2, user2));

// 7. dock scooters
console.log(app.dockScooter(scooter1, 'Queens'));
console.log(app.dockScooter(scooter2, 'Manhattan'));
app.print();
