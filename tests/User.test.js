const User = require('../src/User');
const { describe, it, test, expect, beforeEach } = require('@jest/globals');

let user;
describe('User property tests', () => {
  beforeEach(() => {
    user = new User('Joe Bloggs', 'test123', 21);
  });

  test('User class should create a user instance', () => {
    expect(user instanceof User).toBe(true);
  });
  test('username should be a string', () => {
    expect(typeof user.username).toBe('string');
  });

  test('password should be a string', () => {
    expect(typeof user.password).toBe('string');
  });

  // test age
  test('age should be a number', () => {
    expect(typeof user.age).toBe('number');
  });
  test('loggedIn should be a boolean', () => {
    expect(typeof user.loggedIn).toBe('boolean');
  });
});

describe('User method tests', () => {
  beforeEach(() => {
    user = new User('Joe Bloggs', 'test123', 21);
  });

  test('login() method should log the user in successfully', () => {
    expect(user.login('test123')).toBe('Logged in successfully');
  });

  test('logout() method should log the user out successfully', () => {
    expect(user.logout()).toBe('Logged out successfully');
  });
});

// test login

// test logout
