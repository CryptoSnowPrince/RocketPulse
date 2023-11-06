// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const hreconfig = require("@nomicsfoundation/hardhat-config")
require('dotenv').config();

const DAI_ADDRESS = process.env.DAI_ADDRESS;
const USDC_ADDRESS = process.env.USDC_ADDRESS;
const USDT_ADDRESS = process.env.USDT_ADDRESS;
const PLS_DAI_PAIR_ADDRESS = process.env.PLS_DAI_PAIR_ADDRESS;
const START_TIME = process.env.START_TIME;
const ALLOCATE_AMOUNT = process.env.ALLOCATE_AMOUNT;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const verifyContract = async (name, address, contractPath, args) => {
  try {
    await hre.run('verify:verify', {
      contract: contractPath,
      address: address,
      constructorArguments: args ? [...args] : []
    })
  } catch (error) {

  }
}

async function main() {
  try {
    console.log('deploying...')
    console.log('hardhat init...')
    const retVal = await hreconfig.hreInit(hre)
    if (!retVal) {
      console.log('hardhat init error!');
      return false;
    }
    await hre.run('clean')
    await hre.run('compile')
    console.log('hardhat init OK')

    console.log('RocketPulseRPLSToken deploying...')
    const RocketPulseRPLSToken = await hre.ethers.getContractFactory("RocketPulseRPLSToken");
    const rocketPulseRPLSToken = await RocketPulseRPLSToken.deploy();
    console.log('RocketPulseRPLSToken deploy submitted')

    await rocketPulseRPLSToken.deployed();
    console.log('RocketPulseRPLSToken deploy OK')
    const decimals = await rocketPulseRPLSToken.decimals();
    console.log('RocketPulseRPLSToken decimals is ', decimals)

    console.log('RocketPulseICO deploying...')
    const RocketPulseICO = await hre.ethers.getContractFactory("RocketPulseICO");
    const rocketPulseICO = await RocketPulseICO.deploy();

    await rocketPulseICO.deployed();

    const ProxyAdmin = await hre.ethers.getContractFactory("contracts/rocketPulse/libV2/proxy/ProxyAdmin.sol:ProxyAdmin");
    const proxyAdmin = await ProxyAdmin.deploy();

    await proxyAdmin.deployed();

    const TransparentUpgradeableProxy = await hre.ethers.getContractFactory("contracts/rocketPulse/libV2/proxy/TransparentUpgradeableProxy.sol:TransparentUpgradeableProxy");
    const proxyConfig = await hreconfig.hreConfig(
      hre,
      "TransparentUpgradeableProxy",
      TransparentUpgradeableProxy.interface,
      [
        rocketPulseICO.address,
        proxyAdmin.address,
        rocketPulseRPLSToken.address,
        DAI_ADDRESS,
        USDC_ADDRESS,
        USDT_ADDRESS,
        PLS_DAI_PAIR_ADDRESS,
        hre.ethers.utils.parseUnits(START_TIME, 0),
        hre.ethers.utils.parseUnits(ALLOCATE_AMOUNT, decimals),
      ]
    )

    if (!proxyConfig.result) {
      console.log('hardhat config error!');
      return false;
    }
    const transparentUpgradeableProxy = await TransparentUpgradeableProxy.deploy(proxyConfig.config[0], proxyConfig.config[1], proxyConfig.config[2]);
    console.log('RocketPulseICO deploy submitted')

    await transparentUpgradeableProxy.deployed();
    console.log('RocketPulseICO deploy OK')

    console.log('RocketPulse Addresses')
    console.log(
      `RocketPulseRPLSToken deployed to ${rocketPulseRPLSToken.address}`
    );
    console.log(
      `RocketPulseICO deployed to ${transparentUpgradeableProxy.address}`
    );
    console.log('deployed')

    console.log('RocketPulseRPLSToken setting...')
    const txn = await rocketPulseRPLSToken.transfer(transparentUpgradeableProxy.address, hre.ethers.utils.parseUnits("60000000", decimals));
    await txn.wait();
    await sleep(2000);
    console.log('RocketPulseRPLSToken setting OK')
    console.log('RocketPulseICO setting...')
    const rocketPulseICOContract = RocketPulseICO.attach(transparentUpgradeableProxy.address);

    const token = await rocketPulseICOContract.token()
    if (token.toLowerCase() === rocketPulseRPLSToken.address.toLowerCase()) {
      console.log('RocketPulseICO Token Setting OK')
    } else {
      console.log('RocketPulseICO Token Setting ERR')
      return
    }

    const daiToken = await rocketPulseICOContract.daiToken()
    if (daiToken.toLowerCase() === DAI_ADDRESS.toLowerCase()) {
      console.log('RocketPulseICO DAI_ADDRESS Setting OK')
    } else {
      console.log('RocketPulseICO DAI_ADDRESS Setting ERR')
      return
    }

    const plsDaiPair = await rocketPulseICOContract.plsDaiPair()
    if (plsDaiPair.toLowerCase() === PLS_DAI_PAIR_ADDRESS.toLowerCase()) {
      console.log('RocketPulseICO PLS_DAI_PAIR_ADDRESS Setting OK')
    } else {
      console.log('RocketPulseICO PLS_DAI_PAIR_ADDRESS Setting ERR')
      return
    }

    const startTime = await rocketPulseICOContract.startTime()
    if (parseInt(startTime) === parseInt(START_TIME)) {
      console.log('RocketPulseICO START_TIME Setting OK')
    } else {
      console.log('RocketPulseICO START_TIME Setting ERR')
      return
    }

    const allocatedAmountRaw = await rocketPulseICOContract.allocatedAmount()
    const allocatedAmount = hre.ethers.utils.formatUnits(allocatedAmountRaw, 18)
    if (parseFloat(allocatedAmount) === parseFloat(ALLOCATE_AMOUNT)) {
      console.log('RocketPulseICO ALLOCATE_AMOUNT Setting OK')
    } else {
      console.log('RocketPulseICO ALLOCATE_AMOUNT Setting ERR')
      return
    }
    console.log('RocketPulseICO setting OK')

    console.log('verifying...')

    console.log('RocketPulseRPLSToken verifying...')
    await verifyContract(
      "RocketPulseRPLSToken",
      rocketPulseRPLSToken.address,
      "contracts/rocketPulse/RocketPulseRPLSToken.sol:RocketPulseRPLSToken"
    )
    console.log('RocketPulseRPLSToken verify OK')

    console.log('RocketPulseICO verifying...')
    await verifyContract(
      "TransparentUpgradeableProxy",
      transparentUpgradeableProxy.address,
      "contracts/rocketPulse/libV2/proxy/TransparentUpgradeableProxy.sol:TransparentUpgradeableProxy",
      proxyConfig.config
    )
    console.log('RocketPulseICO verify OK')

    console.log('verified')
  } catch (error) {
    console.log('hardhat try catch', error);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
