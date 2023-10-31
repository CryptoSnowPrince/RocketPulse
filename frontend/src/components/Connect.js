import React from "react";

import { ConnectWallet } from "./ConnectWallet";

export const Connect = function (props) {
  return (
    <React.Fragment>
      <div
        className="text-lg border-2 font-text border-yellow-300 px-2 py-1 rounded-full text-yellow-300"
      >
        <ConnectWallet />
      </div>
    </React.Fragment>
  );
};

export default Connect;
