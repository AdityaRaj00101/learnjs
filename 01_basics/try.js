const AccounId = 12235
let accountName = "John Doe"
var accountEmail = "adityarajsahu552@gmail.com"
accountcity = "Jaiput";

let myAccountInfo;

// yaha per ver kaa use nhi karte hai kyuki block scope me nhi hota hai
// const use karte hai kyuki constant value hoti hai
// let use karte hai kyuki block scope me hota hai
// let aur const kaa hi use kar place per karna hai 

console.log(AccounId);
console.log(accountName);
console.log(accountEmail);
console.log(accountcity);
console.log(myAccountInfo);

// isse hum table format me data dekh skte hai
console.table([AccounId, accountName, accountEmail, accountcity, myAccountInfo]);