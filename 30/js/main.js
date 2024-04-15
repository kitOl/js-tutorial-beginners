let myCar = {
  maxSpeed: 70,
  driver: "Net Ninja",
  drive: function (speed, time) {
    console.log(speed * time);
  },
  logDriver: function () {
    console.log("driver name is " + this.driver);
  },
};

// CONSTRUCTOR FUNCTION

let Car = function (maxSpeed, driver) {
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function (speed, time) {
    console.log(speed * time);
  };
  this.logDriver = function () {
    console.log("driver name is " + this.driver);
  };
};

let myCar2 = new Car(90, "Netty");
console.log(myCar2);
myCar2.logDriver();
