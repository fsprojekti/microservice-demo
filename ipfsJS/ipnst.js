import * as IPFS from 'ipfs';

const ipfs = await IPFS.create()
const { cid } = await ipfs.add('Hello world')
console.info(cid)
// const keys = await ipfs.key.list();
// console.log(keys)
// const result = await ipfs.name.pubsub.subs()
// console.log(result.enabled)
const res = await ipfs.name.publish(cid) //vrne js ipfs peer id?? mogoče imam že kaj shranjeno na ta ipfs?
console.log(res.name)

await ipfs.stop()