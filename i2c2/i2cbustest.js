const i2c = require('i2c-bus');

const sensor = 0x08;
const i2c1 = i2c.openSync(1);
let hello = i2c1.readSync(sensor, 6);
console.log(hello);
