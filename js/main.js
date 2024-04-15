let myCar = {

    maxSpeed: 70,
    driver: "Net Ninja",
    drive: function(speed, time) {
        console.log(speed * time);
    }
}

myCar.drive(50,3);
console.log(myCar.maxSpeed);