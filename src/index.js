const prompt = require('prompt-sync')({ sigint: true });

const ScooterApp = require('./ScooterApp');
const User = require('./User');

// 1. create new app
const app = new ScooterApp();
console.log('New Scooter App', app);

// 2. add scooters to stations
app.createScooter('Queens');
app.createScooter('Manhattan');
app.createScooter('Brooklyn');
app.createScooter('Queens');
app.createScooter('Manhattan');
app.createScooter('Brooklyn');

// 3. retrieve scooters
const scooter1 = app.getScooter(1);
const scooter2 = app.getScooter(2);

// ********* Prompt Sync ********* //

let user;

const welcome = prompt(
  `Welcome to Rent-a-Scooter! Would you like to register for a new account? Type in 'yes' or 'no' `
);

if (welcome === 'yes') {
  // 1. register new user with input
  const username = prompt('Type in your new username: ');
  const password = prompt('Type in your new password: ');
  const age = prompt('What is your age? ');

  user = app.registerUser(username, password, age);
}

const login = prompt(`Are you ready to login? Type 'yes' or 'no'`);

if (login === 'yes') {
  try {
    const username = prompt('Type in username: ');
    const password = prompt('Type in password: ');
    app.loginUser(username, password);
  } catch (error) {
    console.log(error.message);
  }
} else return;

const rent = prompt(
  `Would you like to rent a scooter? Please type 'yes' or 'no' `
);

if (rent === 'yes') {
  console.log(app.rentScooter(scooter1, user));
}

app.print();

// todo
// 1. error messages in console
// 2. create functions instead of hardcoding to keep it organized
// 3. use arrows in the console instead of typing yes or no to avoid errors
// 4. clean up unnecessary console logs
// 5. implement charging scenario
