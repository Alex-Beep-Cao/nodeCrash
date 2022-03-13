// global object
//console.log(global);

// we can just write function name
// global.setTimeout(() => {

// }, timeout) === setTimeout(()=>{},timeout)

// setTimeOut only run once but setInterval run many times depands on the timeout

setTimeout(() => {
  console.log("Only once");
  // we can setInterval also can clearInterval
  clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
  console.log("many times");
}, 1000);

// path with and without file name
console.log(__dirname);
console.log(__filename);
