import { formatUnits } from "viem";
import { global } from "../config/global";
import BuyItem from "./BuyItem";

export default function BuyCard(props) {
    return (
        <div className="w-full lg:w-[600px] rounded-2xl border-2 border-gray-700 flex flex-col items-center justify-center text-center px-2 bg-center bg-no-repeat bg-contain]">
            <div className="w-full px-3 items-center text-2xl text-center mt-2">
                <label>{`You are ${props.isWL ? 'whitelisted!' : 'non-whitelisted!'}`}</label>
            </div>
            {
                props && global.TOKENS.map((value, key) => {
                    return <BuyItem
                        key={key}
                        token={value}
                        setRefresh={props.setRefresh}
                        refresh={props.refresh}
                        isWL={props.isWL}
                        userVolume={props.userVolume[key]?.status === 'success'
                            ? parseFloat(formatUnits(props.userVolume[key]?.result, value.decimals))
                            : 0}
                        tokenBalance={props.tokenBalance[key]?.status === 'success'
                            ? parseFloat(formatUnits(props.tokenBalance[key]?.result, value.decimals))
                            : 0}
                        allowance={props.allowance[key]?.status === 'success'
                            ? parseFloat(formatUnits(props.allowance[key]?.result, value.decimals))
                            : 0}
                        ethBalance={props.ethBalance} />
                })
            }
        </div>
    );
}
