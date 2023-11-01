import { formatNumber } from "../utils/utils";
import { formatUnits } from "viem";

export default function StatusItem(props) {
    return (
        <>
            <div className="lg:w-1/5 w-full flex lg:flex-col flex-row lg:justify-center justify-between items-center text-center px-2 py-1">
                <div className="flex flex-col items-center">
                    <label className="text-3xl sm:text-5xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                        {`${props.totalVolume?.status === "success"
                            ? formatNumber(parseFloat(formatUnits(props.totalVolume?.result, props.value.decimals)))
                            : 0
                            } ${props.value.name}`}
                    </label>
                </div>
                <label className="font-semibold uppercase text-gray-50 text-lg">Total Raised</label>
            </div>
            <div className="lg:w-1/5 w-full flex lg:flex-col flex-row lg:justify-center justify-between items-center text-center px-2 py-1">
                <div className="flex flex-col items-center">
                    <label className="text-3xl sm:text-5xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                        {`${props.userVolume?.status === "success"
                            ? formatNumber(parseFloat(formatUnits(props.userVolume?.result, props.value.decimals)))
                            : 0
                            } ${props.value.name}`}
                    </label>
                </div>
                <label className="font-semibold uppercase text-gray-50 text-lg">Total Sold</label>
            </div>
            <div className="lg:w-1/5 w-full flex lg:flex-col flex-row lg:justify-center justify-between items-center text-center px-2 py-1">
                <div className="flex flex-col items-center">
                    <label className="text-3xl sm:text-5xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                        {`${props.userVolume?.status === "success"
                            ? formatNumber(parseFloat(formatUnits(props.userVolume?.result, props.value.decimals)))
                            : 0
                            } ${props.value.name}`}
                    </label>
                </div>
                <label className="font-semibold uppercase text-gray-50 text-lg">You Invest</label>
            </div>
            <div className="lg:w-1/5 w-full flex lg:flex-col flex-row lg:justify-center justify-between items-center text-center px-2 py-1">
                <div className="flex flex-col items-center">
                    <label className="text-3xl sm:text-5xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                        {`${props.userVolume?.status === "success"
                            ? formatNumber(parseFloat(formatUnits(props.userVolume?.result, props.value.decimals)))
                            : 0
                            } ${props.value.name}`}
                    </label>
                </div>
                <label className="font-semibold uppercase text-gray-50 text-lg">Your Token</label>
            </div>
            {/* <div className="lg:w-1/5 w-full flex lg:flex-col flex-row lg:justify-center justify-between items-center text-center px-2 py-1">
                <div className="flex flex-col items-center">
                    <label className="text-3xl sm:text-5xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                        {`${props.userVolume?.status === "success"
                            ? formatNumber(parseFloat(formatUnits(props.userVolume?.result, props.value.decimals)))
                            : 0
                            } ${props.value.name}`}
                    </label>
                    <label className="font-semibold uppercase text-gray-50 text-lg">You Claimed</label>
                </div>
            </div> */}
        </>
    );
}
