const User = require('../src/User');
const ScooterApp = require('../src/ScooterApp');
const { describe, test, expect, beforeEach } = require('@jest/globals');
const Scooter = require('../src/Scooter');

// ScooterApp tests
describe('ScooterApp class tests', () => {
  let scooterApp;

  beforeEach(() => {
    scooterApp = new ScooterApp();
  });

  test('ScooterApp class creates an instance of a scooter app', () => {
    expect(scooterApp instanceof ScooterApp).toBe(true);
  });

  test('ScooterApp constructor initializes stations property', () => {
    expect(scooterApp.stations).toStrictEqual({
      Queens: [],
      Brooklyn: [],
      Manhattan: [],
    });
  });

  test('ScooterApp constructor initializes registeredUsers property', () => {
    expect(scooterApp.registeredUsers).toStrictEqual({});
  });
});

// User registration tests
describe('registerUser method tests', () => {
  let scooterApp;

  beforeEach(() => {
    scooterApp = new ScooterApp();
  });

  test('Should return instance of User for valid registration', () => {
    const newUser = scooterApp.registerUser('Joe Bloggs', 'test123', 21);
    expect(newUser).toBeInstanceOf(User);
  });

  test('Should reject registration for underage user', () => {
    expect(() => scooterApp.registerUser('Lisa', '1234', 17)).toThrow(
      'user is too young to register'
    );
  });

  test('Should prevent duplicate registration', () => {
    scooterApp.registerUser('Mar', '1234', 29);
    expect(() => scooterApp.registerUser('Mar', '1234', 29)).toThrow(
      'User is already registered..'
    );
  });
});

// User login tests
describe('loginUser & logoutUser method tests', () => {
  let scooterApp;

  beforeEach(() => {
    scooterApp = new ScooterApp();
    scooterApp.registerUser('Mar', '1234', 29);
  });

  test('Should log in a registered user successfully', () => {
    const loginMessage = scooterApp.loginUser('Mar', '1234');
    expect(loginMessage).toBe('user has been logged in');
  });

  test('Should reject login for unregistered user', () => {
    const loginMessage = scooterApp.loginUser('UnregisteredUser', 'pass');
    expect(loginMessage).toBe('user is not registered...');
  });

  test('Should reject login with incorrect password', () => {
    const loginMessage = scooterApp.loginUser('Mar', 'wrongpassword');
    expect(loginMessage).toBe('Username or Password was incorrect');
  });

  test('logoutUser() should log a user out successfully', () => {
    scooterApp.loginUser('Mar', '1234');
    scooterApp.logoutUser('Mar');
  });
});

describe('scooter actions method tests', () => {
  let scooterApp;
  let user;
  let scooter;

  beforeEach(() => {
    scooterApp = new ScooterApp();
    user = scooterApp.registerUser('Mar', '1234', 29);
    scooter = new Scooter('Queens');
  });

  test('createScooter() successfully creates a scooter instance and throws error if station doesnt exist', () => {
    const message = scooterApp.createScooter('Queens');
    expect(message).toBe('new scooter created...');
    expect(() => scooterApp.createScooter('Bronx')).toThrow(
      'no such station exists...'
    );
  });

  test('dockScooter() successfully docks a scooter at the designated station or throws error if its docked already/if station doesnt exist', () => {
    const message = scooterApp.dockScooter(scooter, 'Queens');
    expect(message).toBe('scooter is docked');

    const messageAlreadyThere = scooterApp.dockScooter(scooter, 'Queens');
    expect(messageAlreadyThere).toBe('scooter already at station');

    const messageStation = scooterApp.dockScooter(scooter, 'Bronx');
    expect(messageStation).toBe('no such station exists...');
  });

  test('rentScooter() successfully rents a scooter to a user by removing it from the stations list of scooters and assigning it to the user', () => {
    scooterApp.stations.Queens.push(scooter);
    const message = scooterApp.rentScooter(scooter, user);
    expect(message).toBe('scooter has been rented');
    // scooterApp.print();
  });
});
