const User = require('./User');

class Scooter {
  static nextSerial = 1;

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = nextSerial;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user) {
    if (this.charge > 20 && !this.isBroken) {
      return `User ${user} has rented this scooter successfully!`;
    } else {
      throw new Error('Scooter needs to be charged or repaired!');
    }
  }

  dock(station) {
    this.user = null;
    console.log(`Scooter has been returned to station ${station}`);
  }
}
