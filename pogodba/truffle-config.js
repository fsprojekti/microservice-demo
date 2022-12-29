const fs = require('fs');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = '0e5be60b60cf4f2e86421a82bd1e7187';
const mnemonic = 'ladder science olive skate leave catalog unveil napkin peace mobile exhibit food';
module.exports = {
  networks: {
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraKey}`),
      network_id: 5,
      confirmations: 2,
      timeoutBlocks: 200,
      gasPrice: 100000000000000000,
      //from:'0x83c59bf5963342ff53fce2feba8f798de1057186',
      skipDryRun: true
    },
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.17"
    }
  }
};
