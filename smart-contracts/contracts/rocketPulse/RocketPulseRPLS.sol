// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import {ERC20Burnable, ERC20} from "./lib/token/ERC20/extensions/ERC20Burnable.sol";
import {Ownable} from "./lib/access/Ownable.sol";

contract RocketPulseRPLSToken is ERC20Burnable, Ownable {
    /**** Properties ****/
    uint256 constant totalInitialSupply = 180 * 10 ** 6 * 10 ** 18;

    /**** Contracts ****/

    // Construct
    constructor() ERC20("Rocket Pulse RPLS Token", "RPLS") Ownable(msg.sender) {
        // Mint the 180m tokens
        _mint(address(this), totalInitialSupply);
    }

    function mint() external onlyOwner {}
}
