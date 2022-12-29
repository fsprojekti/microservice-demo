const { Buffer } = require("buffer");
const rpio = require("rpio");


let T = 27.0;
let buf = Buffer.allocUnsafe(4);
buf.writeFloatLE(T);


rpio.i2cBegin(0x20); //master address?
rpio.i2cSetBaudRate(100000);
rpio.i2cSetSlaveAddress(0x08);
rpio.i2cwrite(buf);
