const Emitter = require('./Emitter');

const greet = new Emitter();

greet.on('greet', () => {
    console.log('Greent event occured');
});

greet.on('greet', () => {
    console.log('Greent event executed');
});

greet.emit('greet');