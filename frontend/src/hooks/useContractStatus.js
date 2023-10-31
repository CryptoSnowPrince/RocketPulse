import { useEffect, useState } from "react";
import ContractABI from "../assets/abi/contribute.json"
import { useAccount } from "wagmi";
import { multicall, fetchBalance } from '@wagmi/core'
import { global } from "../config/global";

export function useContractStatus(refresh) {
    const [data, setData] = useState({
        totalVolume: [],
        isWL: false,
        userVolume: [],
        tokenBalance: [],
        allowance: [],
        ethBalance: 0,
    })
    const { address } = useAccount();

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
                const contracts = []
                global.TOKENS.map((value, key) => {
                    return contracts.push({
                        address: global.CONTRACTS.Main,
                        abi: ContractABI,
                        functionName: 'totalVolume',
                        args: [value.address],
                    })
                })

                if (address) {
                    contracts.push({
                        address: global.CONTRACTS.Main,
                        abi: ContractABI,
                        functionName: 'whiteList',
                        args: [address],
                    })
                    global.TOKENS.map((value, key) => {
                        return contracts.push({
                            address: global.CONTRACTS.Main,
                            abi: ContractABI,
                            functionName: 'userVolume',
                            args: [address, value.address],
                        })
                    })
                    global.TOKENS.map((value, key) => {
                        return contracts.push({
                            address: global.CONTRACTS.Main,
                            abi: ContractABI,
                            functionName: 'balanceOf',
                            args: [address, value.address],
                        })
                    })
                    global.TOKENS.map((value, key) => {
                        return contracts.push({
                            address: global.CONTRACTS.Main,
                            abi: ContractABI,
                            functionName: 'allowance',
                            args: [address, global.CONTRACTS.Main, value.address],
                        })
                    })
                }
                const _data = await multicall({
                    chainId: global.chain.id,
                    contracts
                })
                const _ethBalance = address ? (await fetchBalance({ address })) : 0
                const length = global.TOKENS.length

                setData({
                    totalVolume: _data.slice(0, length),
                    isWL: address && _data[length].status === "success" ? _data[length].result : false,
                    userVolume: address ? _data.slice(length + 1, 2 * length + 1) : [],
                    tokenBalance: address ? _data.slice(2 * length + 1, 3 * length + 1) : [],
                    allowance: address ? _data.slice(3 * length + 1, 4 * length + 1) : [],
                    ethBalance: parseFloat(_ethBalance.formatted),
                })
            } catch (error) {
                console.log('hook err', error)
            }
        };
        fetchData();
        // eslint-disable-next-line
    }, [address, refetch, refresh])

    return data
}
