const Window = require('window');
global.window = new Window();

//const mod = require('./script');
require('./script');

console.log(window.myFunc());