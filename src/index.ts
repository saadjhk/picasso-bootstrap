require("dotenv").config();
import { cryptoWaitReady } from "@polkadot/util-crypto";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { getSubstrateWallets, getSudoWallet } from "./utils";
import * as definitions from "../interfaces/definitions";
import { createRPC, createTypes } from "./utils";

const main = async () => {
  const sudoWallet = getSudoWallet("dali-local");
  const dotWallets = getSubstrateWallets();

  const rpc = createRPC(definitions);
  const types = createTypes(definitions);

  const provider = new WsProvider(process.env.PICASSO_RPC_URL, 1000);
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
