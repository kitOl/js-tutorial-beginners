let myCurrentDate = new Date();
console.log(myCurrentDate);

let myBirthday = new Date(1970, 9, 10);
console.log(myBirthday);
// 

let myFutureDate = new Date(2040, 1, 22);
console.log(myFutureDate);

// DATE METHODS

// get the month of the date (0-11)
console.log(myBirthday.getMonth());

// get the full year (YYYY)
console.log(myBirthday.getFullYear());

// get the date of month (1-31)
console.log(myBirthday.getDate());

// get the day of week (0-6)
console.log(myBirthday.getDay());

// get the hour of the date (0-23)
console.log(myBirthday.getHours());

// get the number of milliseconds since 1st Jan 1970
console.log(myBirthday.getTime());
console.log(myCurrentDate.getTime());

if (myBirthday.getTime() == myCurrentDate.getTime()) {
    console.log("the dates are equals");
} else {
    console.log("the dates are NOT equals");
}