import Web3 from "web3";
import HDWalletProvider from "@truffle/hdwallet-provider" ;
import { create } from "ipfs-http-client";


const infuraEndpoint = "https://goerli.infura.io/v3/0e5be60b60cf4f2e86421a82bd1e7187";
const mnemonicSeed = "ladder science olive skate leave catalog unveil napkin peace mobile exhibit food";
const acc1Add = "0x83c59bf5963342fF53FCE2FeBA8F798DE1057186"
const acc2Add = "0x1EC9A0D1742b42827235f5dA0FCa7EeD538488f9"
const privKey1 = "fb3e2166a5b8bc226c93adcf0ee7c4e2f15637710ff0bab890910fdc73a3afd5"
const privKey2 = "8954d12c670fce9ae4e7ca18c50cfe5761d8fa1310e448658c1dd0a0d5e00091"

const contAdd = "0xf7fd8fe75e404461d7dfcad4ea4b33ba69649d14";
const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "activate",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buyer",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cancel",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "confirm",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "guarantee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pay",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "seller",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "state",
		"outputs": [
			{
				"internalType": "enum ipns.State",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "value",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


async function getCont(key, contractAddress, abi) {
	const provider = new HDWalletProvider(key, infuraEndpoint);
	const web3 = new Web3(provider);
	const Contract = new web3.eth.Contract(abi, contractAddress);

	return Contract
}


async function activate(contract, account, price) {
	await contract.methods.activate().send({ from: account, value: price });
}

async function payit(contract, account, price) {
	await contract.methods.pay().send({ from: account, value: price }); //lahko acc zamenjam z seznamom iz contract objekta
	//ipfs pubsub subscribe
	const ipfs = create();
	const topic = "test1";
	async function receiveMsg(msg) {
		let decMsg = new TextDecoder().decode(msg.data)
		console.log(decMsg)
		console.log('msg recieved!!!')
		await ipfs.pubsub.unsubscribe(topic)
		//SHRANIMO MAGAR V ARRAY
		//ali pa direktna implementacija
	};
	await ipfs.pubsub.subscribe(topic, receiveMsg);
}

async function guarantee(contract, account) {
	await contract.methods.guarantee().send({ from: account });
	const ipfs = create();
	const topic = "test1";
	const msg = "ipns/nekineki";
	await ipfs.pubsub.publish(topic, msg);
}

async function confirm(contract, account) {
	//mogoče ta korak sploh ni nujen
	//ali pa tukaj šele preberemo iz ipfs
	await contract.methods.confirm().send({ from: account }); //lahko acc zamenjam z seznamom iz contract objekta

}

async function cancel(contract, account) {
	await contract.methods.cancel().send({ from: account });
}





//testing
//create contract instances
// const contract1 = getCont(privKey1, contAdd, abi);
// const contract2 = getCont(privKey2, contAdd, abi);
const price = 50000000000000000;
//old school 1
const provider = new HDWalletProvider(mnemonicSeed, infuraEndpoint);
const web3 = new Web3(provider);
const myContract = new web3.eth.Contract(abi, contAdd);
//console.log(myContract)

//console.log(contract1)
//cancel(myContract, acc1Add)
//activate(myContract, acc1Add, price)
payit(myContract, acc2Add, price)





//myContract.methods.cancel().send({from: acc1Add}).then(console.log);


//console.log(myContract.options.address);


//web3.eth.getAccounts().then(console.log);

// myContract.defaultAccount = acc1Add
// console.log(myContract.defaultAccount)





