// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import {ERC20Burnable, ERC20} from "./lib/token/ERC20/extensions/ERC20Burnable.sol";
import {Ownable} from "./lib/access/Ownable.sol";

contract RocketPulseRPLSToken is ERC20Burnable, Ownable {
    /**** Contracts ****/

    // Construct
    constructor() ERC20("Rocket Pulse RPLS", "RPLS") Ownable(msg.sender) {
        // Mint the 180m tokens
        _mint(msg.sender, 180 * 10 ** 6 * 10 ** 18);
    }

    function mint(address account, uint256 value) external onlyOwner {
        _mint(account, value);
    }

    function dummy(address account) external pure returns (address) {
        return account;
    }
}
