const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lel', (num1, num2) => {

    console.log('lel has occured');
    console.log(num1 + num2)


})

eventEmitter.emit('lel', 1, 3)


class Person extends EventEmitter {

    constructor(name) {

        super();
        this._name = name;



    }

    get name() {
        return this._name;


    }
}
let pedro = new Person('Pedro');
let christina = new Person('Christina')

pedro.on('name', () => {
    console.log(`my name is ${pedro.name}`)

})
pedro.emit('name')




christina.on('name', () => {
    console.log(`my name is ${christina.name}`)

})
christina.emit('name')



pedro.emit('name')
pedro.emit('name')
christina.emit('name')
christina.emit('name')
christina.emit('name')
christina.emit('name')
pedro.emit('name')
pedro.emit('name')