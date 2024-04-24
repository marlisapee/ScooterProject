class User {
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password) {
    if (password === this.password) {
      console.log('Logged in successfully');
    } else {
      throw new Error('Username or Password was incorrect');
    }
  }

  logout() {
    console.log('Logged out successfully');
  }
}

module.exports = User;
