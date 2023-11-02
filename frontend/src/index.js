import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/style.css";

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { global } from "./config/global";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    global.chain,
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: global.PROJECT,
  projectId: global.PROJECT_ID,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
