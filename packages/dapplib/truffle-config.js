require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind puppy hunt beauty flip gather'; 
let testAccounts = [
"0x94d630251e65fe846211a694c5205bb000f4bbe3ad0c0dca503a08ca97f88c74",
"0xb52115a94b49f9b0a829fdb5360ab80186a61262af3a3def22d10befebac4103",
"0x1d698d79a8e3f5b04b88acc15a523cca42b36751d08cb35bd8c30eb940b475e8",
"0x2a2714e760565268276a0476dd1f377c7c1ab3fba5067dba0219775e1b42748d",
"0x0700bb36729c4038f6bb6b2d36d5fe3fa7baafdc4e48131eb593734226e8b6f0",
"0x7e382ec9f603ef86783810469451ee6e03727afde11cf7ce8e491823ea4c2a20",
"0xf85124984ad5108a509cc8bd998228eeeef0d7eb592f4356422968d1faa7e02a",
"0xed7b39b6c2d90fc7ce60975d93c07c04a8bd0b81ec2a598934c256c96bda127f",
"0x705a872787056737e5044a6be774da63bcfa0fd2b4b3b2c66450f55cc782b1db",
"0xfdb7faf693fa2c068a55ea3af73aaa8dd9dda2bc372e239053c9548f49b35ad6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

