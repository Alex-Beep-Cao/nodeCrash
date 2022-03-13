// require keywords means require info from other document which document export info
const test = require("./people");
// from people file, test is an object
// you can access by object.propo like test.people
console.log(test);

// OR you can destructual the object see example below
const { people, number } = require("./people");

// os module is build in module
const os = require("os");
