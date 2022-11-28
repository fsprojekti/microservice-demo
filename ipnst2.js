import { create, globSource } from "ipfs-http-client";
import * as fs from "node:fs";

const ipnsKey = '/ipns/k51qzi5uqu5dhuka6q1tnztqpvy4eq02ng9quj24hp8yjz2ekpap63e1jiqxev'

//ipfs instance
const ipfs = create()

//add file to ipfs
// let cids = []
// for await (const file of ipfs.addAll(globSource('./ipnstest.txt', '*'))) {
//     cids.push(file.cid)
// }
// console.log(cids)

//publish to ipns, ipns name = peer id
// const res = await ipfs.name.publish(cids[0])
// console.log(res)



//read file
let data = []

for await (const chunk of ipfs.cat(ipnsKey)) {
  // chunks of data are returned as a Uint8Array, convert it back to a string
  data.push(chunk)
}
console.log(data.toString())

fs.writeFileSync('fstest.txt', data.toString())

//get files
// for await (const buf of ipfs.get('QmbMEKQW6svH1CxbQMi5RhpuqTf9CYePJzVHT5naCnenG5')) {
//     // do something with buf
// }

// for await (const buf of ipfs.get('QmQM43UESfCSSQfFAheJEq5jduc2fgx1HVX1Mi3zWC66uc')) {
//   console.log(buf.toString())
// }

//await ipfs.get('QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB')