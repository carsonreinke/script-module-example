//Create a global namespace like browsers have
const Window = require('window');
global.window = new Window();

//Nothing is exported, since global namespace is modified
//const mod = require('./script');
require('./script');

console.log(window.myFunc());