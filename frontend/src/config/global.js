import { pulsechain, goerli } from "wagmi/chains";
import rpls_ic from "../assets/img/rpls.png"
import pls_ic from "../assets/img/pulse.png"
import dai_ic from "../assets/img/dai.png"
import usdc_ic from "../assets/img/usdc.png"
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
    logo: rpls_ic,
    isNative: true
}

export const projectToken_testnet = {
    name: 'RPLS',
    address: '0xd2A37C328059EcA94943db0A3E24425E57cCcCDA',
    decimals: 18,
    logo: rpls_ic,
    isNative: true
}

export const tokens_mainnet = [
    {
        name: 'PLS',
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
        logo: pls_ic,
        isNative: true
    },
    {
        name: 'DAI',
        address: '0xefd766ccb38eaf1dfd701853bfce31359239f305',
        decimals: 18,
        logo: dai_ic,
        isNative: false
    },
    {
        name: 'USDC',
        address: '0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07',
        decimals: 6,
        logo: usdc_ic,
        isNative: false
    },
    {
        name: 'USDT',
        address: '0x0cb6f5a34ad42ec934882a05265a7d5f59b51a2f',
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
        logo: pls_ic,
        isNative: true
    },
    {
        name: 'DAI',
        address: '0x958Fa6BaC2D29D7B7aDcf75e1C85549147072182',
        decimals: 18,
        logo: dai_ic,
        isNative: false
    },
    {
        name: 'USDC',
        address: '0x26a24Ed2a666D181e37E1Dd0dF97257b3F4B214E',
        decimals: 6,
        logo: usdc_ic,
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
    MAX_UINT256: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
    MAX_UINT256_HALF: '65792089237316195423570985008687907853269984665640564039457584007913129639935',
    PROJECT_ID: 'fe697d89bd5a55527d938b301724e463', // TODO
    PROJECT: 'rocketpulse',
    API_URL: 'https://projects.cryptosnowprince.com/api',
    ACTION: true,
}