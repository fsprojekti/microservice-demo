import * as IPFS from "ipfs-core";
import fs from "fs";




async function main() {
  //start node
  //const node = await IPFS.create()

  //add to ipns
  const addr = '/ipfs/QmbeGxQVVH7UQqntpM7aneQs4EmFWcuikBR51rcSQoMAPo'
  const res = await ipfs.name.publish(addr)
  console.log(res)

  //add file
  /*
  const file = {
   path: "/upload/upload.txt",
   content: "test1.txt",
  }
  const fileAdded = await node.add(file); */

  //retrieve file content
  /*
  const fileRetrieved = [];
  for await (const chunk of node.cat(fileAdded.cid)) {
    fileRetrieved.push(chunk);
  } */

 //console.log("Added file:", fileAdded.path, fileAdded.cid);
 //console.log("Retrieved file:", fileRetrieved.toString());
};



//main();
