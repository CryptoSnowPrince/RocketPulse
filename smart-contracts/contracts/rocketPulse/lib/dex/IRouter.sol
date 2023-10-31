// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

interface IRouter {
    function factoryV1() external pure returns (address);

    function factoryV2() external pure returns (address);

    function WETH9() external pure returns (address);
}
