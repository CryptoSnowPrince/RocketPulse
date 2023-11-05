// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
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
  const bytes = hre.ethers.utils.solidityPack([
    // "string",
    "address",
    "address",
    "address",
    "address",
    "address",
    "uint256",
    "uint256",
  ], [
    // (hre.ethers.utils.solidityKeccak256("initialize(address,address,address,address,address,uint256,uint256)")),
    "0x135Eeb2ED1B006d900F091250Bd85907B652B18f",
    "0x5e1100ea18F918a4e9AB70694c6c554e1E940D32",
    "0x38AcAA98Db174cEE218A33635322C19cC1155d20",
    "0xEe8d287B844959ADe40d718Dc23077ba920e2f07",
    "0x65096Ac2834CA82dCB53AF24E53b28781051d87e",
    "1698944400",
    "60000000000000000000000000"
  ])

  console.log(bytes)
  const bytes2 = hre.ethers.utils.hexZeroPad("0x65096Ac2834CA82dCB53AF24E53b28781051d87e", 32)
  console.log(bytes2)
  const ethers = hre.ethers
  const functionSignature = 'initialize(address,address,address,address,address,uint256,uint256)';
  const addresses = [
    '0x135Eeb2ED1B006d900F091250Bd85907B652B18f',
    '0x5e1100ea18F918a4e9AB70694c6c554e1E940D32',
    '0x38AcAA98Db174cEE218A33635322C19cC1155d20',
    '0xEe8d287B844959ADe40d718Dc23077ba920e2f07',
    '0x65096Ac2834CA82dCB53AF24E53b28781051d87e',
  ];
  const uint256Values = [1698944400, '0x60000000000000000000000000'];

  // Encode the function signature
  const encodedFunctionSignature = ethers.utils.id(functionSignature).slice(0, 10);

  // Encode the addresses
  const encodedAddresses = addresses.map((address) => ethers.utils.hexZeroPad(address, 32)).join('');

  // Encode the uint256 values
  const encodedUint256 = uint256Values.map((value) => ethers.utils.hexZeroPad(value, 32)).join('');

  // Combine the encoded components to create the bytes string
  const bytesString = encodedFunctionSignature + encodedAddresses + encodedUint256;

  console.log('Bytes String:', bytesString);
  // =====================
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = hre.ethers.utils.parseEther("0.0001");

  // const Lock = await hre.ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();

  // console.log(
  //   `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
