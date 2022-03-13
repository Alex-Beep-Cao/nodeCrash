// file system- build in file system module
const file = require("fs");

// Read file
// fs.readfile() take 2 args, first one is the path , second is the function which will run
// when finish read the file
// readFile is a aysncs function will not block other function after it

file.readFile("./doc/test2", (error, data) => {
  // the second args is a function, take 2 args first is error and second is data
  if (error) {
    console.log(error);
  }
  console.log(data);
  // console.log(data) will print a buffer, if we want to see the text just just console.log(data.toString())
});

// Write file
// take 3 args,
//first is path(if has this txt file, then modifiy if the file don't exist, then create)
//secomd is content you want to write
//thrid is a call function when finished writing
//writeFile is a aysncs function will not block other function after it
file.writeFile("./doc/test2", "hello world", () => {
  console.log("writtern");
});

// Directory
// 2 args, first is path, second is function which take error arg, it will run after creation finish

// check  existance can used in file or dir
if (file.existsSync("./assest")) {
}

file.mkdir("./assest", (error) => {
  if (error) {
    console.log(error);
  }
  console.log("the dir created");
});

// Delete dir
//the call back function will be called
// file.rmdir(path, call back fucntion)

// Delete file
file.unlink("path", "callback function same as above");
