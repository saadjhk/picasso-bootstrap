require("dotenv").config();
import { cryptoWaitReady, signatureVerify } from "@polkadot/util-crypto";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { getSubstrateWallets, getSudoWallet } from "./keys";
import * as definitions from "../interfaces/definitions";
import { createRPC, createTypes, toChainUnits } from "./utils";
import { setupSwaps } from "./pablo";

const main = async () => {
  await cryptoWaitReady();
  const sudoWallet = getSudoWallet("dali-local");
  const dotWallets = getSubstrateWallets();

  if (!dotWallets.length)
    throw new Error("Needs atleast one Substrate wallet");

  const rpc = createRPC(definitions);
  const types = createTypes(definitions);

  const provider = new WsProvider(process.env.PICASSO_RPC_URL || "", 1000);
  const api = await ApiPromise.create({ provider, types, rpc });
  await api.isReady;

  await setupSwaps(api, sudoWallet, dotWallets[0]);
  // await setupBonds(api, sudoWallet, dotWallets[0]);
  // const addLiqTx = api.tx.pablo.removeLiquidity(
  //   1,
  //   api.createType("u128", toChainUnits("50000").toString()),
  //   0,
  //   0
  // );

  // let payload: any = addLiqTx.registry.createType(
  //   "ExtrinsicPayload",
  //   addLiqTx.registry.metadata
  // );

  // payload = {
  //   ...payload,
  //   runtimeVersion: api.runtimeVersion,
  // };

  // const nonce = await api.rpc.system.accountNextIndex(sudoWallet.publicKey);
  // const fk = addLiqTx.sign(sudoWallet, { nonce });
  // const data = await api.rpc.system.dryRun(u8aToHex(fk.toU8a()));

  // const b: any = data.toJSON();
  // console.log(b);

  await api.disconnect();
  process.exit(0);
};

cryptoWaitReady().then(() => {
  main().catch((err) => {
    console.error(err.message);
  });
});
