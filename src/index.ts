require("dotenv").config();
import { cryptoWaitReady } from "@polkadot/util-crypto";
import { ApiPromise, WsProvider } from "@polkadot/api";
import * as definitions from "../interfaces/definitions";
import { getSudoWallet, getSubstrateWallets, createRPC, createTypes } from "./helpers";

const main = async () => {
  const sudoWallet = getSudoWallet(process.env.CHAIN_NAME || "dali-local");
  const dotWallets = getSubstrateWallets();

  const rpc = createRPC(definitions);
  const types = createTypes(definitions);

  const provider = new WsProvider(process.env.RPC_URL, 1000);
  const api = await ApiPromise.create({ provider, types, rpc });
  await api.isReady;

  await api.disconnect();
  process.exit(0);
};

cryptoWaitReady().then(() => {
  main().catch(err => {
    console.error(err.message);
    process.exit(0);
  });
});
