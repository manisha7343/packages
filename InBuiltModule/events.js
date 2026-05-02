/*

Event means something heppend (click.\, req, login etc)

*/

const EventEmitter = require('events');

const event = new EventEmitter();

event.on('greet', () => {
  console.log("Hello event triggered ho gaya");
});

event.emit('greet')

event.on('test', () => console.log("First"));
event.on('test', () => console.log("Second"));

event.emit('test');