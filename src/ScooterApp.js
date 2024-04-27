const Scooter = require('./Scooter');
const User = require('./User');

class ScooterApp {
  constructor() {
    this.stations = {
      Queens: [],
      Brooklyn: [],
      Manhattan: [],
    };
    this.registeredUsers = {};
  }

  registerUser(username, password, age) {
    let newUser = new User(username, password, age);
    if (!(newUser.username in this.registeredUsers) && age >= 18) {
      this.registeredUsers[newUser.username] = newUser;
      console.log('User has been registered successfully');
      return newUser;
    } else if (newUser.age < 18) {
      throw new Error('user is too young to register');
    } else {
      throw new Error('User is already registered..');
    }
  }

  loginUser(username, password) {
    if (username in this.registeredUsers) {
      let user = this.registeredUsers[username];
      try {
        user.login(password);
        return 'user has been logged in';
      } catch (error) {
        return error.message;
      }
    } else {
      return 'user is not registered...';
    }
  }

  logoutUser(username) {
    let user = this.registeredUsers[username];
    user.logout();
  }

  createScooter(station) {
    let newScooter = new Scooter(station);
    if (station in this.stations) {
      this.stations[station].push(newScooter);
      return 'new scooter created...';
    } else {
      throw new Error('no such station exists...');
    }
  }

  dockScooter(scooter, station) {
    const scooterList = this.stations[station];

    if (station in this.stations) {
      const index = scooterList.findIndex(
        (scooter) => scooter.station === station
      );
      if (index !== -1) {
        return 'scooter already at station';
      } else {
        this.stations[station].push(scooter);
        return 'scooter is docked';
      }
    } else {
      return 'no such station exists...';
    }
  }

  rentScooter(scooter, user) {
    for (const station in this.stations) {
      // find scooter and remove it
      let scooterList = this.stations[station];

      const index = scooterList.findIndex(
        (dockedScooter) => dockedScooter.serial === scooter.serial
      );

      if (index !== -1) {
        // remove scooter from list
        const [scooter] = scooterList.splice(index, 1);
        // assign to user
        scooter.user = user;
        return 'scooter has been rented';
      }
    }

    return 'scooter already rented';
  }

  print() {
    console.log('Registered Users: ', this.registeredUsers);
    console.log('List of Stations and their Scooters');
    for (const station in this.stations) {
      const scooterList = this.stations[station];
      console.log(`Station: ${station} | Num Scooters: ${scooterList.length}`);
      scooterList.map((scooter) => {
        console.log(`Scooter: ${scooter.serial}`);
        console.log(scooter);
      });
    }
  }
}

module.exports = ScooterApp;
