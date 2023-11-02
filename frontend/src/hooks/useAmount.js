import { useEffect, useState } from "react";
import ContractABI from "../assets/abi/ico.json"
import { multicall } from '@wagmi/core'
import { global } from "../config/global";
import { formatUnits, parseUnits } from "viem";

export function useAmount(token, payAmount, tokenAmount, curTokenPrice) {
    const [data, setData] = useState({
        payAmountOut: 0,
        tokenAmountOut: 0,
    })

    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        const timerID = setInterval(() => {
            setRefetch((prevData) => {
                return !prevData;
            })
        }, global.REFETCH_INTERVAL);

        return () => {
            clearInterval(timerID);
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const _usdAmount = parseFloat(tokenAmount) && curTokenPrice ? (parseFloat(tokenAmount) * curTokenPrice).toString() : '0'
                const _payAmount = payAmount ? payAmount.toString() : '0'
                // console.log(_usdAmount)
                // console.log(_payAmount)
                // console.log(parseUnits(_usdAmount, global.usdDecimals))
                // console.log(parseUnits(payAmount, token.decimals))
                const contracts = [
                    {
                        address: global.CONTRACTS.Main,
                        abi: ContractABI,
                        functionName: 'getPaymentTokenAmount',
                        args: [token.address, parseUnits(_usdAmount, global.usdDecimals)],
                    },
                    {
                        address: global.CONTRACTS.Main,
                        abi: ContractABI,
                        functionName: 'getUsdAmount',
                        args: [token.address, parseUnits(_payAmount, token.decimals)],
                    }
                ]

                const _data = await multicall({
                    chainId: global.chain.id,
                    contracts
                })
                // console.log(_data)

                setData({
                    payAmountOut: _data[0].status === "success" ? formatUnits(_data[0].result, token.decimals) : '0',
                    tokenAmountOut: curTokenPrice && _data[1].status === "success" ? (parseFloat(formatUnits(_data[1].result, global.usdDecimals))/curTokenPrice).toString() : '0',
                })
            } catch (error) {
                console.log('hook err', error)
            }
        };
        fetchData();
        // eslint-disable-next-line
    }, [token.address, token.decimals, payAmount, tokenAmount, curTokenPrice, refetch])

    return data
}
