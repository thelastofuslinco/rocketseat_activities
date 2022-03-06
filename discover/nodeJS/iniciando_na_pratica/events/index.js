var events = require("events");
var util = require("util");

//  #1
var eventEmitter = new events.EventEmitter();
eventEmitter.once("my_event", () => {
  console.log("data received successfully.");
});
eventEmitter.emit("my_event");
eventEmitter.emit("my_event");

//  #2
function Character(name) {
  this.name = name;
}

util.inherits(Character, eventEmitter);

const chapolin = new Character("Chapolin");
chapolin.on("help", () => {
  console.log(`Eu ${chapolin.name}!!!`);
});

console.log("Oh! E agora, quem podera me salvar?");
chapolin.emit("help");
