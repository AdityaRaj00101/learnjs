let score = "33";

console.log(score);
console.log(typeof score);

// convert the string number into number
// agar number nhi hai to NaN return karega
let valueInNUmber = Number(score);

// and also convert to float string or bigint

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0
console.log(valueInNUmber);
console.log(typeof valueInNUmber);

let isLoggedin = 1
let booleanIsLoggedin = Boolean(isLoggedin);
console.log(booleanIsLoggedin);
console.log(typeof booleanIsLoggedin);