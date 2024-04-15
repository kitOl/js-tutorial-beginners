let myCar = {
  maxSpeed: 70,
  driver: "Net Ninja",
  drive: function (speed, time) {
    console.log(speed * time);
  },
  test: function () {
    console.log(this);
  },
  logDriver: function() {
    console.log("driver name is " + this.driver);
  }
};

let newCar = {
  maxSpeed: 90,
  driver: "Netty",
  drive: function (speed, time) {
    console.log(speed * time);
  },
  test: function () {
    console.log(this);
  },
  logDriver: function() {
    console.log("driver name is " + this.driver);
  }
};

myCar.drive(50, 3);
console.log(myCar.maxSpeed);
myCar.test();
myCar.logDriver();

newCar.drive(50, 3);
console.log(newCar.maxSpeed);
newCar.test();
newCar.logDriver();