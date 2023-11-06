// Support truffle-style test setup
require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-truffle5');
require('dotenv').config();

// Importing babel to be able to use ES6 imports
require('@babel/register')({
    presets: [
        ['@babel/preset-env', {
            'targets': {
                'node': '16',
            },
        }],
    ],
    only: [/test|scripts/],
    retainLines: true,
});
require('@babel/polyfill');

// Config from environment
const mnemonicPhrase = process.env.MNEMONIC || 'test test test test test test test test test test test junk';
const mnemonicPassword = process.env.MNEMONIC_PASSWORD;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            {
                version: '0.7.6',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 15000,
                    },
                },
            },
            {
                version: '0.8.20',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ]
    },
    networks: {
        hardhat: {},
        localhost: {
            host: '127.0.0.1',
            port: 8545,
            network_id: '*',
        },
        pulsemainnet: {
            url: 'https://rpc.pulsechain.com',
            accounts: {
                mnemonic: mnemonicPhrase,
                path: 'm/44\'/60\'/0\'/0',
                initialIndex: 0,
                count: 1,
                passphrase: mnemonicPassword,
            },
            gasPrice: 600000000000000,
            network_id: '*',
        },
        pulsetestnet: {
            url: 'https://rpc-testnet-pulsechain.g4mm4.io',
            accounts: {
                mnemonic: mnemonicPhrase,
                path: 'm/44\'/60\'/0\'/0',
                initialIndex: 0,
                count: 1,
                passphrase: mnemonicPassword,
            },
            network_id: '*',
        },
        goerli: {
            url: 'https://rpc.ankr.com/eth_goerli',
            accounts: {
                mnemonic: mnemonicPhrase,
                path: 'm/44\'/60\'/0\'/0',
                initialIndex: 0,
                count: 1,
                passphrase: mnemonicPassword,
            },
            network_id: '*',
        },
    },
    paths: {
        sources: './contracts',
        tests: './test',
        cache: './cache',
        artifacts: './artifacts',
    },
    mocha: {
        timeout: 0,
    },
    etherscan: {
        apiKey: {
            pulsemainnet: "0000000000000000000000000000000000",
            pulsetestnet: "0000000000000000000000000000000000",
            goerli: "3TEWVV2EK19S1Y6SV8EECZAGQ7W3362RCN",
        },
        customChains: [
            {
                network: "pulsemainnet",
                chainId: 369,
                urls: {
                    apiURL: "https://scan.pulsechain.com/api",
                    browserURL: "https://scan.pulsechain.com"
                }
            },
            {
                network: "pulsetestnet",
                chainId: 943,
                urls: {
                    apiURL: "https://scan.v4.testnet.pulsechain.com/api",
                    browserURL: "https://scan.v4.testnet.pulsechain.com"
                }
            },
            {
                network: "goerli",
                chainId: 5,
                urls: {
                    apiURL: "https://api-goerli.etherscan.io/api",
                    browserURL: "https://goerli.etherscan.io"
                }
            },
        ]
    },
};
