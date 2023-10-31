import { formatNumber } from "../utils/utils";
import { formatUnits } from "viem";

export default function StatusItem(props) {
    return (
        <>
            <div className="lg:w-1/6 w-full rounded-2xl border-2 border-gray-700 flex lg:flex-col flex-row lg:justify-center justify-between items-center text-center px-2 py-1">
                <label>Total Raised </label>
                <div className="flex flex-col items-center">
                    <img src={props.value.logo} width={35} height={35} alt={props.value.name} />
                    <label className="text-yellow-500">
                        {`${props.totalVolume?.status === "success"
                            ? formatNumber(parseFloat(formatUnits(props.totalVolume?.result, props.value.decimals)))
                            : 0
                            } ${props.value.name}`}
                    </label>
                </div>
            </div>
            <div className="lg:w-1/6 w-full rounded-2xl border-2 border-gray-700 flex lg:flex-col flex-row lg:justify-center justify-between items-center text-center px-2 py-1">
                <label>You Invest</label>
                <div className="flex flex-col items-center">
                    <img src={props.value.logo} width={35} height={35} alt={props.value.name} />
                    <label className="text-yellow-500">
                        {`${props.userVolume?.status === "success"
                            ? formatNumber(parseFloat(formatUnits(props.userVolume?.result, props.value.decimals)))
                            : 0
                            } ${props.value.name}`}
                    </label>
                </div>
            </div>
        </>
    );
}
