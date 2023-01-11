import { Buffer	 } from 'buffer';
import rpio from 'rpio';



export function getTemp() {

    let buf1 = Buffer.alloc(12, 0x00); // 2 x 4-byte(float)

    rpio.i2cBegin(0x20); //master address?
    rpio.i2cSetBaudRate(100000);
    rpio.i2cSetSlaveAddress(0x08);
    rpio.i2cRead(buf1, 12); // preberi 4 byte (arduino float)


    const T1 = buf1.readFloatLE();
    const T2 = buf1.readFloatLE(4);
    const T3 = buf1.readFloatLE(8);
    return [T1, T2, T3]
    
}

export function getFlow_1() {

    let buf2 = Buffer.alloc(8, 0x00); // 2 x 4-byte(float)

    rpio.i2cBegin(0x20); //master address?
    rpio.i2cSetBaudRate(100000);
    rpio.i2cSetSlaveAddress(0x09);
    rpio.i2cRead(buf2, 8); // preberi 4 byte (arduino float)

    const F1 = buf2.readFloatLE();
    const F2 = buf2.readFloatLE(4);
    return [F1, F2];
}

export function getFlow_2() {

    let buf3 = Buffer.alloc(8, 0x00); // 2 x 4-byte(float)

    rpio.i2cBegin(0x20); //master address?
    rpio.i2cSetBaudRate(100000);
    rpio.i2cSetSlaveAddress(0x0a);
    rpio.i2cRead(buf3, 8); // preberi 4 byte (arduino float)

    const F1 = buf3.readFloatLE();
    const F2 = buf3.readFloatLE(4);
    return [F1, F2];
}

export function slaveSender(Temp) {
	let buf = Buffer.allocUnsafe(4);
	buf.writeFloatLE(Temp);
	
	rpio.i2cBegin(0x20); //master address?
	rpio.i2cSetBaudRate(100000);
	rpio.i2cSetSlaveAddress(0x08);
	rpio.i2cwrite(buf);
}