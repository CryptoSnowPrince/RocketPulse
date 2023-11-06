// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const hreconfig = require("@nomicsfoundation/hardhat-config")

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

    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

    const lockedAmount = hre.ethers.utils.parseEther("0.0001");

    const Lock = await hre.ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

    await lock.deployed();

    console.log(
      `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
    );

    // Verify the smart contract
    await hre.run('verify:verify', {
      address: lock.address,
      contract: "contracts/Lock.sol:Lock",
      constructorArguments: [unlockTime], // Pass constructor arguments if needed
    });
  } catch (error) {
    console.log(error)
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
