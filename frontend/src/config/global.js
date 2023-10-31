import { mainnet, goerli } from "wagmi/chains";
import eth_ic from "../assets/img/eth.png"
import usdt_ic from "../assets/img/usdt.svg"

export const IS_PRODUCT_MODE = false // TODO

export const contracts_mainnet = { // TODO Mainnet ethereum
    Main: "0x8D42C96208c2C2f5CD8b856eb87CEdEB0e102cAf"
};

export const contracts_testnet = { // TODO Testnet goerli
    Main: "0x8D42C96208c2C2f5CD8b856eb87CEdEB0e102cAf"
};

export const tokens_mainnet = [
    {
        name: 'ETH',
        address: '0x0000000000000000000000000000000000000000',
        limit: 10,
        decimals: 18,
        logo: eth_ic,
        isNative: true
    },
    {
        name: 'USDT',
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        limit: 1000,
        decimals: 6,
        logo: usdt_ic,
        isNative: false
    }
]

export const tokens_testnet = [
    {
        name: 'ETH',
        address: '0x0000000000000000000000000000000000000000',
        limit: 10,
        decimals: 18,
        logo: eth_ic,
        isNative: true
    },
    {
        name: 'USDT',
        address: '0x10cB7737c5A547B71C25c3f2dbF12A1BD6374cf4',
        limit: 1000,
        decimals: 6,
        logo: usdt_ic,
        isNative: false
    }
]

export const global = {
    CONTRACTS: IS_PRODUCT_MODE ? contracts_mainnet : contracts_testnet,
    TOKENS: IS_PRODUCT_MODE ? tokens_mainnet : tokens_testnet,
    chain: IS_PRODUCT_MODE ? mainnet : goerli,
    PUBLIC_URL: "https://airdrop.cryptosnowprince.com",
    START_WL: 1697503000,
    START_ALL: 1697506000,
    PROJECT_ID: 'fe697d89bd5a55527d938b301724e463',
    REFETCH_INTERVAL: 30000,
    MAX_UINT256: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
    MAX_UINT256_HALF: '65792089237316195423570985008687907853269984665640564039457584007913129639935',
    API_URL: 'https://projects.cryptosnowprince.com/api',
    PROJECT: 'mercury',
    ACTION: true,
}