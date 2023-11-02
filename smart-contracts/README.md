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
V4PulseChain Testnet
RPLS token: 0x135Eeb2ED1B006d900F091250Bd85907B652B18f 18
MockDAI: 0x5e1100ea18F918a4e9AB70694c6c554e1E940D32 18
MockUSDC: 0x38AcAA98Db174cEE218A33635322C19cC1155d20 6
MockUSDT: 0xEe8d287B844959ADe40d718Dc23077ba920e2f07 6
MockPlsDaiPair: 0x65096Ac2834CA82dCB53AF24E53b28781051d87e
_startTime: 1698944400
_allocatedAmount: 60000000000000000000000000

RocketPulseICO
Logic: 0x3a8EA327AB5440701eBaD94B566c790C8f96151f
ProxyAdmin: 0xE874ebc3c26047A8d246f0F6556D3E8Bcd0d2e38
b33f9527000000000000000000000000135eeb2ed1b006d900f091250bd85907b652b18f0000000000000000000000005e1100ea18f918a4e9ab70694c6c554e1e940d3200000000000000000000000038acaa98db174cee218a33635322c19cc1155d20000000000000000000000000ee8d287b844959ade40d718dc23077ba920e2f0700000000000000000000000065096ac2834ca82dcb53af24e53b28781051d87e000000000000000000000000000000000000000000000000000000006543d59000000000000000000000000000000000000000000031a17e847807b1bc000000
Implement: 0x269F2acadDd26d377135E581e27bF40Cf4f5e1b6
```

```text
PulseChain Mainnet:
_dai: address:0xefd766ccb38eaf1dfd701853bfce31359239f305 decimals:18
_usdc: address:0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07 decimals:6
_usdt: address:0x0cb6f5a34ad42ec934882a05265a7d5f59b51a2f decimals:6
_plsDaiPair: address: 0xE56043671df55dE5CDf8459710433C10324DE0aE
```
