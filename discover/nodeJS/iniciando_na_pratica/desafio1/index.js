const getFlags = require("./flags");

console.log(`oi ${getFlags("--name")}. ${getFlags("--greeting")}`);
