const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('waterfull',()=>{
    console.log('Turn of moter');
    setTimeout(() => {
        
        console.log('Please Turn of moter');
    }, 3000);
});

console.log('Script Run');
myEmitter.emit('waterfull');
console.log('Script Still Run');