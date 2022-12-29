const { Buffer } = require("buffer");

let T = 27.0;
let buf = Buffer.allocUnsafe(4);
buf.writeFloatLE(T);

console.log(buf);
