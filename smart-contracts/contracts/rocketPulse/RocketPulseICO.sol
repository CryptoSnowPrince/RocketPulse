// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import {IERC20Metadata} from "./lib/interfaces/IERC20Metadata.sol";
import {IERC20} from "./lib/interfaces/IERC20.sol";
import {IPair} from "./lib/dex/IPair.sol";
import {SafeERC20} from "./lib/token/ERC20/utils/SafeERC20.sol";
import {OwnableUpgradeable} from "./libV2/access/OwnableUpgradeable.sol";

contract RocketPulseICO is OwnableUpgradeable {
    address public token;
    address public daiToken;
    address public plsDaiPair;
    uint256 public startTime;
    uint256 public allocatedAmount;

    // address(0) is native currency, support native, stable token
    mapping(address => bool) public paymentTokenList; // token => allow

    uint256 public totalSoldAmount;
    uint256 public totalFundsInUSD;
    mapping(address => uint256) public tokenBuyAmount;

    event LogBuyToken(
        address indexed user,
        address indexed payToken,
        uint256 payTokenAmount,
        uint256 buyTokenAmount
    );
    event LogSetTokenList(address indexed token, bool isAllow);
    event LogSetAllocated(uint256 indexed allocatedAmount);
    event LogSetStartTime(uint256 indexed startTime);
    event LogSetPlsDaiPair(address indexed plsDaiPair);
    event LogSetDaiToken(address indexed daiToken);
    event LogSetToken(address indexed token);

    // Construct
    function initialize(
        address _token,
        address _dai,
        address _usdc,
        address _usdt,
        address _plsDaiPair,
        uint256 _startTime,
        uint256 _allocatedAmount
    ) public initializer {
        __Ownable_init(msg.sender);
        token = _token;
        daiToken = _dai;
        plsDaiPair = _plsDaiPair;
        startTime = _startTime;
        allocatedAmount = _allocatedAmount;
        // PLS
        SetTokenList(address(0), true);
        // DAI
        SetTokenList(_dai, true);
        // USDC
        SetTokenList(_usdc, true);
        // USDT
        SetTokenList(_usdt, true);
    }

    function getRoundNumber() public view returns (uint256) {
        if (block.timestamp < startTime) return 0;
        uint256 deltaDays = (block.timestamp - startTime) / 1 days;
        if (deltaDays < 3) return 1;

        if (deltaDays > 25) return 25;

        return deltaDays - 1;
    }

    function getRoundStartTime(
        uint256 roundNumber
    ) external view returns (uint256) {
        if (roundNumber < 2) return startTime;

        if (roundNumber > 24) roundNumber = 24;

        return startTime + (1 + roundNumber) * 1 days;
    }

    function getCurrentTokenPrice() public view returns (uint256) {
        return
            [
                20000, // Round 0, NO Round
                20000, // Round 1, Day 1, 2, 3
                50000, // Round 2, Day 4
                100000, // Round 3, Day 5
                150000, // Round 4, Day 6
                200000, // Round 5, Day 7
                225000, // Round 6, Day 8
                250000, // Round 7, Day 9
                275000, // Round 8, Day 10
                300000, // Round 9, Day 11
                320000, // Round 10, Day 12
                340000, // Round 11, Day 13
                360000, // Round 12, Day 14
                380000, // Round 13, Day 15
                400000, // Round 14, Day 16
                410000, // Round 15, Day 17
                420000, // Round 16, Day 18
                430000, // Round 17, Day 19
                440000, // Round 18, Day 20
                450000, // Round 19, Day 21
                460000, // Round 20, Day 22
                470000, // Round 21, Day 23
                480000, // Round 22, Day 24
                490000, // Round 23, Day 25
                500000, // Round 24, Day 26
                500000 // Round 25, Over Round, Day 27+
            ][getRoundNumber()];
    }

    function getPaymentTokenAmount(
        address paymentToken,
        uint256 usdAmount // usd decimals is 6
    ) public view returns (uint256) {
        // PLS
        if (paymentToken == address(0)) {
            (uint112 r0, uint112 r1, ) = IPair(plsDaiPair).getReserves();
            uint256 dicimalExp = 10 ** IERC20Metadata(daiToken).decimals();
            if (daiToken == IPair(plsDaiPair).token0()) {
                return (((r1 * usdAmount) / r0) * dicimalExp) / 10 ** 6;
            } else {
                return (((r0 * usdAmount) / r1) * dicimalExp) / 10 ** 6;
            }
        }
        // Stable
        else {
            uint256 dicimalExp = 10 ** IERC20Metadata(paymentToken).decimals();
            return (usdAmount * dicimalExp) / 10 ** 6;
        }
    }

    function getUsdAmount(
        address paymentToken,
        uint256 payTokenAmount // usd decimals is 6
    ) public view returns (uint256) {
        // PLS
        if (paymentToken == address(0)) {
            (uint112 r0, uint112 r1, ) = IPair(plsDaiPair).getReserves();
            uint256 dicimalExp = 10 ** IERC20Metadata(daiToken).decimals();
            if (daiToken == IPair(plsDaiPair).token0()) {
                return (((r0 * payTokenAmount) / r1) * 10 ** 6) / dicimalExp;
            } else {
                return (((r1 * payTokenAmount) / r0) * 10 ** 6) / dicimalExp;
            }
        }
        // Stable
        else {
            uint256 dicimalExp = 10 ** IERC20Metadata(paymentToken).decimals();
            return (payTokenAmount * 10 ** 6) / dicimalExp;
        }
    }

    modifier buyable(address paymentToken, uint256 amount) {
        require(block.timestamp >= startTime, "TIME_UNDER");
        require(paymentTokenList[paymentToken], "NO_PAYMENT_TOKEN");
        require(amount > 0, "UNDER_ZERO");
        _;
        require(totalSoldAmount <= allocatedAmount, "ALLOCATION_LIMIT");
    }

    function _buyTokenExactIn(address inToken, uint256 inAmount) private {
        uint256 usdAmount = getUsdAmount(inToken, inAmount);
        totalFundsInUSD += usdAmount;

        uint256 tokenPrice = getCurrentTokenPrice();
        uint256 dicimalExp = 10 ** IERC20Metadata(token).decimals();
        uint256 outAmount = (usdAmount * dicimalExp) / tokenPrice;

        totalSoldAmount += outAmount;

        tokenBuyAmount[msg.sender] += outAmount;

        SafeERC20.safeTransfer(IERC20(token), msg.sender, outAmount);
        emit LogBuyToken(msg.sender, inToken, inAmount, outAmount);
    }

    function _buyTokenExactOut(
        address inToken,
        uint256 outAmount
    ) private returns (uint256) {
        totalSoldAmount += outAmount;

        tokenBuyAmount[msg.sender] += outAmount;

        uint256 tokenPrice = getCurrentTokenPrice();
        uint256 dicimalExp = 10 ** IERC20Metadata(token).decimals();

        uint256 usdAmount = (tokenPrice * outAmount) / dicimalExp;
        totalFundsInUSD += usdAmount;

        uint256 inAmount = getPaymentTokenAmount(inToken, usdAmount);

        SafeERC20.safeTransfer(IERC20(token), msg.sender, outAmount);
        emit LogBuyToken(msg.sender, inToken, inAmount, outAmount);

        return inAmount;
    }

    function buyTokenExactInWithPLS()
        external
        payable
        buyable(address(0), msg.value)
    {
        _buyTokenExactIn(address(0), msg.value);
    }

    function buyTokenExactOutWithPLS(
        uint256 buyAmount
    ) external payable buyable(address(0), buyAmount) {
        uint256 payAmount = _buyTokenExactOut(address(0), buyAmount);

        require(msg.value >= payAmount, "INSUFFICIENT_FUND");
    }

    function buyTokenExactIn(
        address paymentToken,
        uint256 payAmount
    ) external buyable(paymentToken, payAmount) {
        SafeERC20.safeTransferFrom(
            IERC20(paymentToken),
            msg.sender,
            address(this),
            payAmount
        );

        _buyTokenExactIn(paymentToken, payAmount);
    }

    function buyTokenExactOut(
        address paymentToken,
        uint256 buyAmount
    ) external buyable(paymentToken, buyAmount) {
        uint256 payAmount = _buyTokenExactOut(paymentToken, buyAmount);

        SafeERC20.safeTransferFrom(
            IERC20(paymentToken),
            msg.sender,
            address(this),
            payAmount
        );
    }

    function SetTokenList(address _token, bool _isAllow) public onlyOwner {
        require(paymentTokenList[_token] != _isAllow, "SET_SAME_VALUE");

        paymentTokenList[_token] = _isAllow;
        emit LogSetTokenList(_token, _isAllow);
    }

    function SetAllocated(uint256 _allocatedAmount) public onlyOwner {
        require(allocatedAmount != _allocatedAmount, "SET_SAME_VALUE");

        allocatedAmount = _allocatedAmount;
        emit LogSetAllocated(allocatedAmount);
    }

    function SetStartTime(uint256 _startTime) public onlyOwner {
        require(startTime != _startTime, "SET_SAME_VALUE");

        startTime = _startTime;
        emit LogSetStartTime(startTime);
    }

    function SetPlsDaiPair(address _plsDaiPair) public onlyOwner {
        require(plsDaiPair != _plsDaiPair, "SET_SAME_VALUE");

        plsDaiPair = _plsDaiPair;
        emit LogSetPlsDaiPair(plsDaiPair);
    }

    function SetDaiToken(address _daiToken) public onlyOwner {
        require(daiToken != _daiToken, "SET_SAME_VALUE");

        daiToken = _daiToken;
        emit LogSetDaiToken(daiToken);
    }

    function SetToken(address _token) public onlyOwner {
        require(token != _token, "SET_SAME_VALUE");

        token = _token;
        emit LogSetToken(token);
    }

    receive() external payable {}

    fallback() external payable {}

    function withdrawETH(address to, uint256 amount) external onlyOwner {
        require(
            getRoundNumber() > 24 || totalSoldAmount >= allocatedAmount,
            "IN_ROUND"
        );
        uint256 balance = address(this).balance;
        require(balance >= amount, "Insufficient funds");
        payable(to).transfer(amount);
    }

    function withdrawToken(
        address _token,
        address to,
        uint256 amount
    ) external onlyOwner {
        require(
            getRoundNumber() > 24 || totalSoldAmount >= allocatedAmount,
            "IN_ROUND"
        );
        uint256 balance = IERC20(_token).balanceOf(address(this));
        require(balance >= amount, "Insufficient funds");
        SafeERC20.safeTransfer(IERC20(_token), to, amount);
    }

    function balanceOf(
        address account,
        address _token
    ) external view returns (uint256) {
        if (_token == address(0)) {
            return account.balance;
        }
        return IERC20(_token).balanceOf(account);
    }

    function allowance(
        address owner,
        address spender,
        address _token
    ) external view returns (uint256) {
        if (_token == address(0)) {
            return 2 ** 256 - 1;
        }
        return IERC20(_token).allowance(owner, spender);
    }

    function dummy(address account) external pure returns (address) {
        return account;
    }
}
