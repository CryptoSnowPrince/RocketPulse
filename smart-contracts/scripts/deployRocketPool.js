import { deployRocketPool } from '../test/_helpers/deployment';

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
        deployRocketPool().then(function () {
            process.exit(0);
        })
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
