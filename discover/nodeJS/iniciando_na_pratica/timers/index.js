//timeout
const timer = setTimeout(() => {
  console.log("done!");
}, 3000);
clearTimeout(timer);
console.log("before");

//interval
const interval = setInterval(() => {
  console.log("checking");
}, 1000);
setTimeout(() => {
  clearInterval(interval);
}, 3000);
