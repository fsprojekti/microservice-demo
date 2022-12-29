import * as IPFS from "ipfs-core";
import all from "it-all";
import { Buffer } from 'node:buffer';

const INFURA_ID = '2Eif4Vlc78U40KoNKAoS56tT0cA';
const INFURA_SECRET_KEY = 'f1eb59b679e746dd359efa2487a35aa8';
const auth = 'Basic ' + Buffer.from(INFURA_ID + ':' + INFURA_SECRET_KEY).toString('base64');

// node
async function ipfsClient() {
  //start infura node
  const client = await IPFS.create(
    {
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
      headers: {
        authorization: auth,
      },
    });
    return client;
}
// funkcije
async function version() {
  //start node
  let ipfs = await ipfsClient();
  //check version
  const version = await ipfs.version();
  //print
  console.log("Version:", version.version);
}
async function list(path) {
  //start node
  let ipfs = await ipfsClient();
  //list files in directory
  let list = await all(ipfs.files.ls(path));
  for await (const file of ipfs.files.ls(path)) {
    console.log(file.name);
  }

}
async function read(path, content) {
  //start node
  let ipfs = await ipfsClient();
  //read from file
  const chunks = [];
  for await (const chunk of ipfs.files.read(path)) {
    chunks.push(chunk)
  }
  console.log(chunks.toString());
}
async function write(path, content) {
  //start node
  let ipfs = await ipfsClient();
  //add files/dir
  await ipfs.files.write(path, content, {create: true});
  //print
  console.log('Uploaded!')

}
async function remove(path) {
  //start node
  let ipfs = await ipfsClient();
  //remove files/dir
  await ipfs.files.rm(path, { recursive: true });
  //print
  console.log('Removed!')
}

//write('/test2.txt', 'peepo')
//read('/test1.txt');
//version();
list('/');
