require("dotenv").config();
import { cryptoWaitReady } from "@polkadot/util-crypto";
import * as definitions from "../interfaces/definitions";
import { getSudoWallet, getSubstrateWallets, createRPC, createTypes, buildApi } from "./helpers";

const main = async () => {
  const rpcUrl = process.env.RPC_URL || "ws://127.0.0.1:9988";
  const sudoWallet = getSudoWallet(process.env.CHAIN_NAME || "dali-local");
  const dotWallets = getSubstrateWallets();

  const rpc = createRPC(definitions);
  const types = createTypes(definitions);

  const api = await buildApi(rpcUrl, types, rpc);

  await api.disconnect();
  process.exit(0);
};

cryptoWaitReady().then(() => {
  main().catch(err => {
    console.error(err.message);
    process.exit(0);
  });
});
