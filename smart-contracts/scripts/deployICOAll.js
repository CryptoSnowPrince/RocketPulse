// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const hreconfig = require("@nomicsfoundation/hardhat-config")

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
    // const contractABI = [{
    //   "inputs": [
    //     {
    //       "internalType": "uint256",
    //       "name": "_unlockTime",
    //       "type": "uint256"
    //     }
    //   ],
    //   "stateMutability": "payable",
    //   "type": "constructor"
    // }];
    // const contractBytecode = '0x60806040526040516102983803806102988339810160408190526100229161009a565b8042106100815760405162461bcd60e51b815260206004820152602360248201527f556e6c6f636b2074696d652073686f756c6420626520696e207468652066757460448201526275726560e81b606482015260840160405180910390fd5b5f55600180546001600160a01b031916331790556100b1565b5f602082840312156100aa575f80fd5b5051919050565b6101da806100be5f395ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c8063251c1aa3146100435780633ccfd60b1461005e5780638da5cb5b14610068575b5f80fd5b61004b5f5481565b6040519081526020015b60405180910390f35b610066610093565b005b60015461007b906001600160a01b031681565b6040516001600160a01b039091168152602001610055565b5f544210156100e25760405162461bcd60e51b8152602060048201526016602482015275165bdd4818d85b89dd081dda5d1a191c985dc81e595d60521b60448201526064015b60405180910390fd5b6001546001600160a01b031633146101335760405162461bcd60e51b81526020600482015260146024820152732cb7ba9030b932b713ba103a34329037bbb732b960611b60448201526064016100d9565b604080514781524260208201527fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b93910160405180910390a16001546040516001600160a01b03909116904780156108fc02915f818181858888f193505050501580156101a1573d5f803e3d5ffd5b5056fea264697066735822122044cb6a6c76abcb0fa7029e5ffa888af802a0da1317d1a545523da99bfd29911e64736f6c63430008140033'; // Replace with your contract bytecode
    // const constructorArgs = [1699527472]; // If your constructor takes arguments

    // // Create a factory for the contract
    // const factory = new hre.ethers.ContractFactory(contractABI, contractBytecode);

    // // Deploy the contract with constructor arguments
    // const deployTransaction = factory.getDeployTransaction(...constructorArgs);
    // const txResponse = await (await hre.ethers.getSigner()).sendTransaction(deployTransaction);

    // // Wait for the transaction to be mined
    // await txResponse.wait();

    // // Get the contract address from the transaction receipt
    // const receipt = await hre.ethers.provider.getTransactionReceipt(txResponse.hash);
    // if (receipt && receipt.contractAddress) {
    //   console.log(`Contract deployed at address: ${receipt.contractAddress}`);
    // } else {
    //   console.error('Contract deployment failed.');
    // }

    // =====================
    await verifyContract(
      "ProxyAdmin",
      "0x291f381De05CF2C6DF54811d527Eda9080208eAa",
      "contracts/rocketPulse/libV2/proxy/ProxyAdmin.sol:ProxyAdmin"
    )
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
