import React from "react";

import { ConnectWallet } from "./ConnectWallet";

export const Connect = function (props) {
  return (
    <React.Fragment>
      <div
        className="text-xl text-trumpos-fontDark text-2xl border-2 border-trumpos-panelLight rounded-full hover:text-trumpos-fontLight text-center font-text border-yellow-300 px-2 mx-auto my-auto py-2 rounded-full text-yellow-300 items-center"
      >
        <ConnectWallet />
      </div>
    </React.Fragment>
  );
};

export default Connect;
