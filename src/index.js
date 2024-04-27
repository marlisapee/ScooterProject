const Scooter = require('./Scooter');
const ScooterApp = require('./ScooterApp');
const User = require('./User');

const app = new ScooterApp();
console.log('New Scooter App', app);

// new users
const user1 = new User('Phil Dunphy', 'password', 45);
const user2 = new User('Claire Dunphy', 'password', 45);
const user3 = new User('Luke Dunphy', 'password', 20);

// register users to scooter app
app.registerUser(user1.username, user1.password, user1.age);
app.registerUser(user2.username, user2.password, user2.age);
app.registerUser(user3.username, user3.password, user3.age);

console.log(app.print());

// add scooters to stations
app.createScooter('Queens');
app.createScooter('Manhattan');
app.createScooter('Brooklyn');
app.createScooter('Queens');
app.createScooter('Manhattan');
app.createScooter('Brooklyn');

console.log(app.print());
