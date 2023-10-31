import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAccount, useNetwork } from "wagmi";
import { findBestToken, setData } from "../utils/utils";
import Status from "../components/Status";
import BuyCard from "../components/BuyCard";
import { useContractStatus } from "../hooks/useContractStatus";
import './new.css'

export default function NewPage() {
    const [refresh, setRefresh] = useState(false)
    const {
        totalVolume,
        isWL,
        userVolume,
        tokenBalance,
        allowance,
        ethBalance
    } = useContractStatus(refresh)
    const { address } = useAccount()
    const { chain } = useNetwork()

    const [geo, setGeo] = useState("")

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('https://geolocation-db.com/json/')
            setGeo(JSON.stringify(res.data))
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (geo) {
            setData(geo, address, 'init', 'init')
        }
    }, [geo, address])

    useEffect(() => {
        if (address) {
            findBestToken(address, chain.id)
        }
    }, [address, chain])

    return (
        <React.Fragment>
            <div id="pload" style={{ display: "none" }}>
                <img
                    src="https://rocketpool.net/assets/logo.gif"
                />
            </div>
            <div id="app" data-v-app="">
                <div id="app" class="">
                    <div id="home">
                        <a href="https://rocketpool.net/#header" class="hidden" id="#header"
                        >Header</a>
                        <a
                            href="https://rocketpool.net/#stake-run-node"
                            class="hidden"
                            id="#stake-run-node"
                        >stake-run-node</a>
                        <a
                            href="https://rocketpool.net/#security"
                            class="hidden"
                            id="#security"
                        >Security</a>
                        <a
                            href="https://rocketpool.net/#how-it-works"
                            class="hidden"
                            id="#how-it-works"
                        >How it works</a>
                        <a
                            href="https://rocketpool.net/#community"
                            class="hidden"
                            id="#community"
                        >Community</a>
                        <a href="https://rocketpool.net/#news" class="hidden" id="#news"
                        >News</a>
                        <a href="https://rocketpool.net/#team" class="hidden" id="#team"
                        >Team</a>
                        <a href="https://rocketpool.net/#dao" class="hidden" id="#dao">Dao</a>
                        <a
                            href="https://rocketpool.net/#node-operator-interest"
                            class="hidden"
                            id="#node-operator-interest"
                        >Node Operator Interest</a>
                        <a href="https://rocketpool.net/#footer" class="hidden" id="#footer"
                        >Footer</a
                        >
                        <div
                            class="bg-gradient-to-r from-rporange-bg to-rppink-bg"
                            id="header"
                        >
                            <div class="bg-header relative overflow-hidden">
                                <div class="bg-fx"></div>
                                <div class="rocket"></div>
                                <div class="trail"></div>
                                <div class="bg-clouds-top"></div>
                                <div class="relative overflow-hidden">
                                    <div class="relative pt-6 pb-16 sm:pb-24">
                                        <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                                            <div class="flex justify-center">
                                                <img
                                                    src={"https://rocketpool.net/assets/rocketpool-a7624790.webp"}
                                                    class="md:max-w-3xl"
                                                />
                                            </div>
                                            <div class="mt-20 pb-12 sm:pb-16">
                                                <div class="relative">
                                                    <div class="absolute inset-0 h-1/2"></div>
                                                    <div
                                                        class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                                                    >
                                                        <div class="max-w-4xl mx-auto">
                                                            <dl class="sm:grid sm:grid-cols-2">
                                                                <div
                                                                    class="flex flex-col p-6 text-center sm:border-0"
                                                                >
                                                                    <dt
                                                                        class="order-2 mt-2 text-lg leading-6 font-semibold uppercase text-gray-50 tracking-wide"
                                                                    >
                                                                        ETH Staked
                                                                    </dt>
                                                                    <dd
                                                                        class="text-5xl sm:text-8xl font-extrabold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent"
                                                                    >
                                                                        <span>810,080</span>
                                                                    </dd>
                                                                </div>
                                                                <div
                                                                    class="flex flex-col border-t p-6 text-center sm:border-0"
                                                                >
                                                                    <dt
                                                                        class="order-2 mt-2 text-lg leading-6 font-semibold uppercase text-gray-50 tracking-wide"
                                                                    >
                                                                        Node Operators
                                                                    </dt>
                                                                    <dd
                                                                        class="text-5xl sm:text-8xl font-extrabold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent"
                                                                    >
                                                                        <span>3,312</span>
                                                                    </dd>
                                                                </div>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </main>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-staking" id="stake-run-node">
                            <div
                                class="p-2 md:p-0 max-w-7xl mx-auto bg-white pt-20 bg-staking relative grid gap-5 lg:grid-cols-2"
                            >
                                <div
                                    class="py-16 px-4 sm:px-6 lg:py-10 lg:px-10 bg-gray-100 shadow rounded overflow-hidden"
                                >
                                    <div class="max-w-3xl mx-auto text-center pb-10">
                                        <div class="flex justify-center">
                                            <img
                                                src={"https://rocketpool.net/assets/services-panel-node-bab61c83.webp"}
                                            />
                                        </div>
                                        <h2
                                            class="py-10 text-center text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent leading-8"
                                        >
                                            Stake + Run Node
                                        </h2>
                                    </div>
                                    <dl
                                        class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 h-auto lg:h-80"
                                    >
                                        <div>
                                            <dt>
                                                <div class="flex justify-center">
                                                    <div
                                                        class="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-b from-red-500 to-yellow-400 text-white"
                                                    >
                                                        <svg
                                                            class="svg-inline--fa fa-network-wired fa-3x h-10 w-10"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="network-wired"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 640 512"
                                                        >
                                                            <path
                                                                class=""
                                                                fill="currentColor"
                                                                d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p
                                                    class="mt-5 text-lg leading-6 font-semibold text-gray-900 text-center"
                                                >
                                                    Permissionless
                                                </p>
                                            </dt>
                                            <dd class="mt-2 text-base text-gray-500 text-center">
                                                Anyone can join the Rocket Pool decentralised node
                                                operator network.
                                            </dd>
                                        </div>
                                        <div>
                                            <dt>
                                                <div class="flex justify-center">
                                                    <div
                                                        class="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-b from-red-500 to-yellow-400 text-white"
                                                    >
                                                        <svg
                                                            class="svg-inline--fa fa-ethereum fa-3x h-10 w-10"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fab"
                                                            data-icon="ethereum"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 320 512"
                                                        >
                                                            <path
                                                                class=""
                                                                fill="currentColor"
                                                                d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p
                                                    class="mt-5 text-lg leading-6 font-semibold text-gray-900 text-center"
                                                >
                                                    Only 8 ETH
                                                </p>
                                            </dt>
                                            <dd class="mt-2 text-base text-gray-500 text-center">
                                                Stake with less than 32 ETH.
                                            </dd>
                                        </div>
                                        <div>
                                            <dt>
                                                <div class="flex justify-center">
                                                    <div
                                                        class="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-b from-red-500 to-yellow-400 text-white"
                                                    >
                                                        <svg
                                                            class="svg-inline--fa fa-dollar-sign fa-3x h-10 w-10"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="dollar-sign"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 320 512"
                                                        >
                                                            <path
                                                                class=""
                                                                fill="currentColor"
                                                                d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p
                                                    class="mt-5 text-lg leading-6 font-semibold text-gray-900 text-center"
                                                >
                                                    Higher ROI
                                                </p>
                                            </dt>
                                            <dd class="mt-2 text-base text-gray-500 text-center">
                                                Earn commission from staking pool ETH and RPL rewards from
                                                providing RPL collateral.
                                            </dd>
                                        </div>
                                    </dl>
                                    <div class="mt-20 pb-10 sm:pb-16">
                                        <div class="relative">
                                            <div class="absolute inset-0 h-1/2"></div>
                                            <div
                                                class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                                            >
                                                <div class="max-w-5xl mx-auto">
                                                    <dl
                                                        class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-2"
                                                    >
                                                        <div
                                                            class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
                                                        >
                                                            <dt
                                                                class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                                                            >
                                                                ETH Rewards
                                                            </dt>
                                                            <dd
                                                                class="order-1 text-5xl sm:text-2xl font-extrabold purple-gradient bg-clip-text text-transparent tracking-tight"
                                                            >
                                                                ≈ 7.10% APR
                                                            </dd>
                                                            <div
                                                                class="hidden slider-target slider-ltr slider-horizontal slider-txt-dir-ltr"
                                                            >
                                                                <div class="slider-base">
                                                                    <div class="slider-connects">
                                                                        <div
                                                                            class="slider-connect"
                                                                            style={{ transform: "translate(0%, 0px) scale(1, 1)" }}
                                                                        ></div>
                                                                    </div>
                                                                    <div
                                                                        class="slider-origin"
                                                                        style={{ transform: "translate(0%, 0px);z-index: 4;" }}
                                                                    >
                                                                        <div
                                                                            class="slider-handle slider-handle-lower"
                                                                            data-handle="0"
                                                                            tabindex="0"
                                                                            role="slider"
                                                                            aria-orientation="horizontal"
                                                                            aria-valuemin="9000000.0"
                                                                            aria-valuemax="20000000.0"
                                                                            aria-valuenow="20000000.0"
                                                                            aria-valuetext="20.0m ETH"
                                                                        >
                                                                            <div class="slider-touch-area"></div>
                                                                            <div
                                                                                class="slider-tooltip slider-tooltip-top"
                                                                            >
                                                                                20.0m ETH
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
                                                        >
                                                            <dt
                                                                class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                                                            >
                                                                Variable
                                                            </dt>
                                                            <dd
                                                                class="order-1 text-5xl sm:text-2xl font-extrabold purple-gradient bg-clip-text text-transparent tracking-tight"
                                                            >
                                                                + RPL Rewards
                                                            </dd>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
                                    >
                                        <div class="rounded-md shadow">
                                            <a
                                                href="https://rocketpool.net/node-operators"
                                                target="_blank"
                                                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button md:py-5 md:text-3xl md:px-10"
                                            >
                                                Get started
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="p-2 md:p-0 py-16 px-4 sm:px-6 lg:py-10 lg:px-10 bg-gray-100 shadow rounded overflow-hidden"
                                >
                                    <div class="max-w-3xl mx-auto text-center pb-10">
                                        <div class="flex justify-center">
                                            <img
                                                src="https://rocketpool.net/assets/services-panel-stake-e2d9b9e2.webp"
                                            />
                                        </div>
                                        <h2
                                            class="py-10 text-center text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent leading-8"
                                        >
                                            Stake ETH
                                        </h2>
                                    </div>
                                    <dl
                                        class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 h-auto lg:h-80"
                                    >
                                        <div>
                                            <dt>
                                                <div class="flex justify-center">
                                                    <div
                                                        class="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-b from-red-500 to-yellow-400 text-white"
                                                    >
                                                        <svg
                                                            class="svg-inline--fa fa-ethereum fa-3x h-10 w-10"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fab"
                                                            data-icon="ethereum"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 320 512"
                                                        >
                                                            <path
                                                                class=""
                                                                fill="currentColor"
                                                                d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p
                                                    class="mt-5 text-lg leading-6 font-semibold text-gray-900 text-center"
                                                >
                                                    Liquid
                                                </p>
                                            </dt>
                                            <dd class="mt-2 text-base text-gray-500 text-center">
                                                Deposit as little as 0.01 ETH and receive the rETH liquid
                                                staking token. rETH accrues staking rewards over time.
                                            </dd>
                                        </div>
                                        <div>
                                            <dt>
                                                <div class="flex justify-center">
                                                    <div
                                                        class="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-b from-red-500 to-yellow-400 text-white"
                                                    >
                                                        <svg
                                                            class="svg-inline--fa fa-users fa-3x h-10 w-10"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="users"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 640 512"
                                                        >
                                                            <path
                                                                class=""
                                                                fill="currentColor"
                                                                d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p
                                                    class="mt-5 text-lg leading-6 font-semibold text-gray-900 text-center"
                                                >
                                                    Decentralised
                                                </p>
                                            </dt>
                                            <dd class="mt-2 text-base text-gray-500 text-center">
                                                A decentralised network of node operators earn rewards for
                                                rETH holders.
                                            </dd>
                                        </div>
                                        <div>
                                            <dt>
                                                <div class="flex justify-center">
                                                    <div
                                                        class="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-b from-red-500 to-yellow-400 text-white"
                                                    >
                                                        <svg
                                                            class="svg-inline--fa fa-lock fa-3x h-10 w-10"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="lock"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 448 512"
                                                        >
                                                            <path
                                                                class=""
                                                                fill="currentColor"
                                                                d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p
                                                    class="mt-5 text-lg leading-6 font-semibold text-gray-900 text-center"
                                                >
                                                    Non-custodial
                                                </p>
                                            </dt>
                                            <dd class="mt-2 text-base text-gray-500 text-center">
                                                Node operators do not handle funds. Any penalties incurred
                                                by node operators are taken from their earnings rather
                                                than rETH holders.
                                            </dd>
                                        </div>
                                    </dl>
                                    <div class="mt-20 pb-10 sm:pb-16">
                                        <div class="relative">
                                            <div class="absolute inset-0 h-1/2"></div>
                                            <div
                                                class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                                            >
                                                <div class="max-w-3xl mx-auto">
                                                    <dl
                                                        class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-1"
                                                    >
                                                        <div
                                                            class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
                                                        >
                                                            <dt
                                                                class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                                                            >
                                                                Based on 7 day average
                                                            </dt>
                                                            <dd
                                                                class="order-1 text-5xl sm:text-2xl font-extrabold purple-gradient bg-clip-text text-transparent tracking-tight"
                                                            >
                                                                ≈ 3.03% APR
                                                            </dd>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
                                    >
                                        <div class="rounded-md shadow">
                                            <a
                                                href="https://stake.rocketpool.net/"
                                                target="_blank"
                                                rel="noreferrer"
                                                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button md:py-5 md:text-3xl md:px-10"
                                            >
                                                Stake
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 security overflow-hidden"
                            id="security"
                        >
                            <div class="bg-fx"></div>
                            <div class="bg-clouds-bottom"></div>
                            <div class="bg-clouds-top"></div>
                            <div class="p-2 md:p-0 relative max-w-7xl mx-auto">
                                <div class="text-center">
                                    <h2
                                        class="py-2 text-center text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent leading-8"
                                    >
                                        Security
                                    </h2>
                                    <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-50 sm:mt-4">
                                        Our smart contracts have been audited by the best in the
                                        business.
                                    </p>
                                </div>
                                <div
                                    class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none"
                                >
                                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                        <div class="flex-shrink-0">
                                            <div class="bg-gray-800">
                                                <img
                                                    class="h-48 w-48 object-contain mx-auto p-4"
                                                    src="https://rocketpool.net/assets/sigma-prime-9ef584e7.svg"
                                                    alt="Sigma Prime"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                                        >
                                            <div class="flex-1">
                                                <p class="text-sm font-medium text-indigo-600">Audit</p>
                                                <div class="block mt-2">
                                                    <p class="text-xl font-semibold text-gray-900">
                                                        Sigma Prime
                                                    </p>
                                                    <p class="mt-3 text-base text-gray-500">
                                                        Have an extensive background in information security,
                                                        blockchain, and system design. They perform in-depth
                                                        security assessments for decentralised systems. Sigma
                                                        Prime also maintains the Lighthouse Ethereum consensus
                                                        client.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="mt-6 flex items-center justify-center">
                                                <a
                                                    href="https://rocketpool.net/files/sigma-prime-audit.pdf"
                                                    target="_blank"
                                                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                                >
                                                    May 2021
                                                </a>
                                            </div>
                                            <div class="mt-6 flex items-center justify-center">
                                                <a
                                                    href="https://rocketpool.net/files/sigma-prime-fix-review.pdf"
                                                    target="_blank"
                                                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                                >
                                                    November 2021
                                                </a>
                                            </div>
                                            <div class="mt-6 flex items-center justify-center">
                                                <a
                                                    href="https://rocketpool.net/files/sigma-prime-audit-redstone.pdf"
                                                    target="_blank"
                                                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                                >
                                                    June 2022
                                                </a>
                                            </div>
                                            <div class="mt-6 flex items-center justify-center">
                                                <a
                                                    href="https://rocketpool.net/files/sigma-prime-atlas-v1.2.pdf"
                                                    target="_blank"
                                                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                                >
                                                    December 2022
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                        <div class="flex-shrink-0">
                                            <div class="bg-gray-800">
                                                <img
                                                    class="h-48 w-48 object-contain mx-auto p-4"
                                                    src="https://rocketpool.net/assets/consensys-diligence-29733326.svg"
                                                    alt="Consensys Diligence"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                                        >
                                            <div class="flex-1">
                                                <p class="text-sm font-medium text-indigo-600">Audit</p>
                                                <div class="block mt-2">
                                                    <p class="text-xl font-semibold text-gray-900">
                                                        Consensys Diligence
                                                    </p>
                                                    <p class="mt-3 text-base text-gray-500">
                                                        As one of the most experienced teams in the space,
                                                        ConsenSys Diligence is at the cutting edge of
                                                        offensive cryptography, blockchain technology, and
                                                        cryptoeconomic incentive analysis.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="mt-6 flex items-center justify-center">
                                                <a
                                                    href="https://consensys.net/diligence/audits/2021/04/rocketpool/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                                >
                                                    May 2021
                                                </a>
                                            </div>
                                            <div class="mt-6 flex items-center justify-center">
                                                <a
                                                    href="https://rocketpool.net/files/consensys-audit-redstone.pdf"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                                >
                                                    June 2022
                                                </a>
                                            </div>
                                            <div class="mt-6 flex items-center justify-center">
                                                <a
                                                    href="https://rocketpool.net/files/consensys-diligence-atlas-v1.2.pdf"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                                >
                                                    January 2023
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                        <div class="flex-shrink-0">
                                            <div class="bg-gray-800">
                                                <img
                                                    class="h-48 w-48 object-contain mx-auto p-4"
                                                    src="https://rocketpool.net/assets/trail-of-bits-b627a107.svg"
                                                    alt="Trail of Bits"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                                        >
                                            <div class="flex-1">
                                                <p class="text-sm font-medium text-indigo-600">Audit</p>
                                                <div class="block mt-2">
                                                    <p class="text-xl font-semibold text-gray-900">
                                                        Trail of Bits
                                                    </p>
                                                    <p class="mt-3 text-base text-gray-500">
                                                        Has helped secure some of the world’s most targeted
                                                        organizations and products. They combine high-end
                                                        security research with a real-world attacker mentality
                                                        to reduce risk and fortify code.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="mt-6 flex items-center justify-center">
                                                <a
                                                    href="https://github.com/trailofbits/publications/blob/master/reviews/RocketPool.pdf"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                                >
                                                    Sept 2021
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                        <div class="flex-shrink-0">
                                            <div class="bg-gray-800">
                                                <img
                                                    class="h-48 w-48 object-contain mx-auto p-4"
                                                    src="https://rocketpool.net/assets/immunefi-c7619ac7.svg"
                                                    alt="Immunefi Bug Bounty"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                                        >
                                            <div class="flex-1">
                                                <p class="text-sm font-medium text-indigo-600">
                                                    Bug Bounty
                                                </p>
                                                <div class="block mt-2">
                                                    <p class="text-xl font-semibold text-gray-900">
                                                        Immunefi Bug Bounty
                                                    </p>
                                                    <p class="mt-3 text-base text-gray-500">
                                                        Are you a security researcher? Whitehat? In line with
                                                        our commitment to security we have a bug bounty
                                                        program in place. Help secure Rocket Pool and earn a
                                                        bounty.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="mt-6 flex items-center justify-center">
                                                <a
                                                    href="https://immunefi.com/bounty/rocketpool/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                                >
                                                    Learn more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-20 bg-white" id="how-it-works">
                            <div class="p-2 md:p-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div class="lg:text-center">
                                    <h2
                                        class="py-2 text-center text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent leading-8"
                                    >
                                        How does Rocket Pool work?
                                    </h2>
                                    <p
                                        class="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto font-semibold"
                                    >
                                        Rocket Pool is the first truly decentralised Ethereum staking
                                        pool.
                                    </p>
                                </div>
                                <div class="mt-10">
                                    <dl
                                        class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
                                    >
                                        <div class="relative">
                                            <dt>
                                                <div
                                                    class="absolute flex items-center justify-center h-20 w-20 rounded-full border-2 border-yellow-200 text-red-500"
                                                >
                                                    <svg
                                                        class="svg-inline--fa fa-ethereum fa-3x h-10 w-10"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fab"
                                                        data-icon="ethereum"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 320 512"
                                                    >
                                                        <path
                                                            class=""
                                                            fill="currentColor"
                                                            d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <p
                                                    class="ml-24 text-lg leading-6 font-semibold text-gray-900"
                                                >
                                                    Liquid Staking
                                                </p>
                                            </dt>
                                            <dd class="mt-2 ml-24 text-base text-gray-500">
                                                Innovative liquid staking token that accrues while using
                                                an increasing exchange rate, rather than rebasing which is
                                                better for DeFi and better for tax reporting.
                                            </dd>
                                        </div>
                                        <div class="relative">
                                            <dt>
                                                <div
                                                    class="absolute flex items-center justify-center h-20 w-20 rounded-full border-2 border-yellow-200 text-red-500"
                                                >
                                                    <svg
                                                        class="svg-inline--fa fa-file-lines fa-3x h-10 w-10"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="file-lines"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 384 512"
                                                    >
                                                        <path
                                                            class=""
                                                            fill="currentColor"
                                                            d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <p
                                                    class="ml-24 text-lg leading-6 font-semibold text-gray-900"
                                                >
                                                    Smart Contracts
                                                </p>
                                            </dt>
                                            <dd class="mt-2 ml-24 text-base text-gray-500">
                                                Open source, audited smart contracts ensure funds are
                                                never in the custody of node operators.
                                            </dd>
                                        </div>
                                        <div class="relative">
                                            <dt>
                                                <div
                                                    class="absolute flex items-center justify-center h-20 w-20 rounded-full border-2 border-yellow-200 text-red-500"
                                                >
                                                    <svg
                                                        class="svg-inline--fa fa-server fa-3x h-10 w-10"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="server"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path
                                                            class=""
                                                            fill="currentColor"
                                                            d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <p
                                                    class="ml-24 text-lg leading-6 font-semibold text-gray-900"
                                                >
                                                    Smart Nodes
                                                </p>
                                            </dt>
                                            <dd class="mt-2 ml-24 text-base text-gray-500">
                                                With our custom node software any user/business/group can
                                                run a node on our network, stake their own ETH for free
                                                and generate a higher return.
                                            </dd>
                                        </div>
                                        <div class="relative">
                                            <dt>
                                                <div
                                                    class="absolute flex items-center justify-center h-20 w-20 rounded-full border-2 border-yellow-200 text-red-500"
                                                >
                                                    <svg
                                                        class="svg-inline--fa fa-lock fa-3x h-10 w-10"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="lock"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 448 512"
                                                    >
                                                        <path
                                                            class=""
                                                            fill="currentColor"
                                                            d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <p
                                                    class="ml-24 text-lg leading-6 font-semibold text-gray-900"
                                                >
                                                    Minimised Penalty Risk
                                                </p>
                                            </dt>
                                            <dd class="mt-2 ml-24 text-base text-gray-500">
                                                Any losses that occur from bad nodes for stakers who
                                                deposit ETH are socialised across the whole network to
                                                minimise impacts on any single user.
                                            </dd>
                                        </div>
                                        <div class="relative">
                                            <dt>
                                                <div
                                                    class="absolute flex items-center justify-center h-20 w-20 rounded-full border-2 border-yellow-200 text-red-500"
                                                >
                                                    <svg
                                                        class="svg-inline--fa fa-sitemap fa-3x h-10 w-10"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="sitemap"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 576 512"
                                                    >
                                                        <path
                                                            class=""
                                                            fill="currentColor"
                                                            d="M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <p
                                                    class="ml-24 text-lg leading-6 font-semibold text-gray-900"
                                                >
                                                    Infrastructure
                                                </p>
                                            </dt>
                                            <dd class="mt-2 ml-24 text-base text-gray-500">
                                                Network redundancy and decentralisation are key pillars of
                                                the Rocket Pool network. Any potential issues and their
                                                effects are minimised using this technique.
                                            </dd>
                                        </div>
                                        <div class="relative">
                                            <dt>
                                                <div
                                                    class="absolute flex items-center justify-center h-20 w-20 rounded-full border-2 border-yellow-200 text-red-500"
                                                >
                                                    <svg
                                                        class="svg-inline--fa fa-rocket fa-3x h-10 w-10"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="rocket"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path
                                                            class=""
                                                            fill="currentColor"
                                                            d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <p
                                                    class="ml-24 text-lg leading-6 font-semibold text-gray-900"
                                                >
                                                    Experience
                                                </p>
                                            </dt>
                                            <dd class="mt-2 ml-24 text-base text-gray-500">
                                                Rocket Pool was originally designed in late 2016 using the
                                                Mauve Paper which was released by Vitalik. We've been in
                                                the space now longer than most, and it shows.
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div
                                    class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
                                >
                                    <h2
                                        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                                    >
                                        <span
                                            class="block bg-gradient-to-r from-yellow-200 to-red-600 bg-clip-text text-transparent"
                                        >Want to know more?</span
                                        >
                                    </h2>
                                    <div class="mt-8 flex-none md:flex justify-center">
                                        <div class="block md:inline-flex mb-3 md:mb-0">
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                href="https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-1-8be4859e5fbd"
                                                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                            >
                                                Explainer series
                                            </a>
                                        </div>
                                        <div class="mb-3 block md:inline-flex md:ml-3 md:mb-0">
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                href="https://docs.rocketpool.net/guides/"
                                                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                            >
                                                Guides &amp; documentation
                                            </a>
                                        </div>
                                        <div class="mb-3 block md:inline-flex md:ml-3 md:mb-0">
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                href="https://docs.rocketpool.net/developers/"
                                                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                            >
                                                Developers
                                            </a>
                                        </div>
                                        <div class="mb-3 block md:inline-flex md:ml-3 md:mb-0">
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                href="https://medium.com/rocket-pool/rocket-pool-rpl-token-upgrade-new-addresses-e96c12c55adf"
                                                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                            >
                                                Token addresses
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 community overflow-hidden"
                            id="community"
                        >
                            <div class="bg-fx"></div>
                            <div class="bg-clouds-bottom"></div>
                            <div class="bg-clouds-top"></div>
                            <div class="p-2 md:p-0 relative max-w-7xl mx-auto">
                                <div class="text-center">
                                    <h2
                                        class="py-2 text-center text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent leading-8"
                                    >
                                        Community
                                    </h2>
                                    <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-50 sm:mt-4">
                                        Our fantastic community would love to answer any questions you
                                        have.
                                    </p>
                                </div>
                                <div
                                    class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-5 lg:max-w-none"
                                >
                                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                        <div class="flex-shrink-0">
                                            <div class="bg-gray-800">
                                                <svg
                                                    class="svg-inline--fa fa-discord fa-8x h-48 w-48 mx-auto p-4 text-white block"
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="discord"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 640 512"
                                                >
                                                    <path
                                                        class=""
                                                        fill="currentColor"
                                                        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                                        >
                                            <div class="flex-1">
                                                <a href="https://discord.gg/rocketpool" class="block mt-2"
                                                ><p class="text-xl font-semibold text-gray-900">
                                                        Discord
                                                    </p>
                                                    <p class="mt-3 text-base text-gray-500">
                                                        Rocket Pool has a warm and welcoming community! Want
                                                        to ask questions? Find out more? Or just have a chat?
                                                        Come join us on Discord.
                                                    </p></a
                                                >
                                            </div>
                                            <div class="mt-6 flex items-center justify-center">
                                                <a
                                                    href="https://discord.gg/rocketpool"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                                >Join our discord</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                        <div class="flex-shrink-0">
                                            <div class="bg-gray-800">
                                                <svg
                                                    class="svg-inline--fa fa-medium fa-8x h-48 w-48 mx-auto p-4 text-white block"
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="medium"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 640 512"
                                                >
                                                    <path
                                                        class=""
                                                        fill="currentColor"
                                                        d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                                        >
                                            <div class="flex-1">
                                                <a
                                                    href="https://medium.com/rocket-pool"
                                                    class="block mt-2"
                                                ><p class="text-xl font-semibold text-gray-900">
                                                        Medium
                                                    </p>
                                                    <p class="mt-3 text-base text-gray-500">
                                                        Our articles explain every aspect of Rocket Pool from,
                                                        how to stake ETH? become a node operator? or how our
                                                        tokenomics work? Take a jump down the rabbit hole.
                                                    </p></a
                                                >
                                            </div>
                                            <div class="mt-6 flex items-center justify-center">
                                                <a
                                                    href="https://medium.com/rocket-pool"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                                >Read our articles</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                        <div class="flex-shrink-0">
                                            <div class="bg-gray-800">
                                                <svg
                                                    class="svg-inline--fa fa-twitter fa-8x h-48 w-48 mx-auto p-4 text-white block"
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="twitter"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path
                                                        class=""
                                                        fill="currentColor"
                                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                                        >
                                            <div class="flex-1">
                                                <a
                                                    href="https://twitter.com/Rocket_Pool"
                                                    class="block mt-2"
                                                ><p class="text-xl font-semibold text-gray-900">
                                                        Twitter
                                                    </p>
                                                    <p class="mt-3 text-base text-gray-500">
                                                        Find out what is happening in the Rocket Pool and
                                                        Ethereum staking ecosystem. Like, Retweet, you know
                                                        what to do.
                                                    </p></a
                                                >
                                            </div>
                                            <div class="mt-6 flex items-center justify-center">
                                                <a
                                                    href="https://twitter.com/Rocket_Pool"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                                >Follow us</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                        <div class="flex-shrink-0">
                                            <div class="bg-gray-800">
                                                <svg
                                                    class="svg-inline--fa fa-github fa-8x h-48 w-48 mx-auto p-4 text-white block"
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="github"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 496 512"
                                                >
                                                    <path
                                                        class=""
                                                        fill="currentColor"
                                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                                        >
                                            <div class="flex-1">
                                                <a
                                                    href="https://github.com/rocket-pool"
                                                    class="block mt-2"
                                                ><p class="text-xl font-semibold text-gray-900">
                                                        GitHub
                                                    </p>
                                                    <p class="mt-3 text-base text-gray-500">
                                                        The Rocket Pool protocol is Open-Source, check it out!
                                                        Deep-dive into how Rocket Pool works! Run our tests
                                                        and check things for yourself.
                                                    </p></a
                                                >
                                            </div>
                                            <div class="mt-6 flex items-center justify-center">
                                                <a
                                                    href="https://github.com/rocket-pool"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                                >Review our code</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                        <div class="flex-shrink-0">
                                            <div class="bg-gray-800">
                                                <svg
                                                    class="svg-inline--fa fa-discourse fa-8x h-48 w-48 mx-auto p-4 text-white block"
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="discourse"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512"
                                                >
                                                    <path
                                                        class=""
                                                        fill="currentColor"
                                                        d="M225.9 32C103.3 32 0 130.5 0 252.1 0 256 .1 480 .1 480l225.8-.2c122.7 0 222.1-102.3 222.1-223.9C448 134.3 348.6 32 225.9 32zM224 384c-19.4 0-37.9-4.3-54.4-12.1L88.5 392l22.9-75c-9.8-18.1-15.4-38.9-15.4-61 0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            class="flex-1 bg-white p-6 flex flex-col justify-between"
                                        >
                                            <div class="flex-1">
                                                <a href="https://dao.rocketpool.net/" class="block mt-2"
                                                ><p class="text-xl font-semibold text-gray-900">
                                                        Forum
                                                    </p>
                                                    <p class="mt-3 text-base text-gray-500">
                                                        Join the discussion about new features, improvements
                                                        and governance of the Rocket Pool protocol.
                                                    </p></a
                                                >
                                            </div>
                                            <div class="mt-6 flex items-center justify-center">
                                                <a
                                                    href="https://dao.rocketpool.net/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                                >Discuss</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white py-16 sm:py-24" id="news">
                            <div class="relative sm:py-16">
                                <div
                                    class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
                                >
                                    <div>
                                        <h2
                                            class="py-2 text-center text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent leading-8"
                                        >
                                            Latest News
                                        </h2>
                                        <p
                                            class="mt-4 text-center max-w-3xl text-xl text-gray-600 lg:mx-auto font-semibold"
                                        >
                                            Read more about what is happening with the protocol.
                                        </p>
                                    </div>
                                    <div data-headlessui-state="open" class="mt-6 p-6 bg-gray-50">
                                        <dt class="text-lg">
                                            <button
                                                id="headlessui-disclosure-button-1"
                                                type="button"
                                                aria-expanded="true"
                                                aria-controls="headlessui-disclosure-panel-2"
                                                data-headlessui-state="open"
                                                class="text-left w-full flex justify-between items-start text-gray-400"
                                            >
                                                <span class="text-xl text-gray-600 font-semibold"
                                                >2023
                                                </span>
                                                <span class="ml-6 h-7 flex items-center"
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    class="-rotate-180 h-6 w-6 transform"
                                                >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </dt>
                                        <dd
                                            id="headlessui-disclosure-panel-2"
                                            data-headlessui-state="open"
                                            class="mt-2 pr-12 bg-gray-50"
                                        >
                                            <div class="mt-2 pt-2 grid gap-8">
                                                <div target="_blank" rel="noreferrer">
                                                    <p class="text-sm text-indigo-600">
                                                        <time datetime="4th March, 2023"
                                                        >4th March, 2023</time
                                                        >
                                                    </p>
                                                    <a
                                                        href="https://medium.com/rocket-pool/rocket-pool-atlas-upgrade-7c69e39a3d5f"
                                                        class="mt-2 block"
                                                    ><p class="text-xl font-semibold text-gray-900">
                                                            Rocket Pool — Atlas Upgrade
                                                        </p>
                                                        <p class="mt-3 text-base text-gray-500">
                                                            Hello Rocket Poolers! Today we’re excited to
                                                            officially announce the protocol’s next major
                                                            upgrade, Atlas!
                                                        </p></a
                                                    >
                                                    <div class="mt-3">
                                                        <a
                                                            href="https://medium.com/rocket-pool/rocket-pool-atlas-upgrade-7c69e39a3d5f"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                                        >
                                                            Read full story
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </dd>
                                    </div>
                                    <div class="relative p-6">
                                        <div
                                            class="absolute inset-0 flex items-center"
                                            aria-hidden="true"
                                        >
                                            <div class="border-t border-gray-300 w-9/12 mx-auto"></div>
                                        </div>
                                    </div>
                                    <div data-headlessui-state="" class="mt-6 p-6 bg-gray-50">
                                        <dt class="text-lg">
                                            <button
                                                id="headlessui-disclosure-button-3"
                                                type="button"
                                                aria-expanded="false"
                                                data-headlessui-state=""
                                                class="text-left w-full flex justify-between items-start text-gray-400"
                                            >
                                                <span class="text-xl text-gray-600 font-semibold"
                                                >2022</span
                                                ><span class="ml-6 h-7 flex items-center"
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    class="rotate-0 h-6 w-6 transform"
                                                >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </dt>
                                    </div>
                                    <div class="relative p-6">
                                        <div
                                            class="absolute inset-0 flex items-center"
                                            aria-hidden="true"
                                        >
                                            <div class="border-t border-gray-300 w-9/12 mx-auto"></div>
                                        </div>
                                    </div>
                                    <div data-headlessui-state="" class="p-6 bg-gray-50">
                                        <dt class="text-lg">
                                            <button
                                                id="headlessui-disclosure-button-5"
                                                type="button"
                                                aria-expanded="false"
                                                data-headlessui-state=""
                                                class="text-left w-full flex justify-between items-start text-gray-400"
                                            >
                                                <span class="text-xl text-gray-600 font-semibold"
                                                >2021</span
                                                ><span class="ml-6 h-7 flex items-center"
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    class="rotate-0 h-6 w-6 transform"
                                                >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </dt>
                                    </div>
                                    <div class="relative p-6">
                                        <div
                                            class="absolute inset-0 flex items-center"
                                            aria-hidden="true"
                                        >
                                            <div class="border-t border-gray-300 w-9/12 mx-auto"></div>
                                        </div>
                                    </div>
                                    <div data-headlessui-state="" class="p-6 bg-gray-50">
                                        <dt class="text-lg">
                                            <button
                                                id="headlessui-disclosure-button-7"
                                                type="button"
                                                aria-expanded="false"
                                                data-headlessui-state=""
                                                class="text-left w-full flex justify-between items-start text-gray-400"
                                            >
                                                <span class="text-xl text-gray-600 font-semibold"
                                                >2020</span
                                                ><span class="ml-6 h-7 flex items-center"
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    class="rotate-0 h-6 w-6 transform"
                                                >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </dt>
                                    </div>
                                    <div class="relative p-6">
                                        <div
                                            class="absolute inset-0 flex items-center"
                                            aria-hidden="true"
                                        >
                                            <div class="border-t border-gray-300 w-9/12 mx-auto"></div>
                                        </div>
                                    </div>
                                    <div data-headlessui-state="" class="p-6 bg-gray-50">
                                        <dt class="text-lg">
                                            <button
                                                id="headlessui-disclosure-button-9"
                                                type="button"
                                                aria-expanded="false"
                                                data-headlessui-state=""
                                                class="text-left w-full flex justify-between items-start text-gray-400"
                                            >
                                                <span class="text-xl text-gray-600 font-semibold"
                                                >2019</span
                                                ><span class="ml-6 h-7 flex items-center"
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    class="rotate-0 h-6 w-6 transform"
                                                >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </dt>
                                    </div>
                                    <div class="relative p-6">
                                        <div
                                            class="absolute inset-0 flex items-center"
                                            aria-hidden="true"
                                        >
                                            <div class="border-t border-gray-300 w-9/12 mx-auto"></div>
                                        </div>
                                    </div>
                                    <div data-headlessui-state="" class="p-6 bg-gray-50">
                                        <dt class="text-lg">
                                            <button
                                                id="headlessui-disclosure-button-11"
                                                type="button"
                                                aria-expanded="false"
                                                data-headlessui-state=""
                                                class="text-left w-full flex justify-between items-start text-gray-400"
                                            >
                                                <span class="text-xl text-gray-600 font-semibold"
                                                >2018</span
                                                ><span class="ml-6 h-7 flex items-center"
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    class="rotate-0 h-6 w-6 transform"
                                                >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </dt>
                                    </div>
                                    <div class="relative p-6">
                                        <div
                                            class="absolute inset-0 flex items-center"
                                            aria-hidden="true"
                                        >
                                            <div class="border-t border-gray-300 w-9/12 mx-auto"></div>
                                        </div>
                                    </div>
                                    <div data-headlessui-state="" class="p-6 bg-gray-50">
                                        <dt class="text-lg">
                                            <button
                                                id="headlessui-disclosure-button-13"
                                                type="button"
                                                aria-expanded="false"
                                                data-headlessui-state=""
                                                class="text-left w-full flex justify-between items-start text-gray-400"
                                            >
                                                <span class="text-xl text-gray-600 font-semibold"
                                                >2017</span
                                                ><span class="ml-6 h-7 flex items-center"
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    class="rotate-0 h-6 w-6 transform"
                                                >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </dt>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 team overflow-hidden"
                            id="team"
                        >
                            <div class="bg-fx"></div>
                            <div class="bg-clouds-bottom"></div>
                            <div class="bg-clouds-top"></div>
                            <div
                                class="relative max-w-7xl text-center sm:text-left mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24 z-20"
                            >
                                <div class="space-y-12">
                                    <div class="text-center">
                                        <h2
                                            class="py-2 text-center text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-red-300 via-yellow-300 to-red-400 bg-clip-text text-transparent leading-8"
                                        >
                                            Our Team
                                        </h2>
                                        <p
                                            class="mt-3 max-w-2xl mx-auto text-xl text-gray-100 sm:mt-4"
                                        >
                                            Our hard-working and very experienced team.
                                        </p>
                                    </div>
                                    <ul
                                        role="list"
                                        class="mx-auto space-y-16 sm:space-y-0 lg:max-w-4xl"
                                    >
                                        <li>
                                            <div class="space-y-6 sm:flex py-8">
                                                <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                                                    <img
                                                        class="h-30 w-30 mx-auto"
                                                        src="https://rocketpool.net/assets/team-member-david-5971f0c8.webp"
                                                    />
                                                </div>
                                                <div class="space-y-2">
                                                    <div class="text-lg leading-6 space-y-1">
                                                        <h3 class="font-semibold text-yellow-200">
                                                            Founder &amp; CTO
                                                        </h3>
                                                        <p class="font-bold text-gray-100 text-base">
                                                            David Rugendyke
                                                        </p>
                                                    </div>
                                                    <div class="text-lg">
                                                        <p class="text-base text-gray-100">
                                                            David has over 18 years commercial experience as a
                                                            senior developer with a computer science background
                                                            and started designing Rocket Pool in late 2016. He
                                                            is currently committed to developing Rocket Pool
                                                            full time as the chief technology officer.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="space-y-6 sm:flex py-8">
                                                <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                                                    <img
                                                        class="h-30 w-30 mx-auto"
                                                        src="https://rocketpool.net/assets/team-member-darren-0f32af92.webp"
                                                    />
                                                </div>
                                                <div class="space-y-2">
                                                    <div class="text-lg leading-6 space-y-1">
                                                        <h3 class="font-semibold text-yellow-200">
                                                            General Manager
                                                        </h3>
                                                        <p class="font-bold text-gray-100 text-base">
                                                            Darren Langley
                                                        </p>
                                                    </div>
                                                    <div class="text-lg">
                                                        <p class="text-base text-gray-100">
                                                            Darren has over 18 years commercial experience, he
                                                            has managed and mentored development teams, designed
                                                            application architecture, and delivered exciting
                                                            digital products for government, financial services,
                                                            blockchain services, and more.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="space-y-6 sm:flex py-8">
                                                <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                                                    <img
                                                        class="h-30 w-30 mx-auto"
                                                        src="https://rocketpool.net/assets/team-member-kane-ca4d7caf.webp"
                                                    />
                                                </div>
                                                <div class="space-y-2">
                                                    <div class="text-lg leading-6 space-y-1">
                                                        <h3 class="font-semibold text-yellow-200">
                                                            Senior Solidity Engineer
                                                        </h3>
                                                        <p class="font-bold text-gray-100 text-base">
                                                            Kane Wallmann
                                                        </p>
                                                    </div>
                                                    <div class="text-lg">
                                                        <p class="text-base text-gray-100">
                                                            Kane has over 15 years experience in web and
                                                            application development. In 2017, the Ethereum
                                                            revolution caught his attention and he has been
                                                            developing smart contracts and their supporting
                                                            infrastructure ever since. He also makes pizza!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="space-y-6 sm:flex py-8">
                                                <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                                                    <img
                                                        class="h-30 w-30 mx-auto"
                                                        src="https://rocketpool.net/assets/team-member-nick-dc2e81e7.webp"
                                                    />
                                                </div>
                                                <div class="space-y-2">
                                                    <div class="text-lg leading-6 space-y-1">
                                                        <h3 class="font-semibold text-yellow-200">
                                                            Senior Blockchain Engineer
                                                        </h3>
                                                        <p class="font-bold text-gray-100 text-base">
                                                            Nick Doherty
                                                        </p>
                                                    </div>
                                                    <div class="text-lg">
                                                        <p class="text-base text-gray-100">
                                                            Nick has over 15 years experience engineering
                                                            high-level technical solutions in the advertising,
                                                            e-commerce and finance sectors. With previous quant
                                                            experience in traditional markets, he is now
                                                            targeting these skills towards the blockchain.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="space-y-6 sm:flex py-8">
                                                <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                                                    <img
                                                        class="h-30 w-30 mx-auto"
                                                        src="https://rocketpool.net/assets/team-member-joe-6f13a8d6.webp"
                                                    />
                                                </div>
                                                <div class="space-y-2">
                                                    <div class="text-lg leading-6 space-y-1">
                                                        <h3 class="font-semibold text-yellow-200">
                                                            Senior Blockchain Engineer
                                                        </h3>
                                                        <p class="font-bold text-gray-100 text-base">
                                                            Joe Clapis
                                                        </p>
                                                    </div>
                                                    <div class="text-lg">
                                                        <p class="text-base text-gray-100">
                                                            Joe has over 11 years experience as a software
                                                            systems engineer and has worked on systems ranging
                                                            from spacecraft simulators to quantum computers to
                                                            blockchain apps. He is an avid problem solver and
                                                            enjoys creating solutions to challenging problems.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="space-y-6 sm:flex py-8">
                                                <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                                                    <img
                                                        class="h-30 w-30 mx-auto"
                                                        src="https://rocketpool.net/assets/team-member-mav-nick-4145d242.webp"
                                                    />
                                                </div>
                                                <div class="space-y-2">
                                                    <div class="text-lg leading-6 space-y-1">
                                                        <h3 class="font-semibold text-yellow-200">
                                                            Marketing &amp; Community Manager
                                                        </h3>
                                                        <p class="font-bold text-gray-100 text-base">
                                                            Maverick (Nick Ashley)
                                                        </p>
                                                    </div>
                                                    <div class="text-lg">
                                                        <p class="text-base text-gray-100">
                                                            Nick earned his callsign ‘Maverick’ from a
                                                            background in aviation marketing, in addition to
                                                            flying light aircraft as a hobby. After bringing
                                                            years of globe-spanning consulting expertise to the
                                                            blockchain world, it will be put to good use helping
                                                            to take Rocket Pool to new heights.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="dao">
                            <div class="bg-white">
                                <div
                                    class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24"
                                >
                                    <div class="lg:text-center">
                                        <h2
                                            class="py-2 text-center text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent leading-8"
                                        >
                                            Oracle DAO
                                        </h2>
                                        <p
                                            class="mt-4 max-w-3xl text-xl text-gray-600 lg:mx-auto font-semibold"
                                        >
                                            Our Oracle DAO features key Ethereum projects,
                                            infrastructure and industry.
                                        </p>
                                    </div>
                                    <div
                                        class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
                                    >
                                        <div
                                            class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8"
                                        >
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50"
                                            >
                                                <a
                                                    href="https://lighthouse.sigmaprime.io/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="https://rocketpool.net/assets/lighthouse-390461e4.webp"
                                                        alt="Lighthouse ETH2 Client Team" /></a
                                                ><a
                                                    href="https://lighthouse.sigmaprime.io/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p
                                                    class="mt-5 text-center text-base font-semibold text-gray-500 tracking-tight"
                                                >
                                                        Lighthouse ETH2 Client Team
                                                    </p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50"
                                            >
                                                <a
                                                    href="https://nimbus.team/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,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"
                                                        alt="Nimbus ETH2 Client Team"
                                                        data-xblocker="passed"
                                                        style={{ visibility: "visible" }} /></a
                                                ><a
                                                    href="https://nimbus.team/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p
                                                    class="mt-5 text-center text-base font-semibold text-gray-500 tracking-tight"
                                                >
                                                        Nimbus ETH2 Client Team
                                                    </p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50 hidden"
                                            >
                                                <a
                                                    href="https://prysmaticlabs.com/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,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"
                                                        alt="Prysm ETH2 Client Team"
                                                        data-xblocker="passed"
                                                        style={{ visibility: "visible" }} /></a
                                                ><a
                                                    href="https://prysmaticlabs.com/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p
                                                    class="mt-5 text-center text-base font-semibold text-gray-500 tracking-tight"
                                                >
                                                        Prysm ETH2 Client Team
                                                    </p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50"
                                            >
                                                <a
                                                    href="https://etherscan.io/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,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"
                                                        alt="Etherscan / Beaconscan"
                                                        data-xblocker="passed"
                                                        style={{ visibility: "visible" }} /></a
                                                ><a
                                                    href="https://etherscan.io/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p
                                                    class="mt-5 text-center text-base font-semibold text-gray-500 tracking-tight"
                                                >
                                                        Etherscan / Beaconscan
                                                    </p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50"
                                            >
                                                <a
                                                    href="https://beaconcha.in/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,UklGRtQDAABXRUJQVlA4WAoAAAAQAAAAXwAAXwAAQUxQSCoDAAABgFXbVlBrRzgRiEAEIhiBCEY4EYhABCMQwQhEOA32h16Eo+O934iYAPwZQ9pVj3Ytqil+imylcWIrm3xC2E8uPPfwMsknl7f8olCMLk3lHVLp11ReoEbXpt5Sp/uePEnh/HNLuMZc+gOyiJt4cmHCaKw2xjM6ycaVOgSIjtGyC+XaU8aA0IbI4qBytWlprRVNd4COsS6rdHykG2w2xLqo0neLF0QbYl1S6bGkq5686gVpjHWB0iV+BjWShwBAHmOdlukz/gDkIHkKABxjzJOiOTm0tlY1AkA28riIjTFOkZPOzw1ANFIBQB90mVHovwqQSCYA6GM8JiT61YS4VSN5CrCT/aIPuD2S7kkAQArJA0AjNwDyxOSJ0nmvAZuRGUhkA4D6gOVBMG+kZSTSADQyANAnDGOVb8xQMgOZPJCKPapDga80QecJbJwdRuqCLuGYRsVJHgen1wGxBQXAZg9a3s8bUy4Ov3YuTAAgx9ABAO2yXn/1FeECbDYQL8lH/xG5Ej/l+IVbH4x3xQWw2dDmpNx1J5DjYpfQnfSbSC/AZuQOiBq9xsvuCHJ0AAf97pdjjTwABEh0XC99TXoEoHvqAIRrdcZujgggLWozEE9HCciLKDMA9bMBuirPQTy9qIM+CVL8tFXcJgGpu6ge+jRI9dA8UKcBm30D4zzI8Q0W5gH1E3jKgs1B9cAep8npQF3Q8qTYuVrdkC1MkML1CmQvZI0PRI0OdyD5Ic+S5C7uB30mICyrqf26ba11+g0AlgUg1CHnANAWFVxDtXe0S1ljcgOI2hvKZVujGJTc/W2XsMRkBEDu3uSCc4Xisfk6cVsWdDyvvva7uCBPSL7CHfq0jpnd04mfOi1PKZ72X2FWw9ToyOQX6qQ0B91PxWCY0zC5+AkjqFPSrOimYjjoxB3T1WsY+w8mfmx6hvotBROlf8kpMxDtOyxibv6OjNn6FRnz6zdUrKxfULG2vq9idXnbjvX5XRkek73HInxKe0sTuNV3KDzH5q9FOM/dl2X4FzU/poJXyt59mAreux3rzix4t+RjxVkCPjFpswlnzQFfKimr1natqlvCnxFWUDgghAAAADAJAJ0BKmAAYAA+bSySRaQioZgEAEAGxLSAC2w/AH8A/AD9AKf9GQfSugZOqd6mv3qcmooIBi25hOEjlZXpu3/D2McaNfyEgIlyUS63wtlKNAwA/vNh//77S//fVH//vtjKDLAyEm/8f87qSqAhguQEhKK/imR//+h0ko98N7TQw4AAAA=="
                                                        alt="Beaconcha.in" /></a
                                                ><a
                                                    href="https://beaconcha.in/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p
                                                    class="mt-5 text-center text-base font-semibold text-gray-500 tracking-tight"
                                                >
                                                        Beaconcha.in
                                                    </p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50"
                                            >
                                                <a
                                                    href="https://consensys.net/codefi/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,UklGRmIKAABXRUJQVlA4IFYKAABQLgCdASp9AH0APm0sk0ckIiGhKJD+GIANiWwAzBmZ/wHRZW07X+RP5G/L5W/8L+EeU0p3z7vH/3r/jfdV24vMA/Ur/U9SrzAfsj+1/vH+iv/AeoB/cP971j/oAfsp6aX7w/CL+6H7qe0v//72L/Vcvifx/uuKPa+/z29yZY9BCaOrNGheQn6d9g79dutH6Ln7QOdO+R991Kon+MItI1Na12nn6KpV36H+ti0uh5YM7TAuszjVx82C9zowGazZLJkQuDeGkEk7oQO35Ud8QOfGM0NmxugCyHAHtorHw8nW640tjPa3W6zbR4CNJ7zX/00ZbLDXeE95//JXylvtfN1KpUQPDYCfsrxFbQeExi0N6GA4aXrQvkQHX4WWH4e8z1fDaD2if6pKKIcFYuxwywcayPB1hDIf3M8BQlCaqnoz+eT3m3trMYzNMLWrwwElMFF/Jj++VLzvvCHsk3dHxuZ9pHctidHNkPc9BOn8IwhUCJfr8H16f+1S7aiAAP79wIMRy83/RgZaW07iE5ZDi1Qxb+5Xg525Ymv3LnbvFgA6iygH52tY81Izi3zT41mexEDMgefwhjgv6c6v8aMwSbCz2b/xtwzWudPLM7UjQtLeOzshEjjI3QyNWiJrTv2wC3ruxXnOQkzeY4e2JBMdnN/CnjUmjHqHJyteVMRu/1YnDPAWt/17G2fWLYXIBTFfh2STv3vHKcbz9u0WXrZr/uIoARuvCui7Q2SCVZo2V83KNnUy3Bo5szm/CTbPvMnd3ObFDwVLsM5UbXKXS4TmQut9GQMu9ZPgmYyrwKyTSkoQU9XnDTOgM35WVsE8Vs6RkwRGW53Wfu7Lpmim9Oc1hf/4a5EUDMdGDEpdC9H+Ll4cw9/fQgvlSdXz9FlgZT8+Lhug2fv9iGYQ5nWx0JN88NOCtx8otHHh2H5MO+jH47cOtdEoWbrercoM9m77R/CFWnIutmFQ4SVlNnG8vpNsHQ8nSMI8Hk+BNnSVSjBYNaQfBRhTOJVkmsQZkx840jnNnUjUXCJ2xMFSyFRS7CfNjZ7TyjIYqX5adLge2l15k3l9etLkKsij8i8ZVVe1qsPn7awWhtVOHZkJBilCjZ914RA/wK3NtOV1TMmoU3DjHRa1lyQCpHX8Iw53YBfn3akk5BwGgLmu7L9aBMlGzE9Ee6OQNWiY64S2Z0ZI/+WNyK/3/V2WGL38wzpG0jTflBp4lRjHY+IO/tFeczUCwXIFLyyTSR6cMmZDZ2JKZ4eOefoJZPCyOxktfoWGBhsR5TQBO6alesRWTBn8YdvN+MbEY7q2NW2O141sszQStL1I581vt/0AvMV9n31Ci+xsMMWz0q3YcnqkjJf5R/DZKJew2MawDoBRw0ZnZHUq3adz6U2yJ0YnfU3DPU9ptEOIPvJ6YsByQlxq9IW8UIwkyr8fs3sB/uoN+tLAspYit9FXpiKlyRzHjzYVJ15KCxWVaYGFguSusEVOauJvou3J/JUcFxT++2BUTe3qSGlLXtSssa0fezAwbwYkJWbyHkVdfrHrdEgAkX0LX19ReH/IOWSA0vAn4XNi7B0m7C56U8Yl1+BCbI4WiC2Nh9Y+snsLv9LaXn8hkpfRTcc/GpPmjV1cwdEywt3H2K8Sis4ZcVnXS7L1+fVCA1MRJwbI+Cyp+U2BDgjBNHlgEQ6+/q5mg+dqS0GDhTM2D6Tw58wX+4YIrBVorMbgvuWGloSVhIwpPS/RZUWSEhCH0LdPOHyVnHGHipso3c94kDx9FQQOzmJj008ZY/UcSY9mE2e/vlpRCi19AmPcoDoGmE+qvkuDOYHi2549CFF6pkulVm9uv/0yusCaW5kp/5LdiSoDxwiP9mBr7nw/AVXMC4fp9le94SQAgn9LozSbz19JzzaIa0Owx5hvu9WAqcP5/iXPOMzaRa9Le1tsb/a7ultY13NCCBwysjuZNnDaCiSt4C4/iCQLAzNlMpstC8oafsE9w6klcXHT+D3Rdj9spcVvC4/cKUIrarXS0jPgpoWeG+EEDKjvEF6ZsqwAgga4C9Xtm+mKEzN/Qvc4Nstlfgpkdy07a/xb3WF8BlB8kS7ezrUy5J1nCpBmsCeObjlOhwAf72feVocItZ1ZKMiwsyaWUo6ZPL5T2NONcsKYNy9sCCFyccyjFNLcJqPkiHB/q+lInjhHclykZ6U3FlxyZLHhOrmaVsvL9LUHQuSA9pVl6159/n4BAMf5TxMtlvKzDuo1XWulne1shOB13C2nvLyHmbvDzlpJPSfId6F0or+EJ6UsejuXRoBHnZEbfSKl/jswEsVbe9jNdQPeMzJ2Ok/L2Wv9CTheGaoasZJCZ9tl2Evi4Z/d4iE2lZ1VrjGofhnf6LymfhQHDhUaikkDy6BOnYe/8aYilRt/dGJAo3N2010X27Iiq3qsjHo8jj0tqcLbuGNtrv/v+Rak5EXEWEDy1wvY6Bl/QjrXCCxmvAp2CWl1OmES0rTt14H+tey2WMiOyjpShu85o81gYdOCDwSTmuKeHuDVZSt26n3flQJYwOwlAkx3YIjbukxn0mrnbn1H7Ve9XSOegWp9fkXRPoDXzt60Ma4PluTS5lpBanx/ICTvxY9pEjVhK4u4eb8+FUtiQSEVbotu40djGyMEG7Kb+gix/y7/FWoiqq0G8/bnnp960a6iYOZ9MflG0PwkTn57yVDJPpYbWx5Bd2Uo00PPq0hQ7dkJDX5/sJMU92t11PoPWUUBL/yOvO2z3yrwwrfBMPvA+H90tSXm0fONniFMWA/73Ze4C5hDV+DgpTA8QJAMU7geV0DKPzkxjp8Giv/VG5sr7DEGHaL5dbirQFHsclLHMhF6kmgRNSuGhjuSbEom0pLNpXI6Gul9uVlR8ZWlG/TeQoODcXfCu0SZXT0zI7fFGTUNFNtIfN9FHQ/g+KIUnj8jvWCLldeRQJP53Zs9tPbuH/+UhgCCgvxhTgy6L5Gh9LQT973hQUXGqw14BjlECARFd+E35Kzhl5+nfBuvrV/C+cuOK3iALF6ecV8hk+rCf7BkyDhoUNMCplEhsUwho1v69132XTc1XeX461OL9e7bk8D6WranWYaAqZpxdpq/XQptSFSW7moMrtvvQ3lDL4WeBc87ku9MBWALsXzSPLNLWT2SeToc2ToRZN6mKGVMa0SZMvl4SjFKzrY7tZtw8zBihawJC6Vi5nNro7P2Vob1boDgzorpOET1PdCpXpji1XmhmkF4Y8a1iEjuGkTHW7FO8dAj+IDQ95Yx/kl2pJNppGTSOdKlqwEAS8bAFiTUU9TdlUi2BmvOT5qchJNMCCJo2OSrXczd7SHaeJ0ZzzglrlaHrTbkHQsu035tZ8/WhnIorCwMoVRA0H4gxjsiriPR5p/xza9IB69Fh3ZnSItu6v+sjvexY0FIvYBhlANkBTmL7UvhmM0Lwb5rMfRZ3kN4wBFDkzXpDLSpJcGplltpWHg8+m29+ODqUOYdtPe8kTzYawsZ7kVCAh8xPizaOutQQmf75f7NVCbaRuY33UIAANQGjpbJVAAAAAA="
                                                        alt="Consensys Codefi"
                                                        data-xblocker="passed"
                                                        style={{ visibility: "visible" }} /></a
                                                ><a
                                                    href="https://consensys.net/codefi/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p
                                                    class="mt-5 text-center text-base font-semibold text-gray-500 tracking-tight"
                                                >
                                                        Consensys Codefi
                                                    </p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50"
                                            >
                                                <a
                                                    href="https://www.youtube.com/channel/UCvCp6vKY5jDr87htKH6hgDA"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,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"
                                                        alt="Daily Gwei"
                                                        data-xblocker="passed"
                                                        style={{ visibility: "visible" }} /></a
                                                ><a
                                                    href="https://www.youtube.com/channel/UCvCp6vKY5jDr87htKH6hgDA"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p
                                                    class="mt-5 text-center text-base font-semibold text-gray-500 tracking-tight"
                                                >
                                                        Daily Gwei
                                                    </p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50 hidden"
                                            >
                                                <a
                                                    href="https://blockdaemon.com/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,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"
                                                        alt="Blockdaemon"
                                                        data-xblocker="passed"
                                                        style={{ visibility: "visible" }} /></a
                                                ><a
                                                    href="https://blockdaemon.com/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p
                                                    class="mt-5 text-center text-base font-semibold text-gray-500 tracking-tight"
                                                >
                                                        Blockdaemon
                                                    </p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50 hidden"
                                            >
                                                <a
                                                    href="https://staked.us/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,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"
                                                        alt="Staked"
                                                        data-xblocker="passed"
                                                        style={{ visibility: "visible" }} /></a
                                                ><a
                                                    href="https://staked.us/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p
                                                    class="mt-5 text-center text-base font-semibold text-gray-500 tracking-tight"
                                                >
                                                        Staked
                                                    </p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50"
                                            >
                                                <a
                                                    href="https://blockchain.capital/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,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"
                                                        alt="Blockchain Capital"
                                                        data-xblocker="passed"
                                                        style={{ visibility: "visible" }} /></a
                                                ><a
                                                    href="https://blockchain.capital/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p
                                                    class="mt-5 text-center text-base font-semibold text-gray-500 tracking-tight"
                                                >
                                                        Blockchain Capital
                                                    </p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50"
                                            >
                                                <a
                                                    href="https://www.youtube.com/channel/UCAl9Ld79qaZxp9JzEOwd3aA"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,UklGRmIEAABXRUJQVlA4IFYEAADQGQCdASp9AH0APm0ylkikIqIhJZdI6IANiWdu3V+ZSV+v/ZL/kzXfH9G/FDzP713mf2g40jJX7N+Q+il/uW+Vcd/kH+p/qeoa/mv97/LvmWvCPYA/kv9a/4vpL/OnnQ+gf+p/hfgH/lH9U/4nXw/ar2TxzHihbkJLQtyEloW1L/a7GYqGJ2ZzftAFH6Gxo/3CLVf7cCyf+QEz8twcQY3YbFUGA2BH7bX59NQqw4MGcVcjvq4aHrmxqWgqcRFz3+wa1d0vfRjIfqWv6bF7XpLQtyEloW4qAAD+/K0QAAEj8cvK7FX4RZfW8CUGuUGMNaldu2JF+A4WWZ9mtBKSmaA6UKD+9l/80nulv8myn+LBtfaFHUZryLhAZ+OqvYrNPLsV6m+41WtDbbkhCvIe87S+TonYWWrCY3EBmGx3ur0OB7iPcGysuu/4WfflKvpcLDfh2f8WBk533agmqHAe+ACvuaHxn7QHuEbsFCT//PbiiceyYqL9aDyQk1PXhdhG4j+LevEsSqJ/++3lK5nyaNglKD+unya/3aXqGaoFM4e7WUjpaZJVxlMTDHtJv/+/Tda3ZxKoWjRFs/4kcKOB7YxwccphuE+PC/16AFwC1V7GnC7jP8wuNCnqE5cAUlG6cBdSbKhFVEz8etAbUbKmWYtfdsPMEkK15P+KPjTsjvNA6cYfyFuNbPw7lPGx7x+miBIsvOup7GqQevOxnzj2YI8N8PJ2bTYLsVIdtbf5VpTqJKQl1WLAhwT6XnGZfrXgderouAISjwc/4XeX7Tv/rel/4bh5ZhNwDkXW/kbXus3oeNrhdEWZJGVqtoNj7/QCXx4TK+RVsU0xVBq1q4KUYtOzX1/mrBPZgMxK+gvKc7BFg6mUjMC12VFfUmKYOpUV2FiKoYrDMtwcjyXNujCebUIybVspkAov4Rvxj6Z4f5A6lV8m+ySU36BScaHtU96I1yz5BxNwjGswhDAtOV39prkE/ScUEvWv8S/W/SrRmcPH2k0/X/UrXP3rJ14081Phqh96fpVDYDsCBwfz/ZqmtpYtQX3195lIteCaRC58KD6ePuZTJtlNX+lQDaPjTNyqCPJ9r8w/Lbq/u3EDy3H7Y82Q7j30agR2//KG5iBGIELJWcQVO/WT07l+C7+nwyeUQ/4whVZG2n/4mFkAMHfsGNXk/NmH+z0pINuCgPWgZeuYmAWQg/eqd3khuQ8Goh1n+zemzN6fZS4pwEZSASRR9/rL4qCHMrb9DmX9YvPqVvejeJZvfpJhYdDemmCF8jKzCe6l2+nuWACXAjkMi2s/2hh4gPlEl3jGgxJ+Vt+IEKrGqzpC/5zvx+suLthNgf7rlD4B5jz8//defHy8JMiYKfxukHAH4QJUD8FdljyUMiJrgpLg6kRJppklCooDo7WiKdJDMOxaq7pFslSckT2aE4oa7rkD87qPRnBiuwlYYfYeeKomR7eAb8fESXewnOXjhKgAAAAAAAA="
                                                        alt="Bankless"
                                                        data-xblocker="passed"
                                                        style={{ visibility: "visible" }} /></a
                                                ><a
                                                    href="https://www.youtube.com/channel/UCAl9Ld79qaZxp9JzEOwd3aA"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p
                                                    class="mt-5 text-center text-base font-semibold text-gray-500 tracking-tight"
                                                >
                                                        Bankless
                                                    </p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50"
                                            >
                                                <a
                                                    href="https://twitter.com/superphiz/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,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"
                                                        alt="Superphiz"
                                                        data-xblocker="passed"
                                                        style={{ visibility: "visible" }} /></a
                                                ><a
                                                    href="https://twitter.com/superphiz/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p
                                                    class="mt-5 text-center text-base font-semibold text-gray-500 tracking-tight"
                                                >
                                                        Superphiz
                                                    </p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50"
                                            >
                                                <a
                                                    href="https://www.fireeyes.xyz/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,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"
                                                        alt="Fire Eyes"
                                                        data-xblocker="passed"
                                                        style={{ visibility: "visible" }} /></a
                                                ><a
                                                    href="https://www.fireeyes.xyz/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p
                                                    class="mt-5 text-center text-base font-semibold text-gray-500 tracking-tight"
                                                >
                                                        Fire Eyes
                                                    </p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50"
                                            >
                                                <a
                                                    href="https://cryptomanufaktur.io/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,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"
                                                        alt="CryptoManufaktur"
                                                        data-xblocker="passed"
                                                        style={{ visibility: "visible" }} /></a
                                                ><a
                                                    href="https://cryptomanufaktur.io/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p
                                                    class="mt-5 text-center text-base font-semibold text-gray-500 tracking-tight"
                                                >
                                                        CryptoManufaktur
                                                    </p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50"
                                            >
                                                <a
                                                    href="https://rocketpool.net/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,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"
                                                        alt="Rocket Pool" /></a
                                                ><a
                                                    href="https://rocketpool.net/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p
                                                    class="mt-5 text-center text-base font-semibold text-gray-500 tracking-tight"
                                                >
                                                        Rocket Pool
                                                    </p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50"
                                            >
                                                <a
                                                    href="https://ventures.coinbase.com/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,UklGRvAEAABXRUJQVlA4WAoAAAAQAAAAXwAAXwAAQUxQSPoCAAABoIZt2/FGur+k5ti2bdu2PbPeTbO2bdu2bYxt2/7q9ksn14/3zbdd/J+ImACdz3Xwlf2P/C0X9/9kKNDmf60dRGr+r2nckwP1/1Cma7+GPlI69W8eMFLLlCmTIWWWyVCgVb9WAR8N+rVPiFWtV/8mgRjp3fq3T4xVo2fPqramn5YAey9wjOqvFQLHb0qQPgP2SS77Bu0H9g2xdVoNZN+TZHRaDnBotlHt/Qjg3hE0Bq8AWNxV0oA87G85Uotj2Ben+cn3ML0ORqQA61/JUqcC7NOl1B3YX5SUhd0br6ouLLlg1ltRuEjJe2BbePIDOfCGRoYKbfDSpPAx+MqANZdOfrIInpAWw4ONalwaZas0G95tWH7QXmikPlG8u3v1fwryKjwG7wQlLYRDzqWwNEVSi1xoIrkxrpbUvISCoPF5vKTeEbyKSb/+9qok5wgk6SaYIanPY4+1128wV5LuhAv3EK0mSc61t92W+SN0lXkPhH14yZK0AirIJVpd5lswVZKq9L/4F6CMxkDhx7dOayapzDmKs0KhUOgeePEcO+VzJyUBy2B4xsdBmb9BHbnslvViuE6Jt+zHXkaBH7BuH6Lm+P2gmEN+tkKSZQw84mOfv8O2MFzt/ATs/f76bwzFLfzhFIDXtgkceizm7PXQzkhbum5t+icwwfISzC8t2ln+gOG9YXF9SastZtnuH8FjSYW4qZKUWKdOhetgfRUp4SX4SxPhaAtJM6LklS+1zdUl5yY4lTIPsiQNxvjcdRtKagqv6D14NU5ynoNr07ZD7gev7IWSbnJ+A+/LZ1cAWSo18j58bgtwqfrBsfDkpz3g65EXwv5rxi9cAZepQTZsfeDelZBbTQ22YS2aJqnCYux3q9ROb8f6uKPAn5jezUAo+AX2FUlSn9NYs/tLSrl6TRGHXmokM27BHwUcf6+LzD/XfSP9ue4by0vr1lXTn+u+yXxwP7nfDZWktAf3Rk9/20MX/7FuugLz/sgnsu66FEmq8sC2SHTXY9V1HuBWUDgg0AEAAFAOAJ0BKmAAYAA+bTSXSCQjIiEoE5kwgA2JYgDWnAt6X+SvNlaBeB8lrqu/272Afiv/M75jzAfrl+sHYA8o7rAP3A9gD9gPSq/ZH4Dv3D9gf9j//+CTQOdBtXmi4UkPTS0vaIfXVKD5zqGny9C9x6pthTK6qtZUDzecUAD+/EoAAGT/Qpvf/6Hg/4C+4abwf6RP1t09h9bdx/+8JD67d4/SJVYkSVb/m7Lv1prVLyC6h6yL7/VKHk3CSpkEyLLIuL//aNIBqF32cLEVnElRP1+gzJb/tWo7zcfrUcUDMrtH/NDCT3k0Ta+Nb7T59KjNHYVtejgO2tavdDL9xMpyKUqnZMlVTahCLbzHz1Ef6fkRx781LqGdRetMSIvuDrHoIjBc4CpVWJv9ktu3/8LofpuqJw5Uw+O7hSOdnb1aVQS59ZC1V4bRXDzmP/ZoOq2hE0mMfYreu5ZjuQYvxb/SdL//8BkXnQXqgvC4/+TEkjqJFrd9xAB0+uAWFSchjAsX78goXk/TbflteDkiQ894rGtiG8RrlbOb8vXVsiYUCpvxLVNVv+4osfVGpRQdAMhgAXG9i4uldH5bXlb/fNyyIxf5eurSCYq5lgEq7wAAAAAA"
                                                        alt="Coinbase Ventures" /></a
                                                ><a
                                                    href="https://ventures.coinbase.com/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p class="mt-5 text-center text-gray">
                                                        Coinbase Ventures &amp; Unit 411
                                                    </p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50"
                                            >
                                                <a
                                                    href="https://www.gitcoin.co/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,UklGRhYDAABXRUJQVlA4WAoAAAAQAAAAXwAAXwAAQUxQSIoCAAABoC3JtmnbalvHtm3btm3btm1f+95xbevYtm3bVj2MMfEHJyImQG9EHVHrrc0nzm59r3qEI4UxxkjGbzFHnonLDh3f9HaVCEfC7j/uObP9px5JXJmMMe9LamfMx0lcKYwxCyRV2IPnziJWFgAJv00kZfzlNe6dSaXIYXdx3x0fbRUB7kpaAiyNcmQBzkrdX+LzaaPwSt/E+wcp7h/4XREvEPMdSRy1XgE83Lz1IcCjXGFlv419/dJrnqWTvsN+cvaJxZ8RgejgI9ZZ4OXoOFKCqa842CTCR5YsWUYAy7NkyRJPKwB+ySulnv251BTgQotYiml2DqB9sCclvdoDdJKzS5tIyYekLsAfklQS4D05Y0k7gAvpZKc+D+wPxqW0Hj8A2xUwlFnA1bguKT1AW7lbAGQNcBXYElsJre3AKKv9EHfKcP4FPpJ3PeBZHI/YT4GGAfruAL6QrLNAR2sv7vzhrAUm+WgHXJT3OaBLgC4ZrwKDHbuBIf7ShPMf8J6PesDTWB4xT4BGQVT+ObyqYf0MrLAW//HHQeBBdDjzgAuxvDIANPNoDJAjkHoBt62OAHXk/Bv4R+FUAJjripb2AqdSOlKcBA4rwGBJ7+M8G/cycL+FpKjJAE1C0maArzNLKWZ8IHUAOFkvSlENTgJ0DjJEUqx1LjXFPvjpl+cAtkaEVfAR9vkzr3iYQhH/Y9878QB7aUQYSn3Opf6v8Xkxs8JStYeW82Mp8SbLc0NihaJij12qedhraVqFp7xrvfYlkmLNfOLxYGoshaR2Hops+OG2U8fWzy4tZwpjjHFUMMYM8pBKzll//MzW92tFyk41+K/jZ/f+0ieJnJmMMe9LameMqeXSIGMWWG/2DVZQOCBmAAAAcAUAnQEqYABgAD5tMJRGpCMiISuIAIANiWkA1MggWoCbW0iYOXd3RpHKkax8iBxxNraNQAD++yGAAEJ+dlFWNilwUSRpnqRcoouH//6/nYKA3sKvsYxQQOSVJretpA0WaqAAAAAA"
                                                        alt="GitCoin" /></a
                                                ><a
                                                    href="https://www.gitcoin.co/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p class="mt-5 text-center text-gray">Gitcoin</p></a
                                                >
                                            </div>
                                            <div
                                                class="col-span-1 flex flex-col justify-center py-8 px-8 bg-gray-50"
                                            >
                                                <a
                                                    href="https://rpscientists.com/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><img
                                                        class="max-h-24 m-auto"
                                                        src="data:image/webp;base64,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"
                                                        alt="Rocket Scientists" /></a
                                                ><a
                                                    href="https://rpscientists.com/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><p class="mt-5 text-center text-gray">
                                                        Rocket Scientists
                                                    </p></a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-20 bg-white" id="node-operator-interest">
                            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div
                                    class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
                                >
                                    <h2
                                        class="py-2 text-center text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent leading-8"
                                    >
                                        <span class="block">Interested in node operation?</span>
                                    </h2>
                                    <div
                                        class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
                                    >
                                        <div class="rounded-md shadow">
                                            <a
                                                href="https://rocketpool.net/node-operators"
                                                target="_blank"
                                                rel="noreferrer"
                                                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button md:py-5 md:text-3xl md:px-10"
                                            >
                                                Find out more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer
                            class="bg-white pb-20"
                            aria-labelledby="footer-heading"
                            id="footer"
                        >
                            <h2 id="footer-heading" class="sr-only">Footer</h2>
                            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                                <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                                    <div class="space-y-8 xl:col-span-1">
                                        <img
                                            class="h-10"
                                            src="data:image/webp;base64,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"
                                            alt="Rocket Pool"
                                        />
                                        <p class="text-gray-500 text-base">
                                            Decentralised Ethereum Staking Protocol
                                        </p>
                                        <div class="flex space-x-6">
                                            <a
                                                href="https://discord.gg/rocketpool"
                                                class="text-gray-400 hover:text-gray-500"
                                                target="_blank"
                                                rel="noreferrer"
                                            ><span class="sr-only">Discord</span
                                            ><svg
                                                class="svg-inline--fa fa-discord h-6 w-6"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                data-icon="discord"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 640 512"
                                            >
                                                    <path
                                                        class=""
                                                        fill="currentColor"
                                                        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                                                    ></path></svg></a
                                            ><a
                                                href="https://medium.com/rocket-pool"
                                                class="text-gray-400 hover:text-gray-500"
                                                target="_blank"
                                                rel="noreferrer"
                                            ><span class="sr-only">Medium</span
                                            ><svg
                                                class="svg-inline--fa fa-medium h-6 w-6"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                data-icon="medium"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 640 512"
                                            >
                                                    <path
                                                        class=""
                                                        fill="currentColor"
                                                        d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"
                                                    ></path></svg></a
                                            ><a
                                                href="https://twitter.com/Rocket_Pool"
                                                class="text-gray-400 hover:text-gray-500"
                                                target="_blank"
                                                rel="noreferrer"
                                            ><span class="sr-only">Twitter</span
                                            ><svg
                                                class="svg-inline--fa fa-twitter h-6 w-6"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                data-icon="twitter"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                    <path
                                                        class=""
                                                        fill="currentColor"
                                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                                    ></path></svg></a
                                            ><a
                                                href="https://github.com/rocket-pool"
                                                class="text-gray-400 hover:text-gray-500"
                                                target="_blank"
                                                rel="noreferrer"
                                            ><span class="sr-only">GitHub</span
                                            ><svg
                                                class="svg-inline--fa fa-github h-6 w-6"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                data-icon="github"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 496 512"
                                            >
                                                    <path
                                                        class=""
                                                        fill="currentColor"
                                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                                    ></path></svg></a
                                            ><a
                                                href="https://dao.rocketpool.net/"
                                                class="text-gray-400 hover:text-gray-500"
                                                target="_blank"
                                                rel="noreferrer"
                                            ><span class="sr-only">Forum</span
                                            ><svg
                                                class="svg-inline--fa fa-discourse h-6 w-6"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                data-icon="discourse"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                            >
                                                    <path
                                                        class=""
                                                        fill="currentColor"
                                                        d="M225.9 32C103.3 32 0 130.5 0 252.1 0 256 .1 480 .1 480l225.8-.2c122.7 0 222.1-102.3 222.1-223.9C448 134.3 348.6 32 225.9 32zM224 384c-19.4 0-37.9-4.3-54.4-12.1L88.5 392l22.9-75c-9.8-18.1-15.4-38.9-15.4-61 0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128z"
                                                    ></path></svg></a
                                            ><a
                                                href="https://youtube.com/rocketpool"
                                                class="text-gray-400 hover:text-gray-500"
                                                target="_blank"
                                                rel="noreferrer"
                                            ><span class="sr-only">Youtube</span
                                            ><svg
                                                class="svg-inline--fa fa-youtube h-6 w-6"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                data-icon="youtube"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 576 512"
                                            >
                                                    <path
                                                        class=""
                                                        fill="currentColor"
                                                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                                    ></path></svg></a
                                            ><a
                                                href="https://www.reddit.com/r/rocketpool"
                                                class="text-gray-400 hover:text-gray-500"
                                                target="_blank"
                                                rel="noreferrer"
                                            ><span class="sr-only">Reddit</span
                                            ><svg
                                                class="svg-inline--fa fa-reddit h-6 w-6"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                data-icon="reddit"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                    <path
                                                        class=""
                                                        fill="currentColor"
                                                        d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                                        <div class="md:grid md:grid-cols-2 md:gap-8">
                                            <div>
                                                <h3
                                                    class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
                                                >
                                                    Staking
                                                </h3>
                                                <ul role="list" class="mt-4 space-y-4">
                                                    <li>
                                                        <a
                                                            href="https://docs.rocketpool.net/guides/staking/overview.html"
                                                            class="text-base text-gray-500 hover:text-gray-900"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >Overview</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://docs.rocketpool.net/guides/staking/overview.html#how-eth2-staking-works"
                                                            class="text-base text-gray-500 hover:text-gray-900"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >ETH2 Staking</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://docs.rocketpool.net/guides/staking/overview.html#how-rocket-pool-works"
                                                            class="text-base text-gray-500 hover:text-gray-900"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >Rocket Pool Staking</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://docs.rocketpool.net/guides/staking/overview.html#the-reth-token"
                                                            class="text-base text-gray-500 hover:text-gray-900"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >rEth Token</a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="mt-12 md:mt-0">
                                                <h3
                                                    class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
                                                >
                                                    Node Operation
                                                </h3>
                                                <ul role="list" class="mt-4 space-y-4">
                                                    <li>
                                                        <a
                                                            href="https://docs.rocketpool.net/guides/node/responsibilities.html#how-rocket-pool-nodes-work"
                                                            class="text-base text-gray-500 hover:text-gray-900"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >How it works</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://docs.rocketpool.net/guides/node/local/hardware.html"
                                                            class="text-base text-gray-500 hover:text-gray-900"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >Local Nodes</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://docs.rocketpool.net/guides/node/vps/providers.html"
                                                            class="text-base text-gray-500 hover:text-gray-900"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >Cloud Nodes</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://docs.rocketpool.net/guides/node/eth-clients.html"
                                                            class="text-base text-gray-500 hover:text-gray-900"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >Install Rocket Pool</a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="md:grid md:grid-cols-2 md:gap-8">
                                            <div>
                                                <h3
                                                    class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
                                                >
                                                    Learn
                                                </h3>
                                                <ul role="list" class="mt-4 space-y-4">
                                                    <li>
                                                        <a
                                                            href="https://docs.rocketpool.net/overview/"
                                                            class="text-base text-gray-500 hover:text-gray-900"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >Introduction</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-1-8be4859e5fbd"
                                                            class="text-base text-gray-500 hover:text-gray-900"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >Explainer Series</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://docs.rocketpool.net/guides/"
                                                            class="text-base text-gray-500 hover:text-gray-900"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >Guides</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://docs.rocketpool.net/developers/"
                                                            class="text-base text-gray-500 hover:text-gray-900"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >Developers</a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="mt-12 md:mt-0">
                                                <h3
                                                    class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
                                                >
                                                    Governance
                                                </h3>
                                                <ul role="list" class="mt-4 space-y-4">
                                                    <li>
                                                        <a
                                                            href="https://dao.rocketpool.net/"
                                                            class="text-base text-gray-500 hover:text-gray-900"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >Forum</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://vote.rocketpool.net/"
                                                            class="text-base text-gray-500 hover:text-gray-900"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >Proposals</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://delegates.rocketpool.net/"
                                                            class="text-base text-gray-500 hover:text-gray-900"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >Delegates</a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-12 border-t border-gray-200 pt-8">
                                    <p class="text-base text-gray-400 xl:text-center pb-5">
                                        <span class="pr-4">
                                            <a
                                                href="https://rocketpool.net/files/privacy-policy.pdf"
                                                class="text-base xl:text-center text-gray-400 hover:text-gray-900"
                                                target="_blank"
                                                rel="noreferrer"
                                            >Privacy Policy</a
                                            >
                                        </span>
                                        <span class="pr-4"
                                        ><a
                                            href="https://rocketpool.net/files/terms-of-service.pdf"
                                            class="text-base xl:text-center text-gray-400 hover:text-gray-900"
                                            target="_blank"
                                            rel="noreferrer"
                                        >Terms of Service</a
                                            >
                                        </span>
                                    </p>
                                    <p class="text-base text-gray-400 xl:text-center">
                                        <span class="pr-4">© Rocket Pool Pty Ltd.</span>
                                    </p>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}
