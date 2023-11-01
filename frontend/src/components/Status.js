import { global } from "../config/global";
import StatusItem from "./StatusItem";

export default function Status(props) {
    return (
        <div className="w-full mx-auto gap-4 flex lg:flex-row flex-col items-center justify-between text-center lg:px-10 px-3 py-3">
            {
                props && props.totalVolume.length === global.TOKENS.length && global.TOKENS.map((value, key) => {
                    return <StatusItem
                        key={key}
                        value={value}
                        totalVolume={props.totalVolume[key]}
                        userVolume={props.userVolume && props.userVolume.length > 0 ? props.userVolume[key] : 0}
                    />
                })
            }
        </div>
    );
}
