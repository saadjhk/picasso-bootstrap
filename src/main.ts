require("dotenv").config();
import { cryptoWaitReady } from "@polkadot/util-crypto";
import { getSudoWallet, getSubstrateWallets } from "@picasso/helpers/wallets";
import * as definitions from "@composable/definitions";
import { createRPC, createTypes, buildApi } from "@picasso/helpers";

const main = async () => {
  const rpcUrl = process.env.RPC_URL || "ws://127.0.0.1:9988";
  const chainName = process.env.CHAIN_NAME || "dali-local";
  
  const sudoWallet = getSudoWallet(chainName);
  const dotWallets = getSubstrateWallets();

  const rpc = createRPC(definitions);
  const types = createTypes(definitions);
  const api = await buildApi(rpcUrl, types, rpc);

  console.log('Hello')

  await api.disconnect();
  process.exit(0);
};

cryptoWaitReady().then(() => {
  main().catch(err => {
    console.error(err.message);
    process.exit(0);
  });
});
