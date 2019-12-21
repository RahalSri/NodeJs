const greet = require('./greet');

greet.greet();

greet.greeting = 'Holoa Moular';
// Here now it returns cached module.
const greet2 = require('./greet');
greet2.greet();