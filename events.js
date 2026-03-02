const EventEmitter = require('events');

// Create an object of EventEmitter
const event = new EventEmitter();

// Callback function
function greetUser(name) {
    console.log("Hello " + name + ", welcome to Node.js Events!");
}

// Register event
event.on('greet', greetUser);

// Emit event (trigger)
event.emit('greet', 'Anish');
