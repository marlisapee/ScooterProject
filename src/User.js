class User {
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password) {
    if (password === this.password) {
      this.loggedIn = true;
      console.log('logged in: ', this.username, this.loggedIn);
      return 'Logged in successfully';
    } else {
      throw new Error('Username or Password was incorrect');
    }
  }

  logout() {
    this.loggedIn = false;
    return 'Logged out successfully';
  }
}

module.exports = User;
