const { Buffer } = require("buffer");
const rpio = require("rpio");


function getTemp() {

    let buf1 = Buffer.alloc(12, 0x00); // 2 x 4-byte(float)

    rpio.i2cBegin(0x20); //master address?
    rpio.i2cSetBaudRate(100000);
    rpio.i2cSetSlaveAddress(0x08);
    rpio.i2cRead(buf1, 12); // preberi 4 byte (arduino float)

    console.log(buf1);
    console.log(buf1.readFloatLE());
    console.log(buf1.readFloatLE(4));
    console.log(buf1.readFloatLE(8));
    
}


function getFlow_1() {

    let buf2 = Buffer.alloc(8, 0x00); // 2 x 4-byte(float)

    rpio.i2cBegin(0x20); //master address?
    rpio.i2cSetBaudRate(100000);
    rpio.i2cSetSlaveAddress(0x09);
    rpio.i2cRead(buf2, 8); // preberi 4 byte (arduino float)

    console.log(buf2);
    console.log(buf2.readFloatLE());
    console.log(buf2.readFloatLE(4));

}


function getFlow_2() {

    let buf3 = Buffer.alloc(8, 0x00); // 2 x 4-byte(float)

    rpio.i2cBegin(0x20); //master address?
    rpio.i2cSetBaudRate(100000);
    rpio.i2cSetSlaveAddress(0x0a);
    rpio.i2cRead(buf3, 8); // preberi 4 byte (arduino float)

    console.log(buf3);
    console.log(buf3.readFloatLE());
    console.log(buf3.readFloatLE(4));
}
