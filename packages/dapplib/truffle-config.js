require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food stone random sister coil gentle light army general'; 
let testAccounts = [
"0x0398514a45b28ddc1db4663b6c2ef705782d896a7bf9c1c16482e73da192e565",
"0xa7eb50cd792a747afb3a716df0ae4055bd8652d59405e69898e82646e00fed9b",
"0xe5bf05d8da82b76f413bd3299cd489b71138464b1a6ece014a2a859896c41f45",
"0x29df7c6c16bf25a93d76ca30aed9d446d821e0a528db8782ec05f5b666ba9d3e",
"0x9707b7bab3d59cd8e9876a68dfd6865545f087371923853288c48423672630c7",
"0x99579e6fd7adf1cb8fffee5e92378a67d69d7491f334757d41d13c01cd08572e",
"0x16e85a911e26438da1136e52ed221fd734600d58c496510ac41ff3e0a42111ed",
"0x039dd1f7ae5bf7d2a21e9f64250a7eba83bb78b62770cd6102f9fab76fb9b380",
"0x363a778dc3e96c8cf66dc4a21f6483366967af2045e87fdb1b98b79ca5e9fced",
"0xa0829f9ba209352f0515e67b88bfb1e229e0bfa7c91601b79bee0e6eead020bb"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

