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
const providerUrl = process.env.PROVIDER_URL || 'http://localhost:8545';

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
        mainnet: {
            url: 'https://rpc.pulsechain.com',
            accounts: {
                mnemonic: mnemonicPhrase,
                path: 'm/44\'/60\'/0\'/0',
                initialIndex: 0,
                count: 1,
                passphrase: mnemonicPassword,
            },
            network_id: '*',
        },
        testnet: {
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
};
