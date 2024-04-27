const Scooter = require('../src/Scooter');
const { describe, it, test, expect, beforeEach } = require('@jest/globals');
const User = require('../src/User');

describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
  test('Scooter class should initialize station, user, serial, charge, and isBroken properties', () => {
    const scooter = new Scooter('New York');
    expect(scooter.station).toBe('New York');
    expect(scooter.user).toBeNull();
    expect(scooter.serial).toBe(2);
    expect(scooter.charge).toBe(100);
    expect(scooter.isBroken).toBeFalsy();
  });
});

// Method tests
describe('scooter methods', () => {
  // tests here!
  let scooter;
  let user;

  beforeEach(() => {
    scooter = new Scooter('New York');
    user = new User('Mar', 'password', 29);
  });

  // rent method
  test('rent() method successfully returns correct string', () => {
    scooter.user = user.username;
    expect(scooter.rent(user)).toBe(
      `User ${user.username} has rented this scooter successfully!`
    );

    scooter.charge = 15;
    expect(() => scooter.rent(user)).toThrowError(
      'Scooter needs to be charged or repaired!'
    );
  });
  // dock method
  test('dock(station) method successfully returns scooter to station and sets user to null', () => {
    scooter.dock('Brooklyn');
    expect(scooter.station).toBe('Brooklyn');
    expect(scooter.user).toBeNull();
  });
  // requestRepair method
  // charge method
});
