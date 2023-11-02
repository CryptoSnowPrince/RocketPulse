# RocketPulse Smart Contracts - A next generation Ethereum proof of stake (PoS) infrastructure service and pool

<p align="center">
  <img src="https://raw.githubusercontent.com/rocket-pool/rocketpool/master/images/logo.png?raw=true" alt="Rocket Pool - Next Generation Decentralised Ethereum Proof-of-Stake (PoS) Infrastructure Service and Pool" width="500" />
</p>

---

`Rocket Pool` is a first of its kind Ethereum Proof of Stake (PoS) infrastructure service, designed to be highly decentralised, distributed and compatible with staking in Ethereum  2.0 on the beacon chain. It was first conceived in late 2016 and has since had several successful public betas over the life span of ETH2 development. The staking network allows any individual, business, defi dapp, wallet provider, SaaS provider, exchange — just about any service — the ability to provide their users with the option to earn staking rewards on their ETH holdings without worrying about maintaining an extensive staking infrastructure, just plug and play.

Staking with the Rocket Pool network is very flexible and unlike any other staking infrastructure for Ethereum 2.0 to date. When depositing ETH into the Rocket Pool smart contracts, you will be instantly issued a token called rETH which represents a tokenised staking deposit in the network. Its value and the rewards it gains over time will be reflected by the work each individual decentralised node operator gives the Rocket Pool network. Rocket Pool’s unique decentralised staking infrastructure is economically bonded to both be secure and scalable.

Rocket Pool isn't just a whitepaper, it's actual code. Be sure to read the [Rocket Pool 101 - FAQ for more information](https://medium.com/rocket-pool/rocket-pool-101-faq-ee683af10da9).

# Test Rocket Pool

<p align="center">
  <img src="https://raw.githubusercontent.com/rocket-pool/rocketpool/master/images/rocket-pool-atlas-test.png?raw=true" alt="Rocket Pool - Testing Ethereum Proof-of-Stake (PoS) Infrastructure Service and Pool for Ethereum 2.0 Beacon Chain"/>
</p>

To see Rocket Pool in action, clone the repo and run the test suite with the following commands:
```bash
$ npm install
$ npm test
```

# Rocket Pool White Paper

You can read the current Rocket Pool white paper here: [http://www.rocketpool.net/files/RocketPoolWhitePaper.pdf](http://www.rocketpool.net/files/RocketPoolWhitePaper.pdf).

# Contact and Additional Information

Check out [our website](http://www.rocketpool.net) for more information on Rocket Pool.

Contact form: https://www.rocketpool.net/#contact

Twitter: https://twitter.com/Rocket_Pool

Join our Discord chat channel! https://discordapp.com/invite/rocketpool

---

# A Step-by-Step Beginners Guide

The following worked example uses macOS Sierra 10.12.6 and VMware Fusion 8.5.8 - all versions correct as of 15/09/2017.

Download and install Ubuntu onto a new VM -> https://www.ubuntu.com/download/desktop - tested with v16.04

Open a terminal window and install some pre-requisites:

install git:
```bash
$ sudo apt -y install git
```
install curl:  
```bash
$ sudo apt -y install curl
```
install npm:
```bash
$ sudo apt -y install npm
```
install node.js:
```bash
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get -y install nodejs
```
get rocketpool:
```bash
$ git clone https://github.com/rocket-pool/rocketpool
```
open the rocketpool directory:
```bash
$ cd rocketpool
```
install npm packages and run tests:
```bash
$ npm install && npm test
```

```text
Goerli Testnet:
RPLS token: 0xd2A37C328059EcA94943db0A3E24425E57cCcCDA
MockDAI: 0x958Fa6BaC2D29D7B7aDcf75e1C85549147072182
MockUSDC: 0x26a24Ed2a666D181e37E1Dd0dF97257b3F4B214E
MockUSDT: 0x10cB7737c5A547B71C25c3f2dbF12A1BD6374cf4
MockPlsDaiPair: 0x71D4d2cD9650074b06a0fcB6455f63f253A1d299
_startTime: 1698850800
_allocatedAmount: 60000000000000000000000000

RocketPulseICO
Logic: 0xFD93403DD8B904B812932A4C776008C555e8c332
ProxyAdmin: 0xb2Eb914E5674839D2B03aA3e6116f7C47191C934
b33f9527000000000000000000000000d2a37c328059eca94943db0a3e24425e57ccccda000000000000000000000000958fa6bac2d29d7b7adcf75e1c8554914707218200000000000000000000000026a24ed2a666d181e37e1dd0df97257b3f4b214e00000000000000000000000010cb7737c5a547b71c25c3f2dbf12a1bd6374cf400000000000000000000000071d4d2cd9650074b06a0fcb6455f63f253a1d29900000000000000000000000000000000000000000000000000000000654267f000000000000000000000000000000000000000000031a17e847807b1bc000000
Implement: 0xC8d994df027105d8e245659B2934d534F34b18CE

TestLogic: 0x2e16A3a4cc3a0eaeCEaE7D21b23f77BcFB62d484

update of ProxyAdmin: 

TestLogic1: 0x916c53F608D89F2496D87944d26a3E6d5540906C

update of ProxyAdmin: 
```
