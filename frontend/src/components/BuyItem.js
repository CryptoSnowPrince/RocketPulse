import { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import { writeContract, prepareWriteContract, fetchFeeData, waitForTransaction } from "@wagmi/core"
import { displayRemainTime, displayTimeAmount, formatNumber, getDefaultGas, getMaxValue, isSupportedChain } from "../utils/utils";
import { toast } from "react-toastify";
import { parseUnits } from "viem";
import { global } from "../config/global";
import contractABI from '../assets/abi/contribute.json'
import erc20ABI from '../assets/abi/token.json'

export default function BuyItem(props) {
    const [tokenAmount, setTokenAmount] = useState('')
    const { address } = useAccount()
    const { chain } = useNetwork()

    const [btnMsg, setBtnMsg] = useState("BUY NOW")
    const [pending, setPending] = useState(false)
    const [errMsg, setErrMsg] = useState(false)

    const [curTime, setCurTime] = useState(false)

    useEffect(() => {
        const timerID = setInterval(() => {
            const now = Math.round(Date.now() / 1000);
            setCurTime(now)
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!props) {
            setBtnMsg("LOADING...")
            setErrMsg("Please wait! Loading...")
            return
        }

        if (pending) {
            setBtnMsg("PENDING...")
            setErrMsg("Please wait! Pending...")
            return
        }

        if (!address) {
            setBtnMsg("Connect")
            setErrMsg("Please connect wallet!")
            return
        }

        if (!isSupportedChain(chain)) {
            setBtnMsg("Wrong Network")
            setErrMsg(`Please connect wallet to ${global.chain.name}!`)
            return
        }

        if (props.ethBalance < getDefaultGas()) {
            setBtnMsg(`Insuff ${global.chain.name}`)
            setErrMsg(`Insufficient ${global.chain.name}! Please buy more ${global.chain.name}!`)
            return
        }

        const validAmount = parseFloat(tokenAmount)
        if (!validAmount || validAmount < 0) {
            setBtnMsg("Enter amount")
            setErrMsg(`Please enter valid ${props.token.name} amount!`)
            return
        }

        if (validAmount > getMaxValue(props.tokenBalance, props.token.isNative)) {
            setBtnMsg(`Insuff ${props.token.name}`)
            setErrMsg(`Insufficient ${props.token.name}! Please buy more ${props.token.name}!`)
            return
        }

        if (props.allowance < validAmount + 10000) {
            setBtnMsg('ENABLE')
            setErrMsg(``)
            return
        }

        let startTime;
        if (props.isWL) {
            startTime = global.START_WL
        } else {
            startTime = global.START_ALL
        }

        if (startTime > curTime) {
            setBtnMsg(`${displayRemainTime(startTime - curTime)}`)
            setErrMsg(`You are ${props.isWL ? 'whitelisted!' : 'non-whitelisted!'} Please wait ${displayTimeAmount(startTime - curTime)} to contribute!`)
            return
        }

        if (props.token.limit < validAmount + props.userVolume) {
            setBtnMsg(`Over Limit!`)
            setErrMsg(`You can contribute under ${props.token.limit - props.userVolume} ${props.token.name}`)
            return
        }

        setBtnMsg('CONTRIBUTE')
    }, [address, chain, tokenAmount, pending, props, curTime])

    const handleBtn = async () => {
        if (btnMsg === 'ENABLE' || btnMsg === 'CONTRIBUTE') {
            setPending(true)
            try {
                const feeData = await fetchFeeData()
                // console.log('[PRINCE] feeData: ', feeData)

                let data = null
                if (btnMsg === 'ENABLE') {
                    try {
                        data = {
                            address: props.token.address,
                            abi: erc20ABI,
                            functionName: 'increaseAllowance',
                            args: [global.CONTRACTS.Main, global.MAX_UINT256_HALF],
                            chainId: chain.id,
                            gasPrice: feeData.gasPrice ? feeData.gasPrice : undefined,
                        }
                        // const incApproveData = 
                        await prepareWriteContract(data)
                    } catch (error) {
                        data = {
                            address: props.token.address,
                            abi: erc20ABI,
                            functionName: 'approve',
                            args: [global.CONTRACTS.Main, global.MAX_UINT256],
                            chainId: chain.id,
                            gasPrice: feeData.gasPrice ? feeData.gasPrice : undefined,
                        }
                    }
                } else {
                    if (props.token.isNative) {
                        data = {
                            address: global.CONTRACTS.Main,
                            abi: contractABI,
                            functionName: 'contributeByETH',
                            chainId: chain.id,
                            gasPrice: feeData.gasPrice ? feeData.gasPrice : undefined,
                            value: parseUnits(tokenAmount, props.token.decimals)
                        }
                    } else {
                        data = {
                            address: global.CONTRACTS.Main,
                            abi: contractABI,
                            functionName: 'contributeByToken',
                            args: [props.token.address, parseUnits(tokenAmount, props.token.decimals)],
                            chainId: chain.id,
                            gasPrice: feeData.gasPrice ? feeData.gasPrice : undefined,
                        }
                    }
                }

                const preparedData = await prepareWriteContract(data)
                // console.log('[PRINCE] preparedData: ', preparedData)

                const writeData = await writeContract(preparedData)
                // console.log('[PRINCE] writeData: ', writeData)

                const txPendingData = waitForTransaction(writeData)
                toast.promise(txPendingData, {
                    pending: "Waiting for pending... 👌",
                });

                // console.log('[PRINCE] txPendingData: ', txPendingData)
                const txData = await txPendingData;
                // console.log('[PRINCE] txData: ', txData)
                if (txData && txData.status === "success") {
                    if (btnMsg === 'ENABLE') {
                        toast.success(`Successfully enabled to contribute! 👌`)
                    } else {
                        toast.success(`Successfully contributed ${formatNumber(parseFloat(tokenAmount))} ${props.token.name}! 👍`)
                    }
                } else {
                    toast.error("Error! Transaction is failed.");
                }

            } catch (error) {
                console.log(error)
                try {
                    if (error?.shortMessage) {
                        toast.error(error?.shortMessage);
                    } else {
                        toast.error("Error! Something went wrong.");
                    }
                } catch (error) {
                    toast.error("Error! Something went wrong.");
                }
            }
            try {
                if (props.setRefresh !== undefined && props.refresh !== undefined) {
                    props.setRefresh(!props.refresh)
                }
            } catch (error) { }
            setPending(false)
            return
        }

        toast.warn(errMsg)
    }

    return (
        <>
            {
                props && <div className="w-full lg:w-11/12 py-2 bg-black/[0.95] rounded-2xl border-2 border-gray-700 flex flex-col justify-center text-center px-2 my-3">
                    <div className="w-full px-3 flex flex-row items-center justify-between text-lg text-center">
                        <label className="">You contribute {props.token.name}</label>
                    </div>
                    <div className="w-full py-2 bg-black/[0.95] flex flex-row justify-center text-center px-2 mt-2 gap-2">
                        <div className="w-1/2 h-[50px] px-3 rounded-xl border-2 border-gray-700 flex flex-row items-center justify-between text-2xl text-center gap-2">
                            <input
                                className={`w-full bg-transparent focus:border-0 active:border-0 focus:outline-0 ${pending ? `text-gray-800` : `text-white`}`}
                                placeholder="0"
                                value={tokenAmount}
                                disabled={pending}
                                onChange={(e) => setTokenAmount(e.target.value)}
                            />
                            <img src={props.token.logo} width={35} height={35} alt='token' />
                        </div>
                        <button
                            className={`w-1/2 h-[50px] bg-black/[0.95] text-xl rounded-xl border-2 ${pending ? `border-yellow-700 text-gray-800` : `border-yellow-500 text-white`}`}
                            disabled={pending}
                            onClick={handleBtn}
                        >
                            {btnMsg}
                        </button>
                    </div>
                    <div className="w-full px-3 flex flex-row items-center justify-start text-sm text-center">
                        <div className="flex flex-row items-center justify-end gap-2 text-center">
                            <label>{`Balance: ${formatNumber(props.tokenBalance)} ${props.token.name}`}</label>
                            <button
                                className={`${pending ? `text-yellow-800` : `text-yellow-400`}`}
                                disabled={pending}
                                onClick={(e) => {
                                    const maxValue = getMaxValue(props.tokenBalance, props.token.isNative);
                                    if (maxValue && maxValue > 0) {
                                        setTokenAmount(maxValue)
                                    }
                                }}
                            >Max</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
