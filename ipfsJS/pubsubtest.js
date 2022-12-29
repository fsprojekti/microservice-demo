import { create } from "ipfs-http-client";

//ipfs instance
const ipfs = create()

const topic = 'test1'


async function receiveMsg(msg) {
    let decMsg = new TextDecoder().decode(msg.data)
    console.log(decMsg)
    console.log('msg recieved!!!')
    await ipfs.pubsub.unsubscribe(topic)

}
await ipfs.pubsub.subscribe(topic, receiveMsg)

// const topics = await ipfs.pubsub.ls()
// console.log(topics)

// await ipfs.pubsub.unsubscribe(topic, receiveMsg)

