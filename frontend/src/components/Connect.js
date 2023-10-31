import React from "react";

import { ConnectWallet } from "./ConnectWallet";

export const Connect = function (props) {
  return (
    <React.Fragment>
      <div
        className="font-semibold uppercase lg:text-2xl text-xl lg:border-4 border-2 border-trumpos-panelLight rounded-full hover:text-trumpos-fontLight text-center border-yellow-300 px-2 mx-auto lg:mx-0 my-auto py-2 rounded-full text-yellow-300 items-center"
      >
        <ConnectWallet />
      </div>
    </React.Fragment>
  );
};

export default Connect;
