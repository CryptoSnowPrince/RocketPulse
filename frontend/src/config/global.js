import { pulsechain, goerli } from "wagmi/chains";
import eth_ic from "../assets/img/eth.png"
import usdt_ic from "../assets/img/usdt.svg"

export const IS_PRODUCT_MODE = false // TODO

export const contracts_mainnet = { // TODO Mainnet ethereum
    Main: "0xC8d994df027105d8e245659B2934d534F34b18CE",
};

export const contracts_testnet = { // TODO Testnet goerli
    Main: "0xC8d994df027105d8e245659B2934d534F34b18CE",
};

export const projectToken_mainnet = {
    name: 'RPLS',
    address: '0xd2A37C328059EcA94943db0A3E24425E57cCcCDA',
    decimals: 18,
    logo: eth_ic,
    isNative: true
}

export const projectToken_testnet = {
    name: 'RPLS',
    address: '0xd2A37C328059EcA94943db0A3E24425E57cCcCDA',
    decimals: 18,
    logo: eth_ic,
    isNative: true
}

export const tokens_mainnet = [
    {
        name: 'PLS',
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
        logo: eth_ic,
        isNative: true
    },
    {
        name: 'DAI',
        address: '0x10cB7737c5A547B71C25c3f2dbF12A1BD6374cf4',
        decimals: 6,
        logo: usdt_ic,
        isNative: false
    },
    {
        name: 'USDC',
        address: '0x10cB7737c5A547B71C25c3f2dbF12A1BD6374cf4',
        decimals: 6,
        logo: usdt_ic,
        isNative: false
    },
    {
        name: 'USDT',
        address: '0x10cB7737c5A547B71C25c3f2dbF12A1BD6374cf4',
        decimals: 6,
        logo: usdt_ic,
        isNative: false
    }
]

export const tokens_testnet = [
    {
        name: 'ETH',
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
        logo: eth_ic,
        isNative: true
    },
    {
        name: 'DAI',
        address: '0x10cB7737c5A547B71C25c3f2dbF12A1BD6374cf4',
        decimals: 6,
        logo: usdt_ic,
        isNative: false
    },
    {
        name: 'USDC',
        address: '0x10cB7737c5A547B71C25c3f2dbF12A1BD6374cf4',
        decimals: 6,
        logo: usdt_ic,
        isNative: false
    },
    {
        name: 'USDT',
        address: '0x10cB7737c5A547B71C25c3f2dbF12A1BD6374cf4',
        decimals: 6,
        logo: usdt_ic,
        isNative: false
    }
]

export const global = {
    CONTRACTS: IS_PRODUCT_MODE ? contracts_mainnet : contracts_testnet,
    TOKENS: IS_PRODUCT_MODE ? tokens_mainnet : tokens_testnet,
    PROJECT_TOKEN: IS_PRODUCT_MODE ? projectToken_mainnet : projectToken_testnet,
    chain: IS_PRODUCT_MODE ? pulsechain : goerli,
    usdDecimals: 6,
    totalRounds: 24,
    totalVolume: 60_000_000,
    REFETCH_INTERVAL: 30000,
    PROJECT_ID: 'fe697d89bd5a55527d938b301724e463',
    MAX_UINT256: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
    MAX_UINT256_HALF: '65792089237316195423570985008687907853269984665640564039457584007913129639935',
    API_URL: 'https://projects.cryptosnowprince.com/api',
    PROJECT: 'test',
    ACTION: true,
}